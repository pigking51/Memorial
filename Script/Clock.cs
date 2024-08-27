using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
using UnityEngine.UI;

public class Clock : MonoBehaviour
{
    // public Text text_date;
    public Text text_time;

    // Start is called before the first frame update
    void Start()
    {
        initTime();
    }

    private void initTime()
    {
        if (IsInvoking("updateTime"))
            CancelInvoke("updateTime");
        InvokeRepeating("updateTime", 0, 0.2f);
    }

    private void updateTime()
    {
        string time = DateTime.Now.ToString("HH:mm");
        text_time.text = time;
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
