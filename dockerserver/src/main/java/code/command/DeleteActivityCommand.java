package code.command;

import lombok.Data;
import lombok.ToString;
import org.bson.types.ObjectId;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;

@ToString
@Data
public class DeleteActivityCommand implements Serializable {

    @NotNull(message = "PLEASE, SUBMIT TOKEN")
    @NotEmpty(message = "PLEASE, SUBMIT TOKEN")
    private String token;

    @NotNull(message = "PLEASE, SUBMIT ACTIVITY ID")
    private ObjectId id;

}
