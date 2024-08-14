package dw.memorial.Controller;

import dw.memorial.Dto.LectureCounterDto;
import dw.memorial.Model.Subscribe;
import dw.memorial.Service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SubscribeController {
    @Autowired
    SubscribeService subscribeService;

    @PostMapping("/products/subscribe")
    public Subscribe saveSubscribe(@RequestBody Subscribe subscribe){
        return subscribeService.saveSubscribe(subscribe);
    }

    @PostMapping("/products/subscribeList")
    @PreAuthorize("hasAnyRole('ADMIN,USER')")
    public List<Subscribe> saveSubscribeList(@RequestBody List<Subscribe> subscribeList){
        return subscribeService.saveSubscribeList(subscribeList);
    }

    @GetMapping("/products/subscribe")
    @PreAuthorize("hasAnyRole('ADMIN,USER')")
    public List<Subscribe> getAllSubscribes(){
        return subscribeService.getAllSubscribes();
    }

//    @PreAuthorize("hasAnyRole('ADMIN,USER')")
    @GetMapping("/products/subscribe/{userName}")
    public ResponseEntity<List<Subscribe>> getSubscribeListByUserName(
            @PathVariable String userName){
    return new ResponseEntity<>(subscribeService.getSubscribeListByUser(userName),
            HttpStatus.OK);
    }

    @GetMapping("/products/subscribe/current")
    public List<Subscribe> getSubscribeListByCurrentUser(){
        return subscribeService.getSubscribeListByCurrentUser();
    }

    @GetMapping("/products/subscribe/top4")
    public ResponseEntity<List<LectureCounterDto>> getLectureTop4(){
        return new ResponseEntity<>(subscribeService.getLectureTop4(),
                HttpStatus.OK);
    }
}
