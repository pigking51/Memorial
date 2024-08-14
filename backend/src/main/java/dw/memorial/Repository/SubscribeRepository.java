package dw.memorial.Repository;

import dw.memorial.Dto.LectureCounterDto;
import dw.memorial.Model.Subscribe;
import dw.memorial.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {
    List<Subscribe> findByUser(User user);

    //    @Query("select g1 from Lectures g1 order by g1.price desc")
    @Query("SELECT new dw.memorial.Dto.LectureCounterDto(p.lecture, COUNT(p.lecture.id)) " +
            "FROM Subscribe p GROUP BY p.lecture ORDER BY COUNT(p.lecture.id) DESC limit 4")
    List<LectureCounterDto> getLectureTop4();
}
