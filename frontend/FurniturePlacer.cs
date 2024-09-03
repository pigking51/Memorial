using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Tilemaps;
using TMPro;

public class FurniturePlacer : MonoBehaviour
{
    public Button placeFurnitureButton;
    public Button deleteFurnitureButton;
    public GameObject furniturePopupPanel;
    public Button furniturePopupCloseButton;
    public Transform furnitureButtonContainer;
    public Button furnitureButtonPrefab;
    public List<GameObject> furniturePrefabs;
    public Tilemap floorTilemap;
    public Tilemap furnitureTilemap;
    public GameObject placerNotification;

    public static string saveFurniture;

    private GameObject currentFurniture;
    private FurnitureData currentFurnitureData;
    private bool isDeleteMode = false;

    void Start()
    {
        placeFurnitureButton.onClick.AddListener(OpenFurniturePopup);
        furniturePopupCloseButton.onClick.AddListener(CloseFurniturePopup);
        deleteFurnitureButton.onClick.AddListener(ToggleDeleteMode);

        furniturePopupPanel.SetActive(false);
        CreateFurnitureButtons();
        placerNotification.SetActive(false);
    }

    void ToggleDeleteMode()
    {
        isDeleteMode = !isDeleteMode;
        placerNotification.SetActive(isDeleteMode); // 삭제 모드일 때 알림 활성화
    }

    void Update()
    {
        if (isDeleteMode && Input.GetMouseButtonDown(0))
        {
            RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

            if (hit.collider != null && hit.collider.gameObject.CompareTag("Furniture"))
            {
                Vector3Int cellPosition = furnitureTilemap.WorldToCell(hit.collider.transform.position);
                DeleteFurniture(hit.collider.gameObject, cellPosition);
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

            if (Input.GetMouseButtonDown(0) && canPlace)
            {
                PlaceFurniture(cellPosition);
                if (collider != null)
                {
                    collider.enabled = true;
                }
                furniturePopupPanel.SetActive(true);
                placerNotification.SetActive(false);
            }

            if (Input.GetMouseButton(1))
            {
                DeleteFurniture(currentFurniture, cellPosition);
                placerNotification.SetActive(false);
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

    public void DeleteFurniture(GameObject furniture, Vector3Int cellPosition)
    {
        if (furniture != null)
        {
            Destroy(furniture);
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
