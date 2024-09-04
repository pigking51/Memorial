using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;
using UnityEngine.UI;
using TMPro;

public class FurniturePlacer : MonoBehaviour
{
    public Button placeFurnitureButton;
    public Button deleteFurnitureButton; // 삭제 버튼
    public Button rotateButton; // 회전 버튼 (사용하지 않음)
    public GameObject furniturePopupPanel;
    public Button furniturePopupCloseButton;
    public Transform furnitureButtonContainer;
    public Button furnitureButtonPrefab;
    public List<GameObject> furniturePrefabs;
    public Tilemap floorTilemap;
    public Tilemap furnitureTilemap;
    public GameObject placerNotification;

    public static string saveFurniture;

    public GameObject currentFurniture;
    private FurnitureData currentFurnitureData;
    private bool isDeleteMode = false; // 삭제 모드 활성화 여부
    private bool isRotated = false; // 회전 상태 여부

    void Start()
    {
        placeFurnitureButton.onClick.AddListener(OpenFurniturePopup);
        furniturePopupCloseButton.onClick.AddListener(CloseFurniturePopup);
        deleteFurnitureButton.onClick.AddListener(ToggleDeleteMode); // 삭제 버튼 클릭 시 삭제 모드 토글
        rotateButton.onClick.AddListener(ToggleRotate); // 회전 버튼 클릭 시 회전 기능 실행 (현재 사용하지 않음)

        furniturePopupPanel.SetActive(false);
        CreateFurnitureButtons();
        placerNotification.SetActive(false);

        SetRotateButtonState(false); // 초기 상태에서 회전 버튼 비활성화
    }

    // 삭제 모드 토글 함수
    void ToggleDeleteMode()
    {
        isDeleteMode = !isDeleteMode; // 삭제 모드 활성화/비활성화 전환
        placerNotification.SetActive(isDeleteMode); // 삭제 모드 활성화 시 알림 표시

        if (isDeleteMode)
        {
            SetRotateButtonState(false); // 삭제 모드가 활성화되면 회전 버튼 비활성화
        }
        else
        {
            SetRotateButtonState(currentFurniture != null); // 가구가 선택된 경우 회전 버튼 활성화
        }
    }

    // 회전 기능을 토글하는 함수 (현재 사용하지 않음)
    void ToggleRotate()
    {
        if (currentFurniture != null)
        {
            // 가구를 z축을 기준으로 90도 회전
            currentFurniture.transform.Rotate(0, 0, 90);
            isRotated = !isRotated; // 회전 상태 토글
        }
    }

    // 회전 버튼의 활성화 상태를 설정하는 함수
    void SetRotateButtonState(bool isActive)
    {
        rotateButton.interactable = isActive;
    }

    void Update()
    {
        // 삭제 모드가 활성화된 상태에서 마우스 왼쪽 버튼 클릭 시 가구 삭제
        if (isDeleteMode && Input.GetMouseButtonDown(0))
        {
            // 클릭한 위치에 있는 가구를 Raycast로 감지
            RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

            if (hit.collider != null && hit.collider.gameObject.CompareTag("Furniture"))
            {
                Vector3Int cellPosition = furnitureTilemap.WorldToCell(hit.collider.transform.position);
                DeleteFurniture(hit.collider.gameObject, cellPosition); // 감지된 가구 삭제
            }
        }
        else if (currentFurniture != null)
        {
            Vector3 mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Vector3Int cellPosition = floorTilemap.WorldToCell(mouseWorldPos);
            Vector3 cellCenterWorld = floorTilemap.GetCellCenterWorld(cellPosition);
            currentFurniture.transform.position = new Vector3(cellCenterWorld.x, cellCenterWorld.y, 0);
            Collider2D collider = currentFurniture.GetComponent<Collider2D>();
            if (collider != null)
            {
                collider.enabled = false;
            }
            furniturePopupPanel.SetActive(false);
            placerNotification.SetActive(true);

            bool canPlace = CanPlaceFurniture(cellPosition);
            currentFurniture.GetComponent<SpriteRenderer>().color = canPlace ? Color.white : Color.red;

            if (Input.GetMouseButtonDown(0) && canPlace) // 왼쪽 버튼으로 가구 설치
            {
                PlaceFurniture(cellPosition);
                if (collider != null)
                {
                    collider.enabled = true;
                }
                furniturePopupPanel.SetActive(true);
                placerNotification.SetActive(false);
            }
            else if (Input.GetMouseButtonDown(1)) // 오른쪽 버튼으로 가구 회전
            {
                ToggleRotate(); // 오른쪽 클릭 시 회전 기능 실행
            }
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (isDeleteMode)
            {
                ToggleDeleteMode(); // ESC 버튼을 누르면 삭제 모드 종료
            }
            else
            {
                furniturePopupPanel.SetActive(false);
                placerNotification.SetActive(false);
                DeleteFurniture(currentFurniture, Vector3Int.zero);
            }
        }
    }

    // 가구 삭제 함수
    public void DeleteFurniture(GameObject furniture, Vector3Int cellPosition)
    {
        if (furniture != null)
        {
            Destroy(furniture); // 가구 오브젝트 파괴
        }
    }

    void OpenFurniturePopup()
    {
        furniturePopupPanel.SetActive(true);
    }

    void CloseFurniturePopup()
    {
        furniturePopupPanel.SetActive(false);
        placerNotification.SetActive(false);
        DeleteFurniture(currentFurniture, Vector3Int.zero);
    }

    void CreateFurnitureButtons()
    {
        foreach (GameObject furniturePrefab in furniturePrefabs)
        {
            Button newButton = Instantiate(furnitureButtonPrefab, furnitureButtonContainer);
            newButton.GetComponentInChildren<TextMeshProUGUI>().text = furniturePrefab.name;
            newButton.onClick.AddListener(() => SelectFurniture(furniturePrefab));
        }
    }

    // 선택된 가구를 설정하는 함수
    void SelectFurniture(GameObject furniturePrefab)
    {
        if (currentFurniture != null)
        {
            Destroy(currentFurniture);
        }

        currentFurniture = Instantiate(furniturePrefab);
        currentFurnitureData = currentFurniture.GetComponent<FurnitureData>();

        Collider2D collider = currentFurniture.GetComponent<Collider2D>();
        if (collider != null)
        {
            collider.enabled = false;
        }

        saveFurniture = furniturePrefab.name;
        SetRotateButtonState(true); // 가구가 선택되면 회전 버튼 활성화
        Debug.Log("Selected Furniture: " + currentFurniture.name);
    }

    bool CanPlaceFurniture(Vector3Int cellPosition)
    {
        if (currentFurnitureData == null) return false;

        int width = currentFurnitureData.size.x;
        int height = currentFurnitureData.size.y;

        for (int x = 0; x < width; x++)
        {
            for (int y = 0; y < height; y++)
            {
                Vector3Int checkPosition = cellPosition + new Vector3Int(x, y, 0);
                if (furnitureTilemap.GetTile(checkPosition) != null)
                {
                    return false;
                }
            }
        }
        return true;
    }

    void PlaceFurniture(Vector3Int cellPosition)
    {
        if (currentFurnitureData == null) return;

        int width = currentFurnitureData.size.x;
        int height = currentFurnitureData.size.y;

        for (int x = 0; x < width; x++)
        {
            for (int y = 0; y < height; y++)
            {
                Vector3Int placePosition = cellPosition + new Vector3Int(x, y, 0);
                furnitureTilemap.SetTile(placePosition, null);
            }
        }

        currentFurniture.transform.position = furnitureTilemap.GetCellCenterWorld(cellPosition);
        currentFurniture.transform.SetParent(furnitureTilemap.transform);
        currentFurniture.tag = "Furniture";
        currentFurniture = null;
    }
}
