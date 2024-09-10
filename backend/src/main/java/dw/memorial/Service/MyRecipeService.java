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
import java.util.stream.Collectors;

@Transactional
@Service
public class MyRecipeService {

    @Autowired
    MyRecipeRepository myRecipeRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;

    // 최초 접속 시 임의의 레시피 부여
    public MyRecipe initialRecipe(String id){
//        List<MyRecipe> MyRecipe = myRecipeRepository.findAll();
        List<MyRecipe> MyRecipe = myRecipeRepository.findByUserUserId(id);
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

    // 타인카페 방문시 좋아요 눌렀을때 받는 레시피(중복포함)
    public MyRecipe addRandomRecipe(String id, String target){
        MyRecipe myRecipe1 = new MyRecipe();
        List<Recipe> allRecipe = recipeRepository.findAll();
        List<MyRecipe> targetAllRecipe = myRecipeRepository.findAll()
                .stream().filter(myRecipe -> myRecipe.getUser().getUserId().equals(target))
                .collect(Collectors.toList());
        List<MyRecipe> allMyRecipe = myRecipeRepository.findAll()
                .stream().filter(myRecipe -> myRecipe.getUser().getUserId().equals(id))
                .collect(Collectors.toList());
        // 이미 받았는지 확인
        List<MyRecipe> MyRecipeFromTarget = allMyRecipe
                .stream().filter(myRecipe -> myRecipe.getFromUser().equals(target))
                .collect(Collectors.toList());

        User user = userRepository.findByUserId(id)
                .orElseThrow(() -> new IllegalArgumentException("invalid user Id"));
        if(MyRecipeFromTarget.isEmpty())
        {
            myRecipe1.setRecipe(targetAllRecipe.get((int)(Math.random()*targetAllRecipe.size())).getRecipe());
            myRecipe1.setUser(user);
            myRecipe1.setFromUser(target);

            return myRecipeRepository.save(myRecipe1);
        }else{
            throw new IllegalArgumentException("you already receive recipe!!");
        }

    }

    // 내가가진 레시피
    public List<MyRecipe> myRecipe(String id){
        return myRecipeRepository.findAll()
                .stream().filter(recipe -> recipe.getUser().getUserId().equals(id))
                .collect(Collectors.toList());
    }
}
