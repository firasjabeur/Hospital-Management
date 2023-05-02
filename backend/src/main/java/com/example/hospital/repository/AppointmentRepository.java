package com.example.hospital.repository;

import com.example.hospital.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    @Query("select p from Appointment p where p.doctor.id=:x")
    List<Appointment> getAppointmentByDoctor(@Param("x") Integer vendeurId);

}

