package dw.memorial.Controller;

import dw.memorial.Dto.FurnitureDto;
import dw.memorial.Dto.GameDto;
import dw.memorial.Model.Furniture;
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
    @GetMapping("/showall")
    public ResponseEntity<List<Game>> getAllGameData(){
        return new ResponseEntity<>(gameService.getAllGameData(),
                HttpStatus.OK);
    }
    @GetMapping("/randomvisit/{id}")
    public ResponseEntity<Game> getRandomGameData(@PathVariable String id){
        return new ResponseEntity<>(gameService.getRandomGameData(id),
                HttpStatus.OK);
    }
    @GetMapping("/visit/{id}")
    public ResponseEntity<List<Game>> getSomeGameData(@PathVariable String id){
        return new ResponseEntity<>(gameService.getSomeGameData(id),
                HttpStatus.OK);
    }
    // 가구데이터 불러오기
    @GetMapping("/callfurniture/{id}")
    public ResponseEntity<List<Furniture>> callFurniture(@PathVariable String id){
        return new ResponseEntity<>(gameService.callFurniture(id),
                HttpStatus.OK);
    }

    // 가구데이터 삭제
    @DeleteMapping("/delfurniture/{id}")
    public ResponseEntity<Void> deleteFurniture(@PathVariable String id,
                                                @RequestBody FurnitureDto furnitureDto){
       gameService.deleteFurniture(id, furnitureDto);
       return ResponseEntity.ok().build();
    }
}
