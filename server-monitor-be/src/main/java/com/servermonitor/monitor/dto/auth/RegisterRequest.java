package com.servermonitor.monitor.dto.auth;

import com.servermonitor.monitor.model.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private Role role;
    private String lineUserId;
}
