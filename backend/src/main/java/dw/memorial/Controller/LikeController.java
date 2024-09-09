package dw.memorial.Controller;

import dw.memorial.Dto.LikeDto;
import dw.memorial.Model.Like;
import dw.memorial.Service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("like")
public class LikeController {

    @Autowired
    LikeService likeService;

    // 좋아요 저장
    @PostMapping("/save")
    public ResponseEntity<LikeDto> saveAddLike(@RequestBody LikeDto likeDto){
        return new ResponseEntity<>(likeService.saveAddLike(likeDto),
                HttpStatus.OK);
    }
    // 모든 좋아요 불러오기
    @GetMapping("/all")
    public ResponseEntity<List<Like>> getAllLikes(){
        return new ResponseEntity<>(likeService.getAllLikes(),
                HttpStatus.OK);
    }
    // 특정인의 좋아요 불러오기
    @GetMapping("/getsomeonelike/{id}")
    public ResponseEntity<List<Like>> getSomeoneLike(@PathVariable String id){
        return new ResponseEntity<>(likeService.getSomeoneLike(id),
                HttpStatus.OK);
    }
    // 검색대상의 좋아요 불러오기
    @GetMapping("/getsearchlike/{id}")
    public ResponseEntity<List<Like>> getSearchLike(@PathVariable String id){
        return new ResponseEntity<>(likeService.getSearchLike(id),
                HttpStatus.OK);
    }
}
