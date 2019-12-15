package code.controller;

import code.command.TokenCommand;
import code.command.UserCommand;
import code.repository.UserRepository;
import code.response.UserResponse;
import code.service.ActivityService;
import code.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value="/users",produces = "application/json")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ActivityService activityService;

    @GetMapping
    public List<UserResponse> getAllUsers() {
        return userService.getAllUsers();
    }


    @PostMapping(value = "/register")
    public ResponseEntity registerOneUser(@Valid @RequestBody UserCommand userCommand) {
        return userService.registerOneUser(userCommand);
    }

    @PostMapping(value = "/login")
    public ResponseEntity loginOneUser(@Valid @RequestBody UserCommand userCommand) {
        return userService.logIn(userCommand);
    }

    @PostMapping(value = "logout")
    public ResponseEntity logoutOneUser(@Valid @RequestBody TokenCommand tokenCommand) {
        return userService.logOut(tokenCommand);
    }


}