package dw.memorial.Controller;

import dw.memorial.Dto.FranchiseInqueryDto;
import dw.memorial.Model.FranchiseInquery;
import dw.memorial.Service.FranchiseInqueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inquery")
public class FranchiseInqueryController {

    @Autowired
    FranchiseInqueryService franchiseInqueryService;

    @PostMapping("/save")
    public ResponseEntity<FranchiseInqueryDto> saveInquery(@RequestBody FranchiseInqueryDto franchiseInqueryDto){
        return new ResponseEntity<>(franchiseInqueryService.saveInquery(franchiseInqueryDto),
                HttpStatus.OK);
    }

}
