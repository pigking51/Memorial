package dw.memorial.Service;

import dw.memorial.Dto.LikeDto;
import dw.memorial.Model.*;
import dw.memorial.Repository.LikeRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class LikeService {

    @Autowired
    LikeRepository likeRepository;
    @Autowired
    UserRepository userRepository;


    public LikeDto saveAddLike(LikeDto likeDto){

        User user = userRepository.findById(likeDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID oTo"));
        Like like1= new Like();
        like1.setUser(user);
        like1.setLikedUser(likeDto.getLikedUser());
        Like savedLike = likeRepository.save(like1);
        return likeDto.toLikeDtoFromLike(savedLike);
    }
    public List<Like> getAllLikes(){
        return likeRepository.findAll();
    }

    public List<Like> getSomeoneLike(String id){

        return likeRepository.findAll()
                .stream().filter(like -> like.getUser().getUserId().equals(id))
                .collect(Collectors.toList());
    }

    public List<Like> getSearchLike(String id)
    {
        return likeRepository.findAll()
                .stream().filter(like -> like.getUser().getUserId().contains(id))
                .collect(Collectors.toList());
    }

}
