package dw.memorial.Repository;

import dw.memorial.Model.MyRecipe;
import dw.memorial.Model.Recipe;
import dw.memorial.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MyRecipeRepository extends JpaRepository<MyRecipe, Long> {

    List<MyRecipe> findByUserUserId(String id);
}
