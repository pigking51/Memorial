package dw.memorial.Repository;

import dw.memorial.Model.Game;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Object> {

    Optional<Game> findByUserUserId(String id);
}
