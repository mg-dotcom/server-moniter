package com.servermonitor.monitor.repository;

import com.servermonitor.monitor.model.Operator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface OperatorRepository extends JpaRepository<Operator, String> {
   Optional<Operator> findByUsername(String username);
}
