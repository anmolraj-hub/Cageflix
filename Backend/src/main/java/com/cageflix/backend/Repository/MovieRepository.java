package com.cageflix.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cageflix.backend.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, String> {
    List<Movie> findByGenresContainingIgnoreCase(String genre);
}