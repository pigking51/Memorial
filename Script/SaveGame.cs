using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;
using TMPro;
using System;

public class SaveGame : MonoBehaviour
{
    [Serializable]
    public class JsonList
    {
        public string name;
        public string wall;
        public string floor;
        public string furniture;
    }

    [DllImport("__Internal")]
    public static extern void DelilveryJson(string json);

    public void OnClick()
    {
        JsonList jsonList = new JsonList(); // 데이터 Json으로 변환
        jsonList.name = "Player";
        jsonList.wall = CafeDecorator.saveWall;
        jsonList.floor = CafeDecorator.saveFloor;
        jsonList.furniture = FurniturePlacer.saveFurniture;
        string json = JsonUtility.ToJson(jsonList);
        DelilveryJson(json);
    }
}
