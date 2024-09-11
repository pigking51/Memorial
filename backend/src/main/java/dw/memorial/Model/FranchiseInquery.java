package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="franchise_inquery")
public class FranchiseInquery {
    @Id
    @Column(name = "fi_num")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long FINum;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(name = "u_name")
    private String uname;
    @Column(name = "phone_num")
    private String phoneNum;
    @Column(name = "email")
    private String email;
    // 옵션이 정해져있으므로 emum으로 사용하는것도 나쁘지 않을듯
    @Column(name = "available")
    private String available;
    @Column(name = "wish")
    private String wish;
    @Column(name = "address")
    private String address;
    @Column(name = "etc")
    private String etc;
    @Column(name = "pri_agree")
    private String priAgree;
    @Column(name = "mar_agree")
    private String marAgree;
    @Column(name = "createdAt")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {this.createdAt = LocalDateTime.now();}
}
