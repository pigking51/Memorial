package dw.memorial.Repository;

import dw.memorial.Model.Furniture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FurnitureRepository extends JpaRepository<Furniture, Long> {

    Optional<Furniture> findByFurnitureObjectAndSiteXAndSiteY(String furnitureObject, int siteX, int siteY);
}
