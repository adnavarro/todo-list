package code.response;

import lombok.Data;
import org.bson.types.ObjectId;

import java.io.Serializable;

@Data
public class UserResponse implements Serializable {

    private String id;

    private String username;

    private String password;

    private String token;

    public UserResponse(String id, String username, String password, String token){
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}
