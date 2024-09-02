package dw.memorial.Controller;

import dw.memorial.Dto.MessageDto;
import dw.memorial.Model.Message;
import dw.memorial.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    MessageService messageService;

    @PostMapping("/send")
    public ResponseEntity<MessageDto> sendMessage(@RequestBody MessageDto messageDto){
        return new ResponseEntity<>(messageService.sendMessage(messageDto),
                HttpStatus.OK);
    }

    @GetMapping("/getmysendmessage/{id}")
    public ResponseEntity<List<Message>> getMySendMessage(@PathVariable String id){
        return new ResponseEntity<>(messageService.getMySendMessage(id),
                HttpStatus.OK);
    }

    @GetMapping("/getmymessage/{id}")
    public ResponseEntity<List<Message>> getMyMessage(@PathVariable String id){
        return new ResponseEntity<>(messageService.getMyMessage(id),
                HttpStatus.OK);
    }
}
