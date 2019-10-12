package com.tarde.dogapi.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.tarde.dogapi.entity.models.Dog;

public interface IDogDao extends CrudRepository<Dog, Long>{

}
