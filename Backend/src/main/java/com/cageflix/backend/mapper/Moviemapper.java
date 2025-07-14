package com.cageflix.backend.mapper;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Component;

import com.cageflix.backend.Repository.PersonRepository;
import com.cageflix.backend.Repository.TitlePrincipalRepository;
import com.cageflix.backend.dto.Moviedto;
import com.cageflix.backend.model.Movie;
import com.cageflix.backend.model.Person;
import com.cageflix.backend.model.TitlePrincipal;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Moviemapper {
    private final TitlePrincipalRepository principalRepo;
    private final PersonRepository personRepo;
        
    public Moviedto toDto(Movie movie) {
        Moviedto dto = new Moviedto();
        dto.setId(movie.getTConst());
        dto.setTitle(movie.getPrimaryTitle());
        dto.setOriginalTitle(movie.getOriginalTitle());
        dto.setYear(movie.getStartYear());
        dto.setGenres(movie.getGenres());
        dto.setRuntime(movie.getRuntimeMinutes());
        // for getting posterurl to show in UI 
        dto.setPosterUrl(movie.getPosterUrl());

        // Get actors
        List<TitlePrincipal> principals = principalRepo.findByTconst(movie.getTConst());
        List<String> actorNames = principals.stream()
                .map(tp -> personRepo.findById(tp.getNconst()).orElse(null))
                .filter(Objects::nonNull)
                .map(Person::getPrimaryName)
                .toList();

        dto.setActors(actorNames);

        return dto;
    }
}
    

