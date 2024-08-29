package dw.memorial.Service;

import dw.memorial.Dto.FurnitureDto;
import dw.memorial.Model.Furniture;
import dw.memorial.Model.User;
import dw.memorial.Repository.FurnitureRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class FurnitureService {

    @Autowired
    FurnitureRepository furnitureRepository;
    @Autowired
    UserRepository userRepository;
    public List<FurnitureDto> saveFurnitures(List<FurnitureDto> furnitureList){

        return furnitureList.stream()
                .map((furniture) -> {
                    User user = userRepository.findById(furniture.getUserId())
                            .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

                    Furniture furniture1 = new Furniture();
                    furniture1.setUser(user);
                    furniture1.setFurnitureObject(furniture.getFurnitureObject());
                    furniture1.setSiteX(furniture.getSiteX());
                    furniture1.setSiteY(furniture.getSiteY());

                    Furniture savedFurniture = furnitureRepository.save(furniture1);
                    return furniture.toGameDtoFromGame(savedFurniture);
                }).collect(Collectors.toList());
    }

}
