package dw.memorial.Dto;

import dw.memorial.Model.Lectures;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LectureCounterDto {
    private Lectures lecture;
    private long count;
}
