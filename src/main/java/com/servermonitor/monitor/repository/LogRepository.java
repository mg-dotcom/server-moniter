package com.servermonitor.monitor.repository;

import com.servermonitor.monitor.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {
}
