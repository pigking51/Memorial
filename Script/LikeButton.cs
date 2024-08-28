using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;
using TMPro;
using System;

public class LikeButton : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LikeScoreSave(int likeScore);
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
    }

    void UpdateScoreText()
    {
        if (scoreText != null)
        {
            scoreText.text = likeScore.ToString();  // 텍스트를 현재 점수로 업데이트
        }
    }
}
