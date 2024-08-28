using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeScene : MonoBehaviour
{
    public Button changeSceneButton;
    public GameObject loadingScene;
    public GameObject userName;
    // Start is called before the first frame update
    void Start()
    {
        loadingScene.SetActive(false);
    }

    void ChangeSceneAndLoadLoading()
    {
        loadingScene.SetActive(true);
        userName.SetActive(false);
        Invoke("CloseLoadingScene", 5f);
    }

    void CloseLoadingScene()
    {
        loadingScene.SetActive(false);
        userName.SetActive(true);
    }

    // Update is called once per frame
    void Update()
    {
        changeSceneButton.onClick.AddListener(ChangeSceneAndLoadLoading);
    }
}
