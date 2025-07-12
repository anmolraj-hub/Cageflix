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
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin
public class CageflixController {

    private final CageflixService cageflixService;


    @GetMapping("/movies")
public List<Moviedto> getAllCageMovies(@RequestParam(required = false) String genre) {
    return cageflixService.getAllCageMovies(genre);
}

@GetMapping("/shows")
public List<Moviedto> getAllCageShows(@RequestParam(required = false) String genre) {
    return cageflixService.getAllCageShows(genre);
}

@GetMapping("/home")
public List<Moviedto> getAllCageContent(@RequestParam(required = false) String genre) {
    return cageflixService.getAllCageContent(genre);
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
