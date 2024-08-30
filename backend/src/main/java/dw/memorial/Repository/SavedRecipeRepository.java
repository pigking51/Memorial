package dw.memorial.Repository;

import dw.memorial.Model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedRecipeRepository extends JpaRepository<Recipe, Long> {
}
