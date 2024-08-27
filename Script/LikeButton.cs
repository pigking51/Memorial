using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;
using TMPro;
using System;

public class LikeButton : MonoBehaviour
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
    private static extern void LikeScoreSave(int likeScore);
    [DllImport("__Internal")]
    public static extern void DelilveryJson(string json);
    private int likeScore = 0;  // 점수 변수
    public TextMeshProUGUI scoreText;  // UI 텍스트 컴포넌트
    
    
    void Start()
    {
        scoreText.text = "추천수: " + 0;
        if (scoreText != null)
        {
            UpdateScoreText();  // 초기 점수 갱신
        }
        else
        {
            Debug.LogError("scoreText has not been assigned in the Inspector.");
        }
    }

    public void OnClick()
    {
        likeScore++;  // 점수를 1 증가
        LikeScoreSave(likeScore);
        UpdateScoreText();  // 텍스트를 업데이트
        JsonList jsonList = new JsonList(); // 데이터 Json으로 변환
        jsonList.name = "Player";
        jsonList.wall = CafeDecorator.saveWall;
        jsonList.floor = CafeDecorator.saveFloor;
        jsonList.furniture = FurniturePlacer.saveFurniture;
        string json = JsonUtility.ToJson(jsonList);
        DelilveryJson(json);
    }

    void UpdateScoreText()
    {
        if (scoreText != null)
        {
            scoreText.text = likeScore.ToString();  // 텍스트를 현재 점수로 업데이트
        }
    }
}
