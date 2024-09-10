package dw.memorial.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.sql.SQLOutput;

//@Service
//public class RegisterMail implements MailServiceInter {
//
//    @Autowired
//    JavaMailSender emailSender; // MailConfig에서 등록해둥 Bean을 autowired하여 사용하기
//
//    //private String ePw; // 사용자가 메일로 받을 인증번호
//
//    // 메일 내용 작성
//    @Override
//   // public MimeMessage createMessage(String to) throws MessagingException, UnsupportedEncodingException{
//        //System.out.println("메일받을 사용자" + to);
//        //System.out.println("인증번호" + ePw);
//
//        //MimeMessage message = emailSender.createMimeMessage();
//
//        //message.addRecipients(MimeMessage.RecipientType.TO, to); // 메일 받을 사용자
//        //message.setSubject("[문의안내] Memorial에 문의를 남겨주셔서 감사합니다."); // 이메일 제목
//   // }
//}
