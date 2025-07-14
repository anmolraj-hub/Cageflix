
package com.cageflix.backend.dto;

import lombok.Data;

//Contains the username and password used for authentication requests.

@Data
public class UserCredentials {
    private String username;
    private String password;
}
