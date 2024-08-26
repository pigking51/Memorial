using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class NPCController : MonoBehaviour
{
    public Button NPCButton;
    public GameObject NPCPanel;
    // Start is called before the first frame update
    void Start()
    {
        NPCButton.onClick.AddListener(() => OpenPanel());
        NPCPanel.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Return))
        {
            NPCPanel.SetActive(false);
        }
    }

    void OpenPanel()
    {
        NPCPanel.SetActive(true);
    }
}
