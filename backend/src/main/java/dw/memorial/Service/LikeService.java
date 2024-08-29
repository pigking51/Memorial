package dw.memorial.Service;

import dw.memorial.Dto.LikeDto;
import dw.memorial.Model.*;
import dw.memorial.Repository.LikeRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class LikeService {

    @Autowired
    LikeRepository likeRepository;
    @Autowired
    UserRepository userRepository;


    public LikeDto saveAddLike(LikeDto likeDto){

        User user = userRepository.findById(likeDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Like like1= new Like();
        like1.setUser(user);
        like1.setLikedUser(likeDto.getLikedUser());
        Like savedLike = likeRepository.save(like1);
        return likeDto.toLikeDtoFromLike(savedLike);
    }
    public List<Like> getAllLikes(){
        return likeRepository.findAll();
    }
}
