package dw.memorial.Dto;

import dw.memorial.Model.FranchiseInquery;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FranchiseInqueryDto {

    private String userId;

    private String uname;

    private String phoneNum;

    private String email;

    private String available;

    private String wish;

    private String address;

    private String etc;

    private String priAgree;

    private String marAgree;

    public FranchiseInqueryDto toFranchiseInqueryDtoFromFranchiseInqueryDto(FranchiseInquery franchiseInquery){
        FranchiseInqueryDto franchiseInqueryDto = new FranchiseInqueryDto();
        franchiseInqueryDto.setUserId(getUserId());
        franchiseInqueryDto.setUname(franchiseInquery.getUname());
        franchiseInqueryDto.setPhoneNum(franchiseInquery.getPhoneNum());
        franchiseInqueryDto.setEmail(franchiseInquery.getEmail());
        franchiseInqueryDto.setAvailable(franchiseInquery.getAvailable());
        franchiseInqueryDto.setWish(franchiseInquery.getWish());
        franchiseInqueryDto.setAddress(franchiseInquery.getAddress());
        franchiseInqueryDto.setEtc(franchiseInquery.getEtc());
        franchiseInqueryDto.setPriAgree(franchiseInquery.getPriAgree());
        franchiseInqueryDto.setMarAgree(franchiseInquery.getMarAgree());

        return franchiseInqueryDto;
    }
}
