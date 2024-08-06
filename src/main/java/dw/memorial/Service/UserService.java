package dw.memorial.Service;

import dw.memorial.Dto.UserDto;
import dw.memorial.Exception.ResourceNotFoundException;
import dw.memorial.Model.Authority;
import dw.memorial.Model.User;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public List<User> getAllUsers(){return userRepository.findAll();}

    public String saveUser(UserDto userDto){
        Optional<User> userOptional = userRepository.findByUserId(userDto.getUserId());
        if(userOptional.isPresent()){
            return "이미 등록된 아이디입니다.";
        }
        Authority authority = new Authority();
        authority.setAuthorityName("ROLE_USER");
        User user = new User(userDto.getUserId(),
                bCryptPasswordEncoder.encode(userDto.getPassword()),
                userDto.getBirthday(),
                userDto.getUserEmail(),
                LocalDateTime.now(),
                userDto.getRealName(),
                authority,
                userDto.getGender());
        return userRepository.save(user).getUserId();

    }

    public User updateUser(String id, User user){
        Optional<User> userOptional = userRepository.findByUserId(id);
        if(userOptional.isPresent()){

            User temp = userOptional.get();
            temp.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            temp.setEmail(user.getEmail());
            temp.setRealName(user.getRealName());
            userRepository.save(temp);
            return temp;
        }else{
            throw new ResourceNotFoundException("User", "ID", id);
        }

    }

    // 대시보드에 사용자 관리를 위한 유저 정보 불러오기 비즈니스 로직
    public List<Object[]> getAllUsersParts(){
        return userRepository.getUserInfo();
    }

}
