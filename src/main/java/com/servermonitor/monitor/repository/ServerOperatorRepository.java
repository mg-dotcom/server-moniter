package com.servermonitor.monitor.repository;

import com.servermonitor.monitor.model.ServerOperator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServerOperatorRepository extends JpaRepository<ServerOperator, Long> {
}
