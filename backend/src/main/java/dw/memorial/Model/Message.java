package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "message")
public class Message {
    @Id
    @Column(name = "message_num")
    private int messageNum;
    @Column(name = "send_user")
    private String sendUser;
    @Column(name = "message_text")
    private String messageText;
    @Column(name = "target_user")
    private String targetUser;
    @Enumerated(EnumType.STRING)
    @Column(name = "check")
    private CheckEnum check;
    public enum CheckEnum{
        NEW,
        CHECKED;
    }
}
