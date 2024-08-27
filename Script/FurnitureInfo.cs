using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class FurnitureInfo
{
    public string furnitureName;
    public Vector2 position;

    public FurnitureInfo(string name, Vector2 pos)
    {
        furnitureName = name;
        position = pos;
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
