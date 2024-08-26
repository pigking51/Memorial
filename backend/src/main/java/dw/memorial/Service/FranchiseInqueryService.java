package dw.memorial.Service;

import dw.memorial.Dto.FranchiseInqueryDto;
import dw.memorial.Model.FranchiseInquery;
import dw.memorial.Model.User;
import dw.memorial.Repository.FranchiseInqueryRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class FranchiseInqueryService {

    @Autowired
    FranchiseInqueryRepository franchiseInqueryRepository;

    @Autowired
    UserRepository userRepository;

    public FranchiseInqueryDto saveInquery(FranchiseInqueryDto franchiseInqueryDto){
        User user = userRepository.findById(franchiseInqueryDto.getUserId())
                .orElseThrow(() -> new IllegalStateException("Invalid user ID"));

        FranchiseInquery franchiseInquery = new FranchiseInquery();
        franchiseInquery.setUser(user);
        franchiseInquery.setUname(franchiseInqueryDto.getUname());
        if(franchiseInquery.getUname() == null){
            throw new IllegalStateException("Invalid Uname!!");
        }
        franchiseInquery.setPhoneNum(franchiseInqueryDto.getPhoneNum());
        franchiseInquery.setEmail(franchiseInqueryDto.getEmail());
        franchiseInquery.setAvailable(franchiseInqueryDto.getAvailable());
        franchiseInquery.setWish(franchiseInqueryDto.getWish());
        franchiseInquery.setAddress(franchiseInqueryDto.getAddress());
        franchiseInquery.setEtc(franchiseInqueryDto.getEtc());
        franchiseInquery.setPriAgree(franchiseInqueryDto.getPriAgree());
        franchiseInquery.setMarAgree(franchiseInqueryDto.getMarAgree());

        FranchiseInquery savedFranchiseInquery = franchiseInqueryRepository.save(franchiseInquery);

        return franchiseInqueryDto.toFranchiseInqueryDtoFromFranchiseInqueryDto(savedFranchiseInquery);
    }

}
