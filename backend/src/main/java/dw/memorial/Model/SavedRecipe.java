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
@Table(name = "saved_recipe")
public class SavedRecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "save_recId")
    private long saveRecId;

    @ManyToOne
    @JoinColumn(name = "recipe_name")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "user_name")
    private User user;

    @Column(name = "from_user")
    private String fromUser;
}
