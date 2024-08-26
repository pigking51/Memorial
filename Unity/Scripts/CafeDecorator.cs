using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Tilemaps;
using System.Collections.Generic;
using TMPro;

public class CafeDecorator : MonoBehaviour
{
    public Tilemap wallTilemap;    // 위의
    public Tilemap floorTilemap;
    public Button changeWallButton;
    public Button changeFloorButton;
    public GameObject popupPanel;
    public Button popupCloseButton;
    public Transform buttonContainer;
    public Button buttonPrefab;

    public TileCollection wallTileCollection;
    public TileCollection floorTileCollection;

    private Tilemap currentTilemap;

    public static string saveWall;
    public static string saveFloor;

    void Start()
    {
        // 버튼에 리스너 추가
        changeWallButton.onClick.AddListener(() => OpenPopup(wallTilemap, wallTileCollection.tiles));
        changeFloorButton.onClick.AddListener(() => OpenPopup(floorTilemap, floorTileCollection.tiles));
        popupCloseButton.onClick.AddListener(ClosePopup);

        // 초기에 팝업창 숨기기
        popupPanel.SetActive(false);
    }

    private void Update()
    {
        // Esc 키를 눌렀을 때 팝업창 닫기
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            popupPanel.SetActive(false);
        }
    }

    void OpenPopup(Tilemap tilemap, List<TileBase> tiles)
    {
        currentTilemap = tilemap;
        popupPanel.SetActive(true);
        ClearButtonContainer();
        CreateTileButtons(tiles);
    }

    void ClosePopup()
    {
        popupPanel.SetActive(false);
    }

    void ClearButtonContainer()
    {
        foreach (Transform child in buttonContainer)
        {
            Destroy(child.gameObject);
        }
    }

    void CreateTileButtons(List<TileBase> tiles)
    {
        foreach (TileBase tile in tiles)
        {
            Button newButton = Instantiate(buttonPrefab, buttonContainer);
            newButton.GetComponentInChildren<TextMeshProUGUI>().text = tile.name;
            newButton.onClick.AddListener(() => ChangeTilemapTile(currentTilemap, tile));
        }
    }

    void ChangeTilemapTile(Tilemap tilemap, TileBase newTile)
    {
        BoundsInt bounds = tilemap.cellBounds;
        TileBase[] allTiles = tilemap.GetTilesBlock(bounds);
        for (int x = 0; x < bounds.size.x; x++)
        {
            for (int y = 0; y < bounds.size.y; y++)
            {
                int index = x + y * bounds.size.x;
                if (allTiles[index] != null)
                {
                    tilemap.SetTile(new Vector3Int(bounds.x + x, bounds.y + y, 0), newTile);
                }
            }
            
        }
        if (wallTileCollection.tiles.Contains(newTile))
        {
            saveWall = newTile.name;
        }
        else if (floorTileCollection.tiles.Contains(newTile))
        {
            saveFloor = newTile.name;
        }
    }
}