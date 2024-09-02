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
@Table(name = "furniture")
public class Furniture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "furniture_id")
    private long fId;

    @Column(name = "furniture_object")
    private String furnitureObject;

    @Column(name = "site_x")
    private double siteX;

    @Column(name = "site_y")
    private double siteY;


}
