package dw.memorial.Repository;

import dw.memorial.Model.MyRecipe;
import dw.memorial.Model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyRecipeRepository extends JpaRepository<MyRecipe, Long> {
}
