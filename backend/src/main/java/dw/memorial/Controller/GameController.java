package dw.memorial.Controller;

import dw.memorial.Dto.GameDto;
import dw.memorial.Model.Game;
import dw.memorial.Service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {

    @Autowired
    GameService gameService;

    @PatchMapping("/update/{id}")
    public ResponseEntity<GameDto> updateGameData(@PathVariable String id,
                                                  @RequestBody GameDto gameDto){
        return new ResponseEntity<>(gameService.updateGameData(id, gameDto),
                HttpStatus.OK);
    }

    @GetMapping("/getmydata/{id}")
    public ResponseEntity<List<Game>> getMyData(@PathVariable String id){
        return new ResponseEntity<>(gameService.getMyData(id),
                HttpStatus.OK);
    }


}
