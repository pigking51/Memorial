package dw.memorial.Config;

import dw.memorial.Jwt.JwtFilter;
import dw.memorial.Exception.MyAccessDeniedHandler;
import dw.memorial.Exception.MyAuthenticationEntryPoint;
import dw.memorial.Service.UserDetailService;
import dw.memorial.Jwt.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Autowired
    private UserDetailService userDetailService;

    @Autowired
    private TokenProvider tokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeRequests(auth -> auth
                        .requestMatchers(
//                                new AntPathRequestMatcher("/"),
//                                new AntPathRequestMatcher("/**"),
                                new AntPathRequestMatcher("/products/**"),
                                new AntPathRequestMatcher("/memorial/**"),
                                new AntPathRequestMatcher("/memorial/signup"),
                                new AntPathRequestMatcher("/memorial/user/show"),
                                new AntPathRequestMatcher("/memorial/api/**"),
                                new AntPathRequestMatcher("/memorial/api/products/**"),
                                new AntPathRequestMatcher("/memorial/api/products/purchaseList"),
                                new AntPathRequestMatcher("/lectures/getalllectures"),
                                new AntPathRequestMatcher("/lectures/getalllectures/**"),
                                new AntPathRequestMatcher("/post/getallposts"),
                                new AntPathRequestMatcher("/post/getallposts/**"),
                                new AntPathRequestMatcher("/post/getallpostsparts"),
                                new AntPathRequestMatcher("/post/getallpostsparts/**"),
                                new AntPathRequestMatcher("/menu/getallmenu"),
                                new AntPathRequestMatcher("/api/authenticate"),
                                new AntPathRequestMatcher("/user/login"),
                                new AntPathRequestMatcher("/user/signup"),
                                new AntPathRequestMatcher("/user/show"),
                                new AntPathRequestMatcher("/signup"),
                                new AntPathRequestMatcher("/index"),
                                new AntPathRequestMatcher("/reviews"),
                                new AntPathRequestMatcher("/board"),
                                new AntPathRequestMatcher("/postDetail"),
                                new AntPathRequestMatcher("/lecture"),
                                new AntPathRequestMatcher("/lectureDetail"),
                                new AntPathRequestMatcher("/faq"),
                                new AntPathRequestMatcher("/*"),
//                                // ↑ WAS까지 가서 통과해야되는 것들
                                new AntPathRequestMatcher("/authenticate"),
                                new AntPathRequestMatcher("/login"),
                                new AntPathRequestMatcher("/css/**"),
                                new AntPathRequestMatcher("/js/**"),
                                new AntPathRequestMatcher("/images/**")
                                // ↑ TOMCAT까지 가서 통과해야되는 것들
                        ).permitAll()
                        .anyRequest().authenticated())
                .formLogin(form->form.loginPage("/memorial/login.html").defaultSuccessUrl("/memorial/mainpage"))
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .csrf(AbstractHttpConfigurer::disable)
                .exceptionHandling(exception -> exception
                        .authenticationEntryPoint(new MyAuthenticationEntryPoint())
                        .accessDeniedHandler(new MyAccessDeniedHandler()))
                .addFilterBefore(
                        new JwtFilter(tokenProvider),
                        UsernamePasswordAuthenticationFilter.class
                )
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailService userDetailService) throws Exception {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailService);
        authProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return new ProviderManager(authProvider);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
