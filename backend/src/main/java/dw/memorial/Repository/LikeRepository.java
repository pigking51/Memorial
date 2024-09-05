package dw.memorial.Repository;

import dw.memorial.Model.Like;
import dw.memorial.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Object> {
    List<Like> findByUserUserId(String id);
}
