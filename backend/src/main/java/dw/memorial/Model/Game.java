package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


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

    @Column(name="wall_object")
    private String wallObject;

    @Column(name="tile_object")
    private String tileObject;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="furniture")
    private List<Furniture> furniture;

}
