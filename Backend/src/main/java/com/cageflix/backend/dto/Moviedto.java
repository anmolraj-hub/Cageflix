package com.cageflix.backend.dto;

import java.util.List;

import lombok.Data;

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
