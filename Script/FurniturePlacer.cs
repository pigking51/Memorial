using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Tilemaps;
using TMPro;

public class FurniturePlacer : MonoBehaviour
{
    public Button placeFurnitureButton;    // 메인 화면 '가구 배치' 버튼을 담는 변수
    public GameObject furniturePopupPanel;    // 가구 배치에 필요한 버튼들과 오브젝트를 담는 팝업 패널
    public Button furniturePopupCloseButton;    // 팝업 화면을 닫기 위해 필요
    public Transform furnitureButtonContainer;    // 가구 버튼들을 담기 위한 콘테이너 변수
    public Button furnitureButtonPrefab;    // 가구 이름을 담는 버튼 프리팹
    public List<GameObject> furniturePrefabs;    // 게임오브젝트 타입의 변수를 담는 리스트이다. 여기에 가구 이미지들을 담으면 된다.
    public Tilemap floorTilemap;    // 바닥 타일맵 참조
    public Tilemap furnitureTilemap;    // 가구 배치를 위한 별도의 타일맵
    public GameObject placerNotification;

    public static string saveFurniture;

    private GameObject currentFurniture;    // SelectFurniture 메서드에서 가구 프리팹을 담기 위한 변수
    private FurnitureData currentFurnitureData;    // SelectFurniture 메서드에서 가구 범위를 담기 위한 변수


    void Start()
    {
        placeFurnitureButton.onClick.AddListener(OpenFurniturePopup);    // '가구 배치' 버튼을 클릭하면 팝업 창 출력
        furniturePopupCloseButton.onClick.AddListener(CloseFurniturePopup);    // 닫기 버튼을 누르면 팝업창을 닫는다.
        furniturePopupPanel.SetActive(false);    // 팝업창은 게임이 시작할 때는 안 보이고 '가구 배치' 버튼을 누를 때만 보여야 하므로 처음에는 false 값을 준다. 이걸 설정하지 않으면 게임 시작할 때 팝업창 보임
        CreateFurnitureButtons();    // 이거 없으면 팝업창 열어도 가구 버튼들이 안 보임
        placerNotification.SetActive(false);
    }

    void OpenFurniturePopup()    // 팝업창을 열기 위한 메서드
    {
        furniturePopupPanel.SetActive(true);
    }

    void CloseFurniturePopup()    // 팝업창을 닫기 위한 메서드
    {
        furniturePopupPanel.SetActive(false);
        placerNotification.SetActive(false);
        Destroy(currentFurniture);    // 이 코드 없으면 가구 배치 창 닫아도 마우스에 가구가 남아있음. 무조건 설치해야하는 경우를 방지
    }

    void CreateFurnitureButtons()
    {
        // Debug.Log("Creating furniture buttons. Total prefabs: " + furniturePrefabs.Count);    // 가구가 몇개나 생성됐는지 출력하는 디버그 콘솔인데 필요없어서 주석 처리함
        foreach (GameObject furniturePrefab in furniturePrefabs)    // furniturePrefabs 리스트 안에 있는 각 furniturePrefab을 순회한다.(새로운 게임 오브젝트를 직접 만드는게 아님!)
        {
            Button newButton = Instantiate(furnitureButtonPrefab, furnitureButtonContainer);    // 이 버튼은 furnitrueButtonPrefab을 기반으로 만들어지고 새로 생성된 버튼의 부모는 furnitureButtonContainer가 된다.
            newButton.GetComponentInChildren<TextMeshProUGUI>().text = furniturePrefab.name;
            newButton.onClick.AddListener(() => SelectFurniture(furniturePrefab));    // 팝업창 내 가구 버튼을 클릭하면 'SelectFurniture()' 메서드를 호출
            // Debug.Log("Created button for: " + furniturePrefab.name);    // 가구 프리팹 이름을 출력하는 디버그 콘솔인데 필요없어서 주석 처리함
        }
    }

    void SelectFurniture(GameObject furniturePrefab)
    {
        if (currentFurniture != null)    // 만약 currentFurniture가 null 값이 아니라면 currentFurniture에 담겨 있는 값을 없앤다. 이 코드가 없으면 가구를 선택하고 배치하지 않은 상태에서 다른 가구를 클릭했을 때 이전에 선택한 가구가 사라지지 않는 문제가 생긴다.
        {
            Destroy(currentFurniture);
        }

        // 아래 코드들은 위의 if문과는 상관없이 항상 실행된다.
        currentFurniture = Instantiate(furniturePrefab);    // 이 형식은 원본 오브젝트의 복사본을 생성하며, 위치와 회전은 원본과 동일하다.
        currentFurnitureData = currentFurniture.GetComponent<FurnitureData>();    // 이 코드가 없으면 가구 범위가 지정되지 않아 아예 가구 배치가 안된다.

        // Collider 비활성화
        /* Collider2D collider = currentFurniture.GetComponent<Collider2D>();
        if (collider != null)
        {
            collider.enabled = false;
        } */
    }

    void Update()
    {
        if (currentFurniture != null)    // 가구 버튼을 클릭하면 currentFurniture에 값이 할당된다.
        {
            Vector3 mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);    // 현재 마우스 커서의 위치를 월드 좌표계로 변환한다. Input.mousePosition은 화면에서의 마우스 위치를 픽셀 단위로 변환하며, 'Camera.main.ScreenToWorldPoint'는 이 화면 좌표를 월드 좌표로 변환한다.
            Vector3Int cellPosition = floorTilemap.WorldToCell(mouseWorldPos);    // 현재 마우스 위치에 해당하는 타일맵의 셀 좌표를 나타낸다. 이 좌표를 기반으로 currentFurniture 오브젝트를 배치할 위치가 결정된다.
            Vector3 cellCenterWorld = floorTilemap.GetCellCenterWorld(cellPosition);    // 타일맵 셀의 중심을 월드 좌표로 변환한다. 셀의 좌표가 정수 좌표(cellPosition)로 나타나지만, 오브젝트는 셀의 중심에 위치해야 하므로, 이를 위해 GetCellCenterWorld를 사용하여 셀 중심의 월드 좌표를 얻는다.
            currentFurniture.transform.position = new Vector3(cellCenterWorld.x, cellCenterWorld.y, 0);    // currentFurniture의 위치를 셀 중심의 좌표로 설정한다. 오브젝트는 2D 게임에서 z좌표가 0이므로 x와 y 좌표만 셀 중심에 맞추어 배치된다.
            Collider2D collider = currentFurniture.GetComponent<Collider2D>();    // currentFurniture의 collider 속성을 가져온다. 가구를 배치하기 전에는 collider 값을 끄고 배치하고 난 후에 collider 값을 주기 위해서다.
            collider.enabled = false;    // 가구를 배치하기 전 마우스 포인터에 가구가 있을 때는 collider 값을 끈다. 이 때 collider 값이 켜져있으면 이미 설치되어 있는 가구랑 충돌이 일어난다.
            furniturePopupPanel.SetActive(false);
            placerNotification.SetActive(true);

            // 가구 배치 가능 여부 확인
            bool canPlace = CanPlaceFurniture(cellPosition);

            // 가구 색상 변경으로 배치 가능 여부 표시
            currentFurniture.GetComponent<SpriteRenderer>().color = canPlace ? Color.white : Color.red;

            if (Input.GetMouseButtonDown(0) && canPlace)    // 마우스 왼쪽 버튼 누르기 + calPlace가 true 일때만 로직 성립
            {
                PlaceFurniture(cellPosition);
                collider.enabled = true;    // 꺼져있던 collider 값 활성화
                furniturePopupPanel.SetActive(true);
                placerNotification.SetActive(false);
            }

            if (Input.GetMouseButton(1))    // 이 코드 없으면 실수로 가구 눌렀을 때 무조건 가구를 설치해야 한다. 가구 선택을 취소하기 위한 코드. 오른쪽 마우스 버튼을 눌러 취소한다.
            {
                Destroy(currentFurniture);
                placerNotification.SetActive(false);
            }
        }

        if (Input.GetKeyDown(KeyCode.Escape))    // esc를 누르면 팝업 창이 닫히게 하는 코드
        {
            furniturePopupPanel.SetActive(false);
            placerNotification.SetActive(false);
        }
    }


    bool CanPlaceFurniture(Vector3Int cellPosition)
    {
        if (currentFurnitureData == null) return false;    // currentFurnitureData 값이 아무것도 없다는 것은 가구의 셀 범위가 없다는 뜻이므로 설치 자체가 안된다. 각 가구 프리팹마다 FurnitureData 스크립트를 어태치하고 범위를 설정해줄 것

        // 가구의 크기
        int width = currentFurnitureData.size.x;
        int height = currentFurnitureData.size.y;

        // Vector3Int startPosition = cellPosition - new Vector3Int(width / 2, height / 2, 0);
        // Vector3Int endPosition = cellPosition + new Vector3Int(width / 2, height / 2, 0);

        for (int x = 0; x < currentFurnitureData.size.x; x++)
        {
            for (int y = 0; y < currentFurnitureData.size.y; y++)
            {
                Vector3Int checkPosition = cellPosition + new Vector3Int(x, y, 0);    // 마우스의 위치를 초기 값으로 잡고 오른쪽 위로 x축 y축을 증가시키면서 유효한 타일인지 검사
                if (furnitureTilemap.HasTile(checkPosition) || !floorTilemap.HasTile(checkPosition))    // checkPosition에 가구가 있거나 바닥이 없으면 false를 반환한다. 가구 위에 가구를 설치하거나 바닥이 없는 곳에 가구를 설치하면 안되니까!
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
                Vector3Int tilePosition = cellPosition + new Vector3Int(x , y, 0);    // currentFurnitureData.size의 저장된 값만큼 tilePosition의 크기 설정
                furnitureTilemap.SetTile(tilePosition, ScriptableObject.CreateInstance<Tile>());    // tilePosition의 크기만큼 furnitureTilemap을 생성한다. 그 위에 가구를 배치할 수 없다
            }
        }
        
        currentFurniture = null;    // 이거 없으면 가구 배치해도 마우스에서 가구가 사라지지 않음
        currentFurnitureData = null;
    }
}