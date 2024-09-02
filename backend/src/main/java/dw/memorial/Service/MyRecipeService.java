package dw.memorial.Service;

import dw.memorial.Model.Recipe;
import dw.memorial.Model.MyRecipe;
import dw.memorial.Model.User;
import dw.memorial.Repository.MyRecipeRepository;
import dw.memorial.Repository.RecipeRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class MyRecipeService {

    @Autowired
    MyRecipeRepository myRecipeRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;

    // 최초 접속 시
    public MyRecipe initialRecipe(String id){
        List<MyRecipe> MyRecipe = myRecipeRepository.findAll();
        if(MyRecipe.isEmpty()){
            MyRecipe myRecipe1 = new MyRecipe();
            List<Recipe> allRecipe = recipeRepository.findAll();
            User user = userRepository.findByUserId(id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid user Id"));

            myRecipe1.setRecipe(allRecipe.get((int)(Math.random()*allRecipe.size())));
            myRecipe1.setUser(user);
            myRecipe1.setFromUser(id);

            return myRecipeRepository.save(myRecipe1);
        }else{
            return null;
        }
    }

    public MyRecipe addRandomRecipe(String id, MyRecipe myRecipe){
        MyRecipe myRecipe1 = new MyRecipe();
        List<Recipe> allRecipe = recipeRepository.findAll();
        List<MyRecipe> allMyRecipe = myRecipeRepository.findAll();
        User user = userRepository.findByUserId(id)
                .orElseThrow(() -> new IllegalArgumentException("invalid user Id"));

        myRecipe1.setRecipe(allRecipe.get((int)(Math.random()*allRecipe.size())));
        myRecipe1.setUser(user);
        myRecipe1.setFromUser(myRecipe.getFromUser());

        return myRecipeRepository.save(myRecipe1);
    }
}
