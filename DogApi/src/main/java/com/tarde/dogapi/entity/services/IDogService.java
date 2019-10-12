package com.tarde.dogapi.entity.services;

import java.util.List;

import com.tarde.dogapi.entity.models.Dog;

public interface IDogService {
	public Dog get(long id);
	public List<Dog> getAllDogs();
	public void post(Dog dog);
	public void put(Dog dog, long id);
	public void delete(long id);
}
