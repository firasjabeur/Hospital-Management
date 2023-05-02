package com.example.hospital.controller;

import com.example.hospital.model.Doctor;
import com.example.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin({"*"})
@RestController
@RequestMapping({"/api"})
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @GetMapping("/doctor/email/{email}")
    public Doctor getDoctorByEmail(@PathVariable String email){return this.doctorService.getDoctorByEmail( email );}

}
