package code.service;



import code.NotifyResponse;
import code.command.TokenCommand;
import code.command.UserCommand;
import code.entity.User;
import code.repository.UserRepository;
import code.response.GeneralResponse;
import code.response.TokenResponse;
import code.response.UserResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;


@Slf4j

@Service("UserService")
public class UserService {


    @Autowired
    private UserRepository userRepository;

    GeneralResponse generalResponse;


    public List<UserResponse> getAllUsers(){
        List<User> userList = userRepository.findAll();
        List<UserResponse> userResponseList = new ArrayList<>();
        userList.forEach(user->{
            UserResponse userResponse = new UserResponse(user._id.toHexString(),user.name,user.password, user.token);
            userResponseList.add(userResponse);
        });
        return userResponseList;
    }

    public String getToken(){
        SecureRandom secureRandom = new SecureRandom();
        byte[] tok = new byte[80];
        secureRandom.nextBytes(tok);
        String token = Base64.getUrlEncoder().withoutPadding().encodeToString(tok);
        return token;
    }

    public ResponseEntity registerOneUser(UserCommand userCommand){
        Boolean doesUserExist = userRepository.existsByNameAndPassword(userCommand.getUsername(), userCommand.getPassword());
        if(!doesUserExist) {
            User user = new User(userCommand.getUsername(), userCommand.getPassword());
            userRepository.save(user);
            return ResponseEntity.ok().body(new NotifyResponse("USER REGISTERED"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("USER/PASSWORD COMBINATION ALREADY EXISTS"));
    }

    public ResponseEntity logIn(UserCommand userCommand){
        User user = userRepository.findByNameAndPassword(userCommand.getUsername(), userCommand.getPassword());
        if(user != null) {
            user.setToken(getToken());
            userRepository.save(user);
            TokenResponse tokenResponse = new TokenResponse();
            tokenResponse.setToken(user.getToken());
            return ResponseEntity.ok().body(tokenResponse);
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE USER DOES NOT EXIST"));
    }

    public ResponseEntity logOut(TokenCommand tokenCommand){
        User user = userRepository.findByToken(tokenCommand.getToken());
        if(user != null) {
            user.setToken(null);
            userRepository.save(user);
            return ResponseEntity.ok().body(new NotifyResponse("USER LOGGED OUT"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE USER DOES NOT EXIST"));
    }


}

