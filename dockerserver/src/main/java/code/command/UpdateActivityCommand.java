package code.command;

import lombok.Data;
import lombok.ToString;
import org.bson.types.ObjectId;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@ToString
@Data
public class UpdateActivityCommand implements Serializable {

    @NotNull(message = "PLEASE, SUBMIT TOKEN")
    @NotEmpty(message = "PLEASE, SUBMIT TOKEN")
    private String token;

    @NotNull(message = "PLEASE, SUBMIT NAME")
    @NotEmpty(message = "PLEASE, SUBMIT NAME")
    @Size(max = 80, message = "THE NAME MUST NOT BE OVER 80 CHARACTERS LONG")
    private String nombre;

    @NotNull(message = "PLEASE, SUBMIT DESCRIPTION")
    @NotEmpty(message = "PLEASE, SUBMIT DESCRIPTION")
    @Size(min = 4, message = "THE DESCRIPTION MUST BE AT LEAST 10 CHARACTERS LONG")
    private String description;

    @NotNull(message = "PLEASE, SUBMIT ACTIVITY ID")
    private ObjectId id;

    @NotNull
    private String isActive;

}
