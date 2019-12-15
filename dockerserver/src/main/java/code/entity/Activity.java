package code.entity;


import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
public class Activity {
    @Id
    public ObjectId _id;

    public String name;

    public String description;

    public String isActive;

    public ObjectId userId;

    // Constructors
    public Activity() {}

    public Activity(ObjectId _id, String description) {
        this._id = _id;
        this.description = description;
    }

    public Activity(String description, String isActive, ObjectId userId) {
        this.description = description;
        this.isActive = isActive;
        this.userId = userId;
    }

    public Activity(String description,String name, String isActive, ObjectId userId) {
        this.description = description;
        this.name = name;
        this.isActive = isActive;
        this.userId = userId;
    }


    public Activity(String description) {
        this.description = description;
    }

    // ObjectId needs to be converted to string
    public String get_id() { return _id.toHexString(); }
    public void set_id(ObjectId _id) { this._id = _id; }


}
