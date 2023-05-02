package com.example.hospital.service;

import com.example.hospital.model.Appointment;
import com.example.hospital.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;


    public List<Appointment> getAppointmentByDoctor(Integer doctorId) {
        return this.appointmentRepository.getAppointmentByDoctor(doctorId);
    }
}
