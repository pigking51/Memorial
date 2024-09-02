package dw.memorial.Dto;


import dw.memorial.Model.Furniture;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FurnitureDto {

    private String userId;
    private String furnitureObject;
    private double siteX;
    private double siteY;


    public FurnitureDto toGameDtoFromGame(Furniture furniture){
        FurnitureDto furnitureDto = new FurnitureDto();
        furnitureDto.setFurnitureObject(furniture.getFurnitureObject());
        furnitureDto.setSiteX(furnitureDto.getSiteX());
        furnitureDto.setSiteY(furnitureDto.getSiteY());

        return furnitureDto;
    }

}
