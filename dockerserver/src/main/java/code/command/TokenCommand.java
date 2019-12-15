package code.command;

import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;

@ToString
@Data
public class TokenCommand implements Serializable {

    @NotNull(message = "PLEASE, SUBMIT TOKEN")
    @NotEmpty(message = "PLEASE, SUBMIT TOKEN")
    private String token;

}
