package dw.memorial.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_id")
    private long menuId;

    @Column(name="menu_name")
    private String menuName;

    @Column(name="img")
    private String img;

    @Column(name="menu_description")
    private String menuDescription;
    @Column(name="price")
    private long price;

}
