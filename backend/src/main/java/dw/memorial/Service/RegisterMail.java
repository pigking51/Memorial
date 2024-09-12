package dw.memorial.Service;

import dw.memorial.Model.FranchiseInquery;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import java.io.UnsupportedEncodingException;
import java.time.LocalDate;


@Service
public class RegisterMail implements MailServiceInter {

    @Autowired
    JavaMailSender emailSender; // MailConfig에서 등록해둥 Bean을 autowired하여 사용하기

    // private String ePw; // 사용자가 메일로 받을 인증번호

    // 메일 내용 작성
    @Override
    public MimeMessage createMessage(String to) throws MessagingException, UnsupportedEncodingException{
        System.out.println("메일받을 사용자" + to);
//        System.out.println("인증번호" + ePw);

        MimeMessage message = emailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, to); // 메일 받을 사용자
        message.setSubject("[Memorial 문의안내] Memorial에 문의를 남겨주셔서 감사합니다."); // 이메일 제목

        String msgg = "";

        msgg += "<img src=\"https://ifh.cc/g/PD02zD.png\">";
        msgg += "<h2>Hello, Memorial! ☕️</h2>";
        msgg += "<h2>모두가 기억해주기를 바라는 커피 프랜차이즈</h2><h1><strong>Memorial<strong> 입니다 😌</h1>";
        msgg += "<br>";
        msgg += "<p>저희 사이트에 문의를 남겨주셔서 감사합니다.</p>";
        msgg += "<br>";
        msgg += "<br>";
        msgg += "<div align=\"center\" style=\"border: 3px solid #eb92ae; border-radius: 50px; padding: 30px\">";
        msgg += "<h3 style=\"color:#DB365A\"> 진행사항..</h3>";
        msgg += "<div style=`font-size: 130%`>";
        msgg += "<strong> 문의의 대한 답변은 약 " + LocalDate.now().plusDays(7) +"일 이내에 보내드릴 예정입니다.";
        msgg += "</div>";
        //msgg += "<img src=../resources/static/image/emailfooter.jpg/>"; // footer image

        message.setText(msgg, "utf-8", "html"); // 메일 내용, charset타입, subtype
        // 보내는 사람의 이메일 주소, 보내는 사람 이름
        message.setFrom(new InternetAddress("chlrjs51@naver.com", "Memorial고객센터"));
        System.out.println("********creatMessage 함수에서 생성된 msgg 메시지********" + msgg);
        System.out.println("********creatMessage 함수에서 생성된 리턴 메시지********" + message);

        return message;
    }

    // 메일 발송
    // sendSimpleMessage의 매개변수 to는 이메일 주소가 되고,
    // MimeMessage 객체 안에 내가 전송항 메일의 내용을 담는다
    // bean으로 등록해둔 javaMail 객체를 사용하여 이메일을 발송한다
    @Override
    public String sendSimpleMessage(String to) throws Exception{
        MimeMessage message = createMessage(to); // "to"로 메일 발송
        System.out.println("********생성된 메시지******** => " + message);

        try{ // 예외처리
            emailSender.send(message);
        }catch(Exception e){
            e.printStackTrace();
            throw new IllegalArgumentException();
        }
        return "Success";
    }
}
