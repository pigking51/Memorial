package dw.memorial.Service;

import dw.memorial.Dto.GameDto;
import dw.memorial.Model.Game;
import dw.memorial.Model.User;
import dw.memorial.Repository.GameRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;


@Transactional
@Service
public class GameService {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    UserRepository userRepository;

    public GameDto updateGameData(String id, GameDto gameDto){

        Optional<Game> thisGame = gameRepository.findByUserUserId(id);

        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        Game game1;

        if(thisGame.isPresent()) {
           game1 = thisGame.get();
        }else{
            game1 = new Game();
            game1.setUser(user);
        }

        if(!Objects.equals(gameDto.getTileObject(), "")){
           game1.setTileObject(gameDto.getTileObject());
        }
        if(!Objects.equals(gameDto.getWallObject(), "")){
           game1.setWallObject(gameDto.getWallObject());
        }

        Game savedGame = gameRepository.save(game1);

        return gameDto.toGameDtoFromGame(savedGame);
    }

        //        List<Game> gameOptional = gameRepository.findAll();
//        List<Game> thisGameOptional = new ArrayList<>();
//        for(int i = 0; i < gameOptional.size(); i++){
//            if(Objects.equals(gameOptional.get(i).getUser().getUsername(), id)){
//                thisGameOptional.add(gameOptional.get(i));
//                break;
//            }
//        }
        // → 비효율적인 코드

//        else{
//            Game game2 = new Game();
//            game2.setUser(user);
//            game2.setTileObject(gameDto.getTileObject());
//            game2.setWallObject(gameDto.getWallObject());
//            game2.setFurnitureObject(gameDto.getFurnitureObject());
//
//            Game savedGame2 = gameRepository.save(game2);
//
//            return gameDto.toGameDtoFromGame(savedGame2);
//        }

//    }
    public List<Game> getMyData(String id){
        List<Game> gameOptional = gameRepository.findAll();
        List<Game> myGameData = new ArrayList<>();
        for(int i = 0; i < gameOptional.size(); i++){
            if(gameOptional.get(i).getUser().getUserId().equals(id)){
                myGameData.add(gameOptional.get(i));
                break;
            }
        }
        return myGameData;
    }

    public List<Game> getAllGameData(){
        return gameRepository.findAll();
    }

    public Game getRandomGameData(String id){
        List<Game> allGame = gameRepository.findAll();
        List<Game> randomRange =
                allGame.stream().filter((game -> !(game.getUser().getUserId().equals(id)))).collect(Collectors.toList());

        return randomRange.get((int)(Math.random()*randomRange.size()));
    }

    public List<Game> getSomeGameData(String id){
        List<Game> allGame = gameRepository.findAll();
        List<Game> thatGame = new ArrayList<>();
        for(int i = 0; i < allGame.size(); i++){
            if(allGame.get(i).getUser().getUserId().equals(id)){
                thatGame.add(allGame.get(i));
                break;
            } else if (!(allGame.get(allGame.size()-1).getUser().getUserId().equals(id))) {
                return null;
            }
        }
        return thatGame;
    }

}
