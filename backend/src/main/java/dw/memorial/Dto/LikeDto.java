package dw.memorial.Dto;

import dw.memorial.Model.Like;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LikeDto {

    private String userId;
    private String likedUser;
    public LikeDto toLikeDtoFromLike(Like like){
        LikeDto likeDto = new LikeDto();
        likeDto.setUserId(like.getUser().getUserId());
        likeDto.setLikedUser(like.getLikedUser());

        return likeDto;
    }
}
