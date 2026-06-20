package com.servermonitor.monitor.service;

import com.servermonitor.monitor.dto.log.LogResponse;
import com.servermonitor.monitor.repository.LogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {

    private final LogRepository logRepository;

    public List<LogResponse> getLogsByServerId(String serverId) {
        return logRepository
                .findByServerIdOrderByCreatedAtDesc(serverId)
                .stream()
                .map(log -> LogResponse.builder()
                        .id(log.getId())
                        .status(log.getStatus())
                        .detail(log.getDetail())
                        .createdAt(log.getCreatedAt())
                        .build())
                .toList();
    }
}