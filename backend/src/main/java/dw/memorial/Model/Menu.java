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
    
    @Column(name="menu_title")
    private String menuTitle; // 메뉴를 분류하기 위한것

    @Column(name="menu_name")
    private String menuName;

    @Column(name="img")
    private String img;

    @Column(name="menu_description")
    private String menuDescription;
    @Column(name="price")
    private long price;

    @Column(name="serving_size")
    private long servingSize;
    @Column(name="saturated_fat")
    private long saturatedFat;
    @Column(name="protein")
    private long protein;
    @Column(name="sodium")
    private long sodium;
    @Column(name="sugar")
    private long sugar;
    @Column(name="caffeine")
    private long caffeine;
    @Column(name="allergy")
    private String allergy;

}
