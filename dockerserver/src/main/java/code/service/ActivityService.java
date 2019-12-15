package code.service;



import code.NotifyResponse;
import code.command.*;
import code.entity.Activity;
import code.entity.User;
import code.repository.ActivityRepository;
import code.repository.UserRepository;
import code.response.ActivityResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Slf4j

@Service("ActivityService")
public class ActivityService {



    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private UserRepository userRepository;


    public ResponseEntity addOneActivity(ActivityCommand activityCommand){
        User user = userRepository.findByToken(activityCommand.getToken());
        if(user != null) {
            Activity activity = new Activity(activityCommand.getDescription(),activityCommand.getNombre(),"activo", user._id);
            activityRepository.save(activity);
            return ResponseEntity.ok().body(new NotifyResponse("ACTIVITY SAVED"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE USER DOES NOT EXIST"));
    }

    public ResponseEntity getOneUserActivities(TokenCommand tokenCommand){
        User user = userRepository.findByToken(tokenCommand.getToken());
        if(user != null ) {
            List<Activity> activities = activityRepository.findActivitiesByUserId(user._id);
            List<ActivityResponse> activityResponseList = new ArrayList<>();
            activities.forEach(activity->{
                ActivityResponse activityResponse = new ActivityResponse(activity._id.toHexString(),activity.name,activity.description,activity.isActive);
                activityResponseList.add(activityResponse);
            });
            if (activities.size()!=0) return ResponseEntity.ok().body(activityResponseList);
            else return ResponseEntity.badRequest().body(new NotifyResponse("USER DOES NOT HAVE ACTIVITIES"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE USER DOES NOT EXIST"));
    }

    public ResponseEntity deleteOneActivity(DeleteActivityCommand deleteActivityCommand){
        User user = userRepository.findByToken(deleteActivityCommand.getToken());
        Activity activity = activityRepository.findBy_id(deleteActivityCommand.getId());
        if(user != null  && activity != null && activity.userId.toString().equalsIgnoreCase(user._id.toString())) {
            activityRepository.delete(activity);
            return ResponseEntity.ok().body(new NotifyResponse("ACTIVITY DELETED"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE ACTIVITY COULD NOT BE DELETED"));
    }

    public ResponseEntity updateOneActivity(UpdateActivityCommand updateActivityCommand){
        User user = userRepository.findByToken(updateActivityCommand.getToken());
        Activity activity = activityRepository.findBy_id(updateActivityCommand.getId());
        if(!updateActivityCommand.getIsActive().equalsIgnoreCase("activo") && !updateActivityCommand.getIsActive().equalsIgnoreCase("inactivo"))
            return ResponseEntity.badRequest().body(new NotifyResponse("INVALID STATUS"));
        if(user != null  && activity != null && activity.userId.toString().equalsIgnoreCase(user._id.toString())) {
            activity.setIsActive(updateActivityCommand.getIsActive());
            activity.setDescription(updateActivityCommand.getDescription());
            activity.setName(updateActivityCommand.getNombre());
            activityRepository.save(activity);
            return ResponseEntity.ok().body(new NotifyResponse("ACTIVITY UPDATED"));
        }
        else return ResponseEntity.badRequest().body(new NotifyResponse("THE ACTIVITY COULD NOT BE UPDATED"));
    }


}

