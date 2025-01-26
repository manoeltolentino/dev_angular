package com.acme.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.acme.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

}
