package com.servermonitor.monitor.dto.log;

import com.servermonitor.monitor.model.ServerStatus;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class LogResponse {
    private Long id;
    private ServerStatus status;
    private String detail;
    private LocalDateTime createdAt;
}