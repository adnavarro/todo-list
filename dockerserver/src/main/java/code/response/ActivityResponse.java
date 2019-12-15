package code.response;

import lombok.Data;
import org.bson.types.ObjectId;

import java.io.Serializable;

@Data
public class ActivityResponse implements Serializable {

    private String id;

    private String description;

    private String nombre;

    private String isActive;

    public ActivityResponse(String id, String nombre, String description, String isActive){
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.isActive = isActive;
    }
}
