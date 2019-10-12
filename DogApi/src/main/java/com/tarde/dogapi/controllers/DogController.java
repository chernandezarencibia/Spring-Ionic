package com.tarde.dogapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tarde.dogapi.entity.models.Dog;
import com.tarde.dogapi.entity.services.IDogService;

@RestController
@CrossOrigin(origins = "*")
public class DogController {

	
	@Autowired
	private IDogService dogService;
	
	@GetMapping("/api/dogs")
	private List<Dog> getDogs(){
		return dogService.getAllDogs();
	}
	
	@GetMapping("/api/dogs/{id}")
	public Dog getOneDog(@PathVariable(value = "id") long id) {
		return dogService.get(id);
	}
	
	@PostMapping("/api/dogs")
	public void addDog(Dog dog) {
		dogService.post(dog);
	}
	
	@PutMapping("/api/dogs/{id}")
	public void updateDog(Dog dog,@PathVariable(value = "id")Long id) {
		
		dogService.put(dog, id);
	}
	
	@DeleteMapping("/api/dogs/{id}")
	public void deleteDog(@PathVariable(value = "id") long id) {
		dogService.delete(id);
	}
	
}
