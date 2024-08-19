package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "subscribe")
public class Subscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subscribe_id")
    private long subscribeId;

    @ManyToOne
    @JoinColumn(name = "lecture_id", nullable = false)
    private Lectures lecture;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "subscribe_time", nullable = false)
    private LocalDateTime subscribeTime;

    // 사이트에 있는 교육자료를 회원가입만하면 볼수있게? / 신청하기를 해야 볼수있게?
    // → 전자면 subscribe부분 삭제해도 문제없음/ 후자인 경우에는 금액을 지우고 활용하기
}