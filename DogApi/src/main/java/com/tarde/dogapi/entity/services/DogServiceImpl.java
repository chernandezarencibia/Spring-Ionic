package com.tarde.dogapi.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tarde.dogapi.entity.dao.IDogDao;
import com.tarde.dogapi.entity.models.Dog;

@Service
public class DogServiceImpl implements IDogService{
	
	@Autowired
	private IDogDao dogDao;
	
	@Override
	public List<Dog> getAllDogs() {
		System.out.print("Hola4");
		return (List<Dog>) dogDao.findAll();
	}
	@Override
	public Dog get(long id) {
		
		return dogDao.findById(id).get();
	}
	
	@Override
	public void post(Dog dog) {
		
		dogDao.save(dog);		
	}
	@Override
	public void put(Dog dog, long id) {
		
		dogDao.findById(id).ifPresent((x)->{
			dog.setId(id);
			dogDao.save(dog);
		});
	}

	@Override
	public void delete(long id) {
		
		dogDao.deleteById(id);
	}
	
	
}
