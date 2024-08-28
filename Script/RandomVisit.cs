using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using System;

public class RandomVisit : MonoBehaviour
{
    public GameObject loadingScene;
    public GameObject userName;
    public GameObject changeWall;
    public GameObject changeFloor;
    public GameObject placeFurniture;
    public GameObject saveButton;

    [DllImport("__Internal")]
    private static extern void VisitRandom(string showRandom);

    void Start()
    {
        loadingScene.SetActive(false);
    }

    void ChangeSceneAndLoadLoading()
    {
        loadingScene.SetActive(true);
        userName.SetActive(false);
        changeWall.SetActive(false);
        changeFloor.SetActive(false);
        placeFurniture.SetActive(false);
        saveButton.SetActive(false);
        Invoke("CloseLoadingScene", 5f);
    }

    void CloseLoadingScene()
    {
        loadingScene.SetActive(false);
        userName.SetActive(true);
    }

    public void OnClick() {
        ChangeSceneAndLoadLoading();
        VisitRandom("showRandom");
    }

}
