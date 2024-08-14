package dw.memorial.Service;

import dw.memorial.Dto.LectureCounterDto;
import dw.memorial.Exception.ResourceNotFoundException;
import dw.memorial.Model.Subscribe;
import dw.memorial.Model.User;
import dw.memorial.Repository.SubscribeRepository;
import dw.memorial.Repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class SubscribeService {
    @Autowired
    SubscribeRepository subscribeRepository;
    @Autowired
    UserRepository userRepository;
    
    public Subscribe saveSubscribe(Subscribe subscribe){
        // 구매확정 바로 직전, 현재시간을 저장함
        subscribe.setSubscribeTime(LocalDateTime.now());
        return subscribeRepository.save(subscribe);
    }

    public List<Subscribe> saveSubscribeList(List<Subscribe> subscribeList){
        return subscribeList.stream()
                .map((subscribe) -> {
                    // 구매확정 바로 직전, 현재시간을 저장함
                    subscribe.setSubscribeTime(LocalDateTime.now());
                    return subscribeRepository.save(subscribe);
                })
                .collect(Collectors.toList());
    }

    public List<Subscribe> getAllSubscribes(){
        return subscribeRepository.findAll();
    }
public List<Subscribe> getSubscribeListByUser(String userId){
    // 유저아이디로 유저객체 찾기
    Optional<User> userOptional = userRepository.findByUserId(userId);
    if(userOptional.isEmpty()){
        throw new ResourceNotFoundException("User", "ID", "userId");
    }
    return subscribeRepository.findByUser(userOptional.get());
}
public List<Subscribe> getSubscribeListByCurrentUser(){
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if(authentication == null || !authentication.isAuthenticated()){
        throw new IllegalStateException("User is not authenticated!");
    }
    String userId = authentication.getName();
    Optional<User> userOptional = userRepository.findByUserId(userId);
    if(userOptional.isEmpty()){
        throw  new ResourceNotFoundException("User", "ID", "userId");
    }
return subscribeRepository.findByUser(userOptional.get());
}

public List<LectureCounterDto> getLectureTop4(){
        return subscribeRepository.getLectureTop4();
}

}
