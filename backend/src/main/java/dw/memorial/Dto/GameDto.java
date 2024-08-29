package dw.memorial.Dto;

import dw.memorial.Model.Game;
import dw.memorial.Model.Like;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GameDto {

    private String userId;
    private String tileObject;
    private String wallObject;
    private String furnitureObject;


    public GameDto toGameDtoFromGame(Game game){
        GameDto gameDto = new GameDto();
        gameDto.setUserId(game.getUser().getUserId());
        gameDto.setTileObject(getTileObject());
        gameDto.setWallObject(getWallObject());
        gameDto.setFurnitureObject(getFurnitureObject());

        return gameDto;
    }
}

