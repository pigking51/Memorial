package dw.memorial.Controller;

import dw.memorial.Dto.FurnitureDto;
import dw.memorial.Model.Furniture;
import dw.memorial.Service.FurnitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/furniture")
public class FurnitureController {

    @Autowired
    FurnitureService furnitureService;

    @PostMapping("/save")
    public ResponseEntity<List<FurnitureDto>> saveFurnitures(@RequestBody List<FurnitureDto> furnitureList){
        return new ResponseEntity<>(furnitureService.saveFurnitures(furnitureList),
                HttpStatus.OK);
    }
}
