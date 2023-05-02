package com.example.hospital.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import com.example.hospital.model.Doctor;
import com.example.hospital.model.Medicine;
import com.example.hospital.repository.DoctorRepository;
import com.example.hospital.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
@RequestMapping("/api/v2/")
public class MedicineController {
	
	@Autowired
	private DoctorRepository medicineRepository;
	
	@GetMapping("/medicines")
	public List<Doctor> getAllMedicines(){
		return medicineRepository.findAll();
	}
	
	@PostMapping("/medicines")
	public Doctor createMedicine(@RequestBody Doctor medicine) {
		return medicineRepository.save(medicine);
	}
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Doctor> getPatientById(@PathVariable Integer id) throws AttributeNotFoundException {

		Doctor medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		return ResponseEntity.ok(medicine);
	}

}