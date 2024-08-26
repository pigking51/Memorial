using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Tilemaps;
using TMPro;

public class FurniturePlacer : MonoBehaviour
{
    public Button placeFurnitureButton;
    public GameObject furniturePopupPanel;
    public Button furniturePopupCloseButton;
    public Transform furnitureButtonContainer;
    public Button furnitureButtonPrefab;
    public List<GameObject> furniturePrefabs;
    public Tilemap floorTilemap; // 바닥 타일맵 참조
    public Tilemap furnitureTilemap; // 가구 배치를 위한 별도의 타일맵

    public static string saveFurniture;

    private GameObject currentFurniture;
    private FurnitureData currentFurnitureData;


    void Start()
    {
        placeFurnitureButton.onClick.AddListener(OpenFurniturePopup);
        furniturePopupCloseButton.onClick.AddListener(CloseFurniturePopup);
        furniturePopupPanel.SetActive(false);
        CreateFurnitureButtons();
    }

    void OpenFurniturePopup()
    {
        furniturePopupPanel.SetActive(true);
    }

    void CloseFurniturePopup()
    {
        furniturePopupPanel.SetActive(false);
    }

    void CreateFurnitureButtons()
    {
        Debug.Log("Creating furniture buttons. Total prefabs: " + furniturePrefabs.Count);
        foreach (GameObject furniturePrefab in furniturePrefabs)
        {
            Button newButton = Instantiate(furnitureButtonPrefab, furnitureButtonContainer);
            newButton.GetComponentInChildren<TextMeshProUGUI>().text = furniturePrefab.name;
            newButton.onClick.AddListener(() => SelectFurniture(furniturePrefab));
            Debug.Log("Created button for: " + furniturePrefab.name);
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

        // Collider 비활성화
        /* Collider2D collider = currentFurniture.GetComponent<Collider2D>();
        if (collider != null)
        {
            collider.enabled = false;
        } */


        // CloseFurniturePopup();
    }

    void Update()
    {
        if (currentFurniture != null)
        {
            Vector3 mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Vector3Int cellPosition = floorTilemap.WorldToCell(mouseWorldPos);
            Vector3 cellCenterWorld = floorTilemap.GetCellCenterWorld(cellPosition);
            currentFurniture.transform.position = new Vector3(cellCenterWorld.x, cellCenterWorld.y, 0);

            // 가구 배치 가능 여부 확인
            bool canPlace = CanPlaceFurniture(cellPosition);

            // 가구 색상 변경으로 배치 가능 여부 표시
            currentFurniture.GetComponent<SpriteRenderer>().color = canPlace ? Color.white : Color.red;

            if (Input.GetMouseButtonDown(0) && canPlace)
            {
                PlaceFurniture(cellPosition);
            }
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            furniturePopupPanel.SetActive(false);
        }
    }

    bool CanPlaceFurniture(Vector3Int cellPosition)
    {
        if (currentFurnitureData == null) return false;

        for (int x = 0; x < currentFurnitureData.size.x; x++)
        {
            for (int y = 0; y < currentFurnitureData.size.y; y++)
            {
                Vector3Int checkPosition = cellPosition + new Vector3Int(x, y, 0);
                if (furnitureTilemap.HasTile(checkPosition) || !floorTilemap.HasTile(checkPosition))
                {
                    return false;
                }
            }
        }
        return true;
    }

    void PlaceFurniture(Vector3Int cellPosition)
    {
        for (int x = 0; x < currentFurnitureData.size.x; x++)
        {
            for (int y = 0; y < currentFurnitureData.size.y; y++)
            {
                Vector3Int tilePosition = cellPosition + new Vector3Int(x, y, 0);
                furnitureTilemap.SetTile(tilePosition, ScriptableObject.CreateInstance<Tile>());
            }
        }

        GameObject placedFurniture = Instantiate(currentFurniture, floorTilemap.GetCellCenterWorld(cellPosition), Quaternion.identity);

        // Collider 활성화
        Collider2D collider = placedFurniture.GetComponent<Collider2D>();
        if (collider != null)
        {
            collider.enabled = true;
            Destroy(placedFurniture);
        }


        /*Instantiate(currentFurniture, floorTilemap.GetCellCenterWorld(cellPosition), Quaternion.identity);*/
        currentFurniture = null;
        currentFurnitureData = null;
    }
}