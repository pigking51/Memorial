using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour        // 자식 클래스 : 부모 클래스
{
    Rigidbody2D playerRigidbody;
    float axisH = 0.0f;
    float axisV = 0.0f;
    float speed = 3.0f;

    // 애니메이션 처리
    Animator animator;
    public string stopAnime = "PlayerStop";
    public string moveAnime = "PlayerMove";
    string nowAnime = "";
    string oldAnime = "";

    // Start is called before the first frame update
    void Start()
    {
         playerRigidbody = this.GetComponent<Rigidbody2D>();

        // Animator 가져오기
        animator = GetComponent<Animator>();
        nowAnime = stopAnime;
        oldAnime = stopAnime;
    }

    // Update is called once per frame
    void Update()
    {
        axisH = Input.GetAxisRaw("Horizontal");        // 좌·우 입력
        axisV = Input.GetAxisRaw("Vertical");          // 상·하 입력

        if (axisH > 0.0f)
        {
            transform.localScale = new Vector2(1, 1);
        }
        else if (axisH < 0.0f)
        {
            transform.localScale = new Vector2(-1, 1);
        }
    }

    void FixedUpdate()
    {
        playerRigidbody.velocity = new Vector2(axisH * speed, axisV * speed);        // 플레이어의 속도 조절

        if (axisH != 0 || axisV != 0)
        {
            nowAnime = moveAnime;
        }
        else if (axisH == 0 || axisV == 0)
        {
            nowAnime = stopAnime;
        }

        if (nowAnime != oldAnime)
        {
            oldAnime = nowAnime;
            animator.Play(nowAnime);
        }
    }
}
