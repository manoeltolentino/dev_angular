package com.acme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.acme.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
	