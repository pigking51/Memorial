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
@Table(name = "recipe")
public class Recipe {
    @Id
    @Column(name = "recipe_name")
    private String recipeName;

    @Column(name = "recipe_text")
    private String recipeText;
}
