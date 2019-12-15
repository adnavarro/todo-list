package code.controller;

import code.command.*;
import code.repository.ActivityRepository;
import code.repository.UserRepository;
import code.service.ActivityService;
import code.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "/activities", produces = "application/json")

public class ActivityController {


    @Autowired
    private ActivityService activityService;


    @PostMapping(value = "/add")
    public ResponseEntity addOneActivity(@Valid @RequestBody ActivityCommand activityCommand) {
        return activityService.addOneActivity(activityCommand);
    }

    @PostMapping(value = "/user")
    public ResponseEntity getOneUserActivities(@Valid @RequestBody TokenCommand tokenCommand) {
        return activityService.getOneUserActivities(tokenCommand);
    }

    @PostMapping(value = "/delete")
    public ResponseEntity deleteOneActivity(@Valid @RequestBody DeleteActivityCommand deleteActivityCommand) {
        return activityService.deleteOneActivity(deleteActivityCommand);
    }

    @PutMapping(value = "/update")
    public ResponseEntity updateOneActivity(@Valid @RequestBody UpdateActivityCommand updateActivityCommand) {
        return activityService.updateOneActivity(updateActivityCommand);
    }


}