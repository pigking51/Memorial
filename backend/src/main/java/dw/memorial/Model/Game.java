package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Furniture> furniture = new ArrayList<>();

    public void addFurniture(Furniture f){
        furniture.add(f);
        f.setGame(this);
    }
    public void removeFurniture(Furniture f){
        furniture.remove(f);
        f.setGame(this);
    }

}
