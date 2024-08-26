using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

[CreateAssetMenu(fileName = "TileCollection", menuName = "ScriptableObjects/TileCollection", order = 1)]
public class TileCollection : ScriptableObject
{
    public List<TileBase> tiles = new List<TileBase>();
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
