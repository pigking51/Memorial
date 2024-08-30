package dw.memorial.Service;

import dw.memorial.Model.Message;
import dw.memorial.Repository.MessageRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    public Message sendMessage(Message message){
        return messageRepository.save(message);
    }

    public List<Message> getMySendMessage(String id){
        return messageRepository.findAll()
                .stream().filter(message -> message.getSendUser().equals(id))
                .collect(Collectors.toList());
    }

    public List<Message> getMyMessage(String id){
        return messageRepository.findAll()
                .stream().filter(message -> message.getTargetUser().equals(id))
                .collect(Collectors.toList());
    }
}
