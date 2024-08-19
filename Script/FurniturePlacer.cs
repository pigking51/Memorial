using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;

public class FurniturePlacer : MonoBehaviour
{
    public Button placeFurnitureButton;
    public GameObject furniturePopupPanel;
    public Button furniturePopupCloseButton;
    public Transform furnitureButtonContainer;
    public Button furnitureButtonPrefab;
    public List<GameObject> furniturePrefabs;

    private GameObject currentFurniture;

    // Start is called before the first frame update
    void Start()
    {
        placeFurnitureButton.onClick.AddListener(OpenFurniturePopup);
        furniturePopupCloseButton.onClick.AddListener(CloseFurniturePopup);
        furniturePopupPanel.SetActive(false);
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
        foreach (GameObject furniturePrefab in furniturePrefabs)
        {
            Button newButton = Instantiate(furnitureButtonPrefab, furnitureButtonContainer);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
