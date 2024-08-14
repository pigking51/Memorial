package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    private long gameId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "like_id")
    private Like like;

    @Column(name="wall_object")
    private String wallObject;

    @Column(name="tile_object")
    private String tileObject;

    @Column(name="furniture_object")
    private String furnitureObject;

    // 게임정보를 받았을때 하나의 코드로 받는 것인지?
    // → 정보는 이름으로 받는다고 함

}
