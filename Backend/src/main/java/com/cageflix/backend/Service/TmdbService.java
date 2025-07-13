package com.cageflix.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class TmdbService {

    @Value("${tmdb.api.key}")
    private String tmdbApiKey;

    private final RestTemplate restTemplate;

    // Fetching PosterURL
    public String fetchPosterUrl(String title, String altTitle) {
        try {
            String encodedTitle = URLEncoder.encode(title, StandardCharsets.UTF_8);
            String url = "https://api.themoviedb.org/3/search/movie?api_key=" + tmdbApiKey + "&query=" + encodedTitle;

            System.out.println("Trying TMDb search for: " + title);
            System.out.println("Request URL: " + url);

            TmdbResponse response = restTemplate.getForObject(url, TmdbResponse.class);

            if (response != null && response.results != null && !response.results.isEmpty()) {
                String posterPath = response.results.get(0).poster_path;
                if (posterPath != null && !posterPath.isEmpty()) {
                    String fullUrl = "https://image.tmdb.org/t/p/w500" + posterPath;
                    System.out.println("Found poster: " + fullUrl);
                    return fullUrl;
                }
            } else {
                System.out.println("No results found for: " + title);
            }

            // Fallback for altTitle
            if (altTitle != null && !altTitle.equals(title)) {
                System.out.println("Trying fallback title: " + altTitle);
                return fetchPosterUrl(altTitle, null);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null; // fallback
    }

    // API response mapping for TMDB
    public static class TmdbResponse {
        public java.util.List<Result> results;

        public static class Result {
            public String poster_path;
        }
    }
}
