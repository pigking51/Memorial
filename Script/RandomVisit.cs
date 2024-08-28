using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using System;

public class RandomVisit : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void VisitRandom(string showRandom);

   public void OnClick() {
        VisitRandom("showRandom");
    }

}
