package dw.memorial.Repository;

import dw.memorial.Model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, String> {
}
