using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomMovement : MonoBehaviour
{
    public float moveSpeed = 0.5f;
    public float waitTime = 2.0f;
    private Vector3 moveDirection;
    private bool isMoving = false;
    private Rigidbody2D rb;
    private Animator animator;
    private SpriteRenderer spriteRenderer;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        if (rb == null)
        {
            rb = gameObject.AddComponent<Rigidbody2D>();
        }
        rb.gravityScale = 0;
        rb.freezeRotation = true;

        animator = GetComponent<Animator>();
        spriteRenderer = GetComponent<SpriteRenderer>();

        StartCoroutine(MovementRoutine());
    }

    private IEnumerator MovementRoutine()
    {
        while (true)
        {
            yield return new WaitForSeconds(waitTime);
            ChooseRandomDirection();
            isMoving = true;
            animator.SetBool("isWalking", true);
            float moveTime = Random.Range(3f, 7f);
            yield return new WaitForSeconds(moveTime);
            isMoving = false;
            animator.SetBool("isWalking", false);
            rb.velocity = Vector2.zero;
        }
    }

    private void ChooseRandomDirection()
    {
        moveDirection = new Vector3(
            Random.Range(-1f, 1f),
            Random.Range(-1f, 1f),
            0
        ).normalized;

        // 스프라이트 방향 설정
        if (moveDirection.x < 0)
        {
            spriteRenderer.flipX = true;
        }
        else if (moveDirection.x > 0)
        {
            spriteRenderer.flipX = false;
        }
    }

    private void FixedUpdate()
    {
        if (isMoving)
        {
            rb.velocity = moveDirection * moveSpeed;
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Wall"))
        {
            Vector2 normal = collision.contacts[0].normal;
            moveDirection = Vector2.Reflect(moveDirection, normal);

            moveDirection += new Vector3(
                Random.Range(-0.2f, 0.2f),
                Random.Range(-0.2f, 0.2f),
                0
            );
            moveDirection.Normalize();

            // 충돌 후 스프라이트 방향 재설정
            if (moveDirection.x < 0)
            {
                spriteRenderer.flipX = true;
            }
            else if (moveDirection.x > 0)
            {
                spriteRenderer.flipX = false;
            }

            transform.position += (Vector3)normal * 0.1f;
        }
    }
}