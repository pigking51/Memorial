package dw.memorial.Dto;

import dw.memorial.Model.Furniture;
import dw.memorial.Model.Game;
import dw.memorial.Model.Like;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GameDto {

    private String userId;
    private String tileObject;
    private String wallObject;
    private List<Furniture> furniture;


    public GameDto toGameDtoFromGame(Game game){
        GameDto gameDto = new GameDto();
        gameDto.setUserId(game.getUser().getUserId());
        gameDto.setTileObject(getTileObject());
        gameDto.setWallObject(getWallObject());
        gameDto.setFurniture(getFurniture());

        return gameDto;
    }
}

