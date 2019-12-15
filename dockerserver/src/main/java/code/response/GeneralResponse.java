package code.response;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.ToString;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@ToString
public class GeneralResponse {
    private String status;
    private String message;

    public GeneralResponse buildGeneralResponse(String status, String message) {
        GeneralResponse respuesta = new GeneralResponse();
        respuesta.setStatus(status);
        respuesta.setMessage(message);
        return respuesta;
    }
}
