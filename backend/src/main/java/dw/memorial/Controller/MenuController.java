package dw.memorial.Controller;

import dw.memorial.Model.Menu;
import dw.memorial.Service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    MenuService menuService;

    @GetMapping("/getallmenu")
    public ResponseEntity<List<Menu>> getAllMenu(){
        return new ResponseEntity<>(menuService.getAllMenu(),
                HttpStatus.OK);
    }
}
