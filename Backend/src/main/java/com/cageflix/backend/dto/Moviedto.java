package com.cageflix.backend.dto;

import java.util.List;

import lombok.Data;

/**
 - Data Transfer Object (DTO) for transferring movie details
 - between different layers of the application.
 - Contains basic information about a movie such as title,
 - year, genres, runtime, poster URL, and a list of actors
 */

@Data
public class Moviedto {
    private String id;
    private String title;
    private String originalTitle;
    private Integer year;
    private String genres;
    private Integer runtime;
    
    private String posterUrl;

    private List<String> actors;
}
