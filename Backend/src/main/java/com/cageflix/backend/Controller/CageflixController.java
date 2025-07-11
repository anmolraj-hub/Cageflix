package com.cageflix.backend.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cageflix.backend.Service.CageflixService;
import com.cageflix.backend.dto.Moviedto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
@CrossOrigin
public class CageflixController {

    private final CageflixService cageflixService;

    @GetMapping
    public List<Moviedto> getAllCageMovies() {
        return cageflixService.getAllCageMovies();
       

    }
    

    @GetMapping("/{id}")
    public Moviedto getMovieById(@PathVariable String id) {
        return cageflixService.getMovieById(id);
    }

    @GetMapping("/search")
    public List<Moviedto> searchMovies(
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String actor,
            @RequestParam(required = false) String keyword) {
        return cageflixService.searchMovies(genre, actor, keyword);
    }
    public CageflixService getCageflixService() {
        return cageflixService;
    }
}
