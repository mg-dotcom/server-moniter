package com.servermonitor.monitor.controller;

import com.servermonitor.monitor.ApiResponse.ApiResponse;
import com.servermonitor.monitor.dto.log.LogResponse;
import com.servermonitor.monitor.service.LogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servers")
@RequiredArgsConstructor
public class LogController {

    private final LogService logService;

    @GetMapping("/{id}/logs")
    public ApiResponse<List<LogResponse>> getLogs(
            @PathVariable String id
    ) {
        return ApiResponse.ok(
                logService.getLogsByServerId(id)
        );
    }
}