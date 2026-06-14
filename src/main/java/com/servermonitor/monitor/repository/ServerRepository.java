package com.servermonitor.monitor.repository;

import com.servermonitor.monitor.model.Server;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServerRepository extends JpaRepository<Server, String> {
}
