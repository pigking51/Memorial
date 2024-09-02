package dw.memorial.Dto;

import dw.memorial.Model.Message;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MessageDto {

    private String sendUser;
    private String messageText;
    private String targetUser;

    public MessageDto toMessageDtoFromMessage(Message message){
        MessageDto messageDto = new MessageDto();
        messageDto.setSendUser(message.getSendUser());
        messageDto.setMessageText(message.getMessageText());
        messageDto.setTargetUser(message.getTargetUser());

        return messageDto;
    }
}
