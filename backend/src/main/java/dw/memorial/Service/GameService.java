package dw.memorial.Service;

import dw.memorial.Dto.FurnitureDto;
import dw.memorial.Dto.GameDto;
import dw.memorial.Model.Furniture;
import dw.memorial.Model.Game;
import dw.memorial.Model.User;
import dw.memorial.Repository.FurnitureRepository;
import dw.memorial.Repository.GameRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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

    @Autowired
    FurnitureRepository furnitureRepository;

//    public GameDto updateGameData(String id, GameDto gameDto){
//
//        Optional<Game> thisGame = gameRepository.findByUserUserId(id);
//
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
//
//        Game game1;
//
//        if(thisGame.isPresent()) {
//           game1 = thisGame.get();
//        }else{
//            game1 = new Game();
//            game1.setUser(user);
//        }
//
//        if(!Objects.equals(gameDto.getTileObject(), "")){
//           game1.setTileObject(gameDto.getTileObject());
//        }
//        if(!Objects.equals(gameDto.getWallObject(), "")){
//           game1.setWallObject(gameDto.getWallObject());
//        }
////        if(!Objects.equals(gameDto.getFurniture(), "")){
////            if(!gameDto.getFurniture().isEmpty()){
////                if(!gameRepository.findByUserUserId(id).isEmpty()) {
////                    List<Furniture> Furnitures = gameRepository.findByUserUserId(id).get().getFurniture();
////                    List<Furniture> addFurniture = gameDto.getFurniture();
////                    Furnitures.addAll(addFurniture);
////                    game1.setFurniture(Furnitures);
////                }else{
////                    List<Furniture> addFurniture = gameDto.getFurniture();
////                    game1.setFurniture(addFurniture);
////                }
////            }else{
////                return null;
////            }
////        }
//        if (gameDto.getFurniture() != null && !gameDto.getFurniture().isEmpty()) {
//            List<Furniture> furnitureList = gameDto.getFurniture();
//            for (Furniture furniture : furnitureList) {
//                furniture.setGame(game1);  // Furniture의 game 필드를 설정
//            }
//            game1.setFurniture(furnitureList);
//        } else {
//            game1.setFurniture(new ArrayList<>());  // 비어있는 리스트로 설정
//        }
//
//
//        Game savedGame = gameRepository.save(game1);
//
//        return gameDto.toGameDtoFromGame(savedGame);
//    }

    public GameDto updateGameData(String id, GameDto gameDto){

        Optional<Game> optionalGame = gameRepository.findByUserUserId(id);

        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        Game game1;
        if (optionalGame.isPresent()) {
            game1 = optionalGame.get();
        } else {
            game1 = new Game();
            game1.setUser(user);
        }
        if (!Objects.equals(gameDto.getTileObject(), "")) {
            game1.setTileObject(gameDto.getTileObject());
        }
        if (!Objects.equals(gameDto.getWallObject(), "")) {
            game1.setWallObject(gameDto.getWallObject());
        }
        List<Furniture> newFurnitureList = gameDto.getFurniture();
        if (!newFurnitureList.isEmpty()) {
            // 기존의 Furniture 목록을 가져온다
            List<Furniture> existingFurnitureList = game1.getFurniture();

            // 새로운 Furniture를 추가하고
            for (Furniture furniture : newFurnitureList) {
                furniture.setGame(game1);  // Furniture의 game 필드를 설정
                if (!existingFurnitureList.contains(furniture)) {
                    existingFurnitureList.add(furniture);
                }
            }
            // 기존 Furniture 중에서 새로운 목록에 없는 Furniture를 제거한다
            existingFurnitureList.removeIf(furniture -> !newFurnitureList.contains(furniture));

            game1.setFurniture(existingFurnitureList);
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
        Optional<Game> gameOptional = gameRepository.findByUserUserId(id);
        List<Game> gameFromId = new ArrayList<>();
        if(gameOptional.isPresent())
        {
          gameFromId.add(gameOptional.get());
        }
        return gameFromId;
    }

    public List<Game> getAllGameData(){
        return gameRepository.findAll();
    }

    public Game getRandomGameData(String id){
        List<Game> allGame = gameRepository.findAll();
        if (allGame.isEmpty()){
            return null;
        }
        else{
            List<Game> randomRange =
                    allGame.stream().filter((game -> !(game.getUser().getUserId().equals(id)))).collect(Collectors.toList());

            return randomRange.get((int)(Math.random()*randomRange.size()));
        }
    }

    public List<Game> getSomeGameData(String id){
        return gameRepository.findAll()
                .stream().filter(game -> game.getUser().getUserId().equals(id))
                .toList();
    }
    public List<Furniture> callFurniture(String id){
        return furnitureRepository.findAll()
                .stream().filter(furniture ->
                        furniture.getGame().getUser().getUserId().equals(id))
                .collect(Collectors.toList());
    }

    public void deleteFurniture(String id, FurnitureDto furnitureDto){

        Optional<Game> game = gameRepository.findByUserUserId(id);

        if(game.isPresent()) {
//            Optional<Furniture> optionalFurniture = furnitureRepository.findByFurnitureObjectAndSiteXAndSiteY(
//                    furnitureDto.getFurnitureObject(),
//                    furnitureDto.getSiteX(),
//                    furnitureDto.getSiteY()
//            );
//            if (optionalFurniture.isPresent()) {
//                furnitureRepository.delete(optionalFurniture.get());
//
//            } else {
//                throw new IllegalArgumentException("Furniture not found");
//            }
            List<Furniture> furnitureList = game.get().getFurniture();
            furnitureList.removeIf(furniture ->
                    furniture.getFurnitureObject().equals(furnitureDto.getFurnitureObject()) &&
                            furniture.getSiteX() == furnitureDto.getSiteX() &&
                            furniture.getSiteY() == furnitureDto.getSiteY());

            game.get().setFurniture(furnitureList);

            gameRepository.save(game.get());
        }
    }
}
