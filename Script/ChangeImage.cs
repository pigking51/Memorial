using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeImage : MonoBehaviour
{
    public Sprite NewImage;
    Image thisImage;

    // Start is called before the first frame update
    void Start()
    {
        thisImage = GetComponent<Image>();
    }

    // Update is called once per frame
    void Update()
    {
        if (LikeScore.likeScore >= 1)
        {
            thisImage.sprite = NewImage;
        }
    }
}
