package dw.memorial.Service;

import dw.memorial.Dto.MessageDto;
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

    public MessageDto sendMessage(MessageDto messageDto)
    {
        Message message1 = new Message();
        message1.setSendUser(messageDto.getSendUser());
        message1.setMessageText(messageDto.getMessageText());
        message1.setTargetUser(messageDto.getTargetUser());

        Message savedMessage = messageRepository.save(message1);

        return messageDto.toMessageDtoFromMessage(savedMessage);
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
