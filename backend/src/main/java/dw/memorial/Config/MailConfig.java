package dw.memorial.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {
    @Bean
    public JavaMailSender MailService(){
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setHost("smtp.gmail.com");
        javaMailSender.setUsername("cgsw1519");
        javaMailSender.setPassword("aigf uafm dsxq tmvc");

        javaMailSender.setPort(465);

        javaMailSender.setJavaMailProperties(getMailProperties());
        return javaMailSender;
    }

    // 메일 인증서버 정보 가져오기
    private Properties getMailProperties(){
        Properties properties = new Properties();
        properties.setProperty("mail.transport.protocol", "smtp"); // 프로토콜 설정
        properties.setProperty("mail.smtp.auth", "true"); // smtp 인증
        properties.setProperty("mail.smtp.starttls.enable", "true"); // smtp starttls
        properties.setProperty("mail.debug", "true"); // 디버그 사용
        properties.setProperty("mail.smtp.ssl.trust", "smtp.gmail.com"); // ssl 인증서
        properties.setProperty("mail.smtp.ssl.enable", "true"); // ssl 사용

        return properties;
    }
}
