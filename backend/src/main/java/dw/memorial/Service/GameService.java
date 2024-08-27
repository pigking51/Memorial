package dw.memorial.Service;

import dw.memorial.Dto.GameDto;
import dw.memorial.Model.Game;
import dw.memorial.Model.User;
import dw.memorial.Repository.GameRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Transactional
@Service
public class GameService {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    UserRepository userRepository;

    public GameDto updateGameData(String id, GameDto gameDto){
        List<Game> gameOptional = gameRepository.findAll();
        List<Game> thisGameOptional = new ArrayList<>();
        for(int i = 0; i < gameOptional.size(); i++){
            if(Objects.equals(gameOptional.get(i).getUser().getUsername(), id)){
                thisGameOptional.add(gameOptional.get(i));
            }
        }
        User user = userRepository.findById(gameDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        if(!thisGameOptional.isEmpty()){
            Game game = thisGameOptional.getFirst();
            game.setUser(user);
            game.setTileObject(gameDto.getTileObject());
            game.setWallObject(gameDto.getWallObject());
            game.setFurnitureObject(gameDto.getFurnitureObject());

            Game savedGame = gameRepository.save(game);
            return gameDto.toGameDtoFromGame(savedGame);
        }else{
            Game game2 = new Game();
            game2.setUser(user);
            game2.setTileObject(gameDto.getTileObject());
            game2.setWallObject(gameDto.getWallObject());
            game2.setFurnitureObject(gameDto.getFurnitureObject());

            Game savedGame2 = gameRepository.save(game2);
            return gameDto.toGameDtoFromGame(savedGame2);
        }

    }

    public List<Game> getMyData(String id){
        List<Game> gameOptional = gameRepository.findAll();
        List<Game> myGameData = new ArrayList<>();
        for(int i = 0; i < gameOptional.size(); i++){
            if(gameOptional.get(i).getUser().getUserId().equals(id)){
                myGameData.add(gameOptional.get(i));
                break;
            }else if(!(gameOptional.get(gameOptional.size() -1).getUser().getUserId().equals(id))){
                return null;
            }
        }
        return myGameData;
    }

}
