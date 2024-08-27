using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeScene : MonoBehaviour
{
    public Button changeSceneButton;
    public GameObject loadingScene;

    // Start is called before the first frame update
    void Start()
    {
        loadingScene.SetActive(false);
    }

    void ChangeSceneAndLoadLoading()
    {
        loadingScene.SetActive(true);
        Invoke("CloseLoadingScene", 5f);
    }

    void CloseLoadingScene()
    {
        loadingScene.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        changeSceneButton.onClick.AddListener(ChangeSceneAndLoadLoading);
    }
}
