package dw.memorial.Controller;

import dw.memorial.Model.MyRecipe;
import dw.memorial.Service.MyRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipe")
public class MyRecipeController {

    @Autowired
    MyRecipeService myRecipeService;

    @GetMapping("/initial/{id}")
    public ResponseEntity<MyRecipe> initialRecipe(@PathVariable String id){
        return new ResponseEntity<>(myRecipeService.initialRecipe(id),
                HttpStatus.OK);
    }

    @GetMapping("addrandomrecipe/{id}")
    public ResponseEntity<MyRecipe> addRandomRecipe(@PathVariable String id,
                                                    @RequestBody MyRecipe myRecipe){
        return new ResponseEntity<>(myRecipeService.addRandomRecipe(id, myRecipe),
                HttpStatus.OK);
    }
}
