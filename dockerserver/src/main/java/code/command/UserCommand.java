package code.command;

import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.*;
import java.io.Serializable;

@ToString
@Data
public class UserCommand implements Serializable {

    @NotNull(message = "PLEASE, SUBMIT NAME")
    @NotEmpty(message = "PLEASE, SUBMIT NAME")
    @Size(max = 80, message = "THE NAME MUST NOT BE OVER 80 CHARACTERS LONG")
    @Pattern(regexp = ValidationRules.NAME_REGEX, message = "THE NAME IS NOT VALID")
    private String username;


    @NotNull(message = "PLEASE, SUBMIT PASSWORD")
    @NotEmpty(message = "PLEASE, SUBMIT PASSWORD")
    @Size(min = 4, message = "THE PASSWORD MUST BE AT LEAST 4 CHARACTERS LONG")
    private String password;


}
