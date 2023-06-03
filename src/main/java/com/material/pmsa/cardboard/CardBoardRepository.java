package com.material.pmsa.cardboard;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.domain.Sort;


public interface CardboardRepository extends CrudRepository<Cardboard, Integer>  {
    List<Cardboard> findAll(Sort sort);
}
