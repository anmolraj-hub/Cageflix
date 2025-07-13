package com.cageflix.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "title_basics2")
public class Movie {
    @Id
    private String tconst;

    private String titleType;
    private String primaryTitle;
    private String originalTitle;
    private boolean isAdult;
    private Integer startYear;
    private String genres;
    private Integer runtimeMinutes;
// 
     private String posterUrl;


    public String getPosterUrl() {
        return posterUrl;
    }

     public void setPosterUrl(String posterUrl) {
         this.posterUrl = posterUrl;
     }

    // Getters
    public String getTConst() {
        return tconst;
    }

    public String getTitleType() {
        return titleType;
    }

    public String getPrimaryTitle() {
        return primaryTitle;
    }

    public String getOriginalTitle() {
        return originalTitle;
    }

    public boolean isAdult() {
        return isAdult;
    }

    public Integer getStartYear() {
        return startYear;
    }

    public String getGenres() {
        return genres;
    }

    public Integer getRuntimeMinutes() {
        return runtimeMinutes;
    }

    // Setters
    public void setTconst(String tconst) {
        this.tconst = tconst;
    }

    public void setTitleType(String titleType) {
        this.titleType = titleType;
    }

    public void setPrimaryTitle(String primaryTitle) {
        this.primaryTitle = primaryTitle;
    }

    public void setOriginalTitle(String originalTitle) {
        this.originalTitle = originalTitle;
    }

    public void setAdult(boolean isAdult) {
        this.isAdult = isAdult;
    }

    public void setStartYear(Integer startYear) {
        this.startYear = startYear;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public void setRuntimeMinutes(Integer runtimeMinutes) {
        this.runtimeMinutes = runtimeMinutes;
    }
}