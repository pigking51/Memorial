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
        message.setSubject("[Memorial 문의안내] Memorial에 문의를 남겨주셔서 감사합니다 :)"); // 이메일 제목

        String msgg = "";

        msgg += "<img align=\"center\" src=\"https://ifh.cc/g/kGDSMg.jpg style=\"width: 40%\">";
        msgg += "<h1>Hello, Memorial! ☕️</h1>";
        msgg += "<h1>모두가 기억해주기를 바라는 커피 프랜차이즈<br/><strong>Memorial<strong> 입니다 😊</h1>";
        msgg += "<br>";
        msgg += "<p>안녕하세요. 먼저, 저희 Memorial 커피 프랜차이즈에 관심을 가져주신 것에 깊이 감사드립니다.</p>";
        msgg += "<p>고객님께서 보내주신 문의는 저희에게 큰 의미가 있으며,</p>";
        msgg += "<p>이에 대한 성실한 답변을 드릴 수 있게 되어 매우 기쁩니다.</p>";
        msgg += "<br>";
        msgg += "<p>저희 Memorial은 단순히 커피를 판매하는 곳을 넘어,</p>";
        msgg += "<p>모든 고객분들의 소중한 순간을 함께 기억하고자 하는 특별한 의미를 지니고 있습니다.</p>";
        msgg += "<p>커피 한 잔을 통해 마음 깊이 남는 추억을 만들 수 있기를 바라며, </p>";
        msgg += "<p>고객님께서도 저희 Memorial과 함께한 시간을 오랫동안 기억해 주시기를 소망합니다.</p>";
        msgg += "<p>저희 브랜드가 전달하고자 하는 가치와 진심이 담긴 서비스가</p>";
        msgg += "<p>고객님의 일상에 작은 행복이 되었으면 하는 바람입니다.</p>";
        msgg += "<br>";
        msgg += "<p>문의해 주신 내용에 대해 더욱 자세히 안내드리고,</p>";
        msgg += "<p>앞으로도 고객님께 최선을 다하는 모습으로 찾아뵐 수 있도록 항상 노력하겠습니다.</p>";
        msgg += "<p>언제나 편안하게 문의 주시고, 저희와 함께하는 모든 순간이 기분 좋은 경험이 될 수 있도록</p>";
        msgg += "<p>최선을 다하겠습니다.</p>";
        msgg += "<br>";
        msgg += "<p>다시 한 번, 저희 Memorial에 대한 애정과 관심에 깊이 감사드리며, </p>";
        msgg += "<p>앞으로도 많은 사랑과 응원 부탁드립니다.</p>";
        msgg += "<br>";
        msgg += "<p>감사합니다.</p>";



        msgg += "<div align=\"center\" style=\"border: 2px solid #eb92ae; border-radius: 10px; padding: 30px; margin: 0px 20%\">";
        msgg += "<h3 style=\"color:#DB365A; font-size: 40px; margin-top: 0\"> 진행사항..</h3>";
        msgg += "<div style=\"font-size: 20px\">";
        msgg += "<strong> 문의의 대한 답변은 약 " + LocalDate.now().plusDays(7) +"일 이내에 보내드릴 예정입니다.";
        msgg += "<br>";
        msgg += "<strong> 많은 사랑과 관심 감사합니다 😌";
        msgg += "</div>";
        //msgg += "<img src=../resources/static/image/emailfooter.jpg/>"; // footer image

        message.setText(msgg, "utf-8", "html"); // 메일 내용, charset타입, subtype
        // 보내는 사람의 이메일 주소, 보내는 사람 이름
        message.setFrom(new InternetAddress("chlrjs51@naver.com", "Team Memorial"));
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

