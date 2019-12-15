package code.entity;


import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class User {
    @Id
    public ObjectId _id;

    public String name;

    public String password;

    public String token;



    // Constructors
    public User() {}

    public User(ObjectId _id, String name) {
        this._id = _id;
        this.name = name;
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }


    // ObjectId needs to be converted to string
    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

}
