package com.cageflix.backend.mapper;

import org.springframework.stereotype.Component;

import com.cageflix.backend.dto.Moviedto;
import com.cageflix.backend.model.Movie;

@Component
public class Moviemapper {
        
    public Moviedto toDto(Movie movie) {
        Moviedto dto = new Moviedto();
        dto.setId(movie.getTConst());
        dto.setTitle(movie.getPrimaryTitle());
        dto.setOriginalTitle(movie.getOriginalTitle());
        dto.setYear(movie.getStartYear());
        dto.setGenres(movie.getGenres());
        dto.setRuntime(movie.getRuntimeMinutes());
        //
        dto.setPosterUrl(movie.getPosterUrl());
        return dto;
    }
}
    

