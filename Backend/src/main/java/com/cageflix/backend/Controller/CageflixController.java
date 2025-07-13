package com.cageflix.backend.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cageflix.backend.Service.CageflixService;
import com.cageflix.backend.dto.Moviedto;
import com.cageflix.backend.dto.UserCredentials;

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

    // For Log In 
    @PostMapping("/signin")
public ResponseEntity<String> signIn(@RequestBody UserCredentials credentials) {
    
    String validUsername = "user";
    String validPassword = "pass";

    if (validUsername.equals(credentials.getUsername()) && validPassword.equals(credentials.getPassword())) {
        return ResponseEntity.ok("Login successful");
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }
}
    public CageflixService getCageflixService() {
        return cageflixService;
    }
}
