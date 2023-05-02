package com.example.hospital.repository;

import com.example.hospital.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    @Query("select c from Doctor c where c.email=:x")
    Optional<Doctor> findByEmail(@Param("x") String email);

}
