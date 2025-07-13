package com.cageflix.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cageflix.backend.Repository.MovieRepository;
import com.cageflix.backend.Repository.PersonRepository;
import com.cageflix.backend.Repository.TitlePrincipalRepository;
import com.cageflix.backend.dto.Moviedto;
import com.cageflix.backend.mapper.Moviemapper;
import com.cageflix.backend.model.Person;
import com.cageflix.backend.model.TitlePrincipal;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CageflixService {

    private final PersonRepository personRepo;
    private final TitlePrincipalRepository principalRepo;
    private final MovieRepository movieRepo;
    private final Moviemapper movieMapper;
     private final TmdbService tmdbService;

    

    public List<Moviedto> getAllCageMovies(String genre) {
    return getAllCageMoviesByTypeAndGenre("movies", genre);
}

public List<Moviedto> getAllCageShows(String genre) {
    return getAllCageMoviesByTypeAndGenre("shows", genre);
}

public List<Moviedto> getAllCageContent(String genre) {
    return getAllCageMoviesByTypeAndGenre("all", genre);
}



    public Moviedto getMovieById(String id) {
        return movieRepo.findById(id).map(movieMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    public List<Moviedto> searchMovies(String genre, String actor, String keyword) {
        List<Moviedto> cageMovies = getAllCageMovies(genre);

        return cageMovies.stream().filter(movie -> {
            boolean matches = true;
            if (genre != null && !genre.isEmpty()) {
                matches &= movie.getGenres() != null && movie.getGenres().toLowerCase().contains(genre.toLowerCase());
            }
            if (keyword != null && !keyword.isEmpty()) {
                matches &= movie.getTitle().toLowerCase().contains(keyword.toLowerCase()) ||
                        (movie.getOriginalTitle() != null && movie.getOriginalTitle().toLowerCase().contains(keyword.toLowerCase()));
            }
            if (actor != null && !actor.isEmpty()) {
                matches &= movieHasActor(movie.getId(), actor);
            }
            return matches;
        }).toList();
    }

    private boolean movieHasActor(String tconst, String actorName) {
        List<TitlePrincipal> principals = principalRepo.findByTconst(tconst);
        for (TitlePrincipal tp : principals) {
            Person person = personRepo.findById(tp.getNconst()).orElse(null);
            if (person != null && person.getPrimaryName().equalsIgnoreCase(actorName)) {
                return true;
            }
        }
        return false;
    }

    

    private List<Moviedto> getAllCageMoviesByTypeAndGenre(String type, String genre) {
    Person cage = personRepo.findByPrimaryNameIgnoreCase("Nicolas Cage");
    if (cage == null) {
        throw new RuntimeException("Nicolas Cage not found!");
    }
    List<TitlePrincipal> cageTitles = principalRepo.findByNconst(cage.getnconst());
    List<String> tconsts = cageTitles.stream().map(TitlePrincipal::getTconst).toList();

    return movieRepo.findAllById(tconsts).stream()
        .filter(movie -> {
            boolean matchesType = true;
            if ("movies".equalsIgnoreCase(type)) {
                matchesType = "movie".equalsIgnoreCase(movie.getTitleType());
            } else if ("shows".equalsIgnoreCase(type)) {
                matchesType = !"movie".equalsIgnoreCase(movie.getTitleType());
            }
            boolean matchesGenre = true;
            if (genre != null && !genre.isEmpty()) {
                matchesGenre = movie.getGenres() != null && movie.getGenres().toLowerCase().contains(genre.toLowerCase());
            }
            return matchesType && matchesGenre;
        })
        
        .map(movie -> {
                //  If poster is missing, fetch from TMDb and store
                if (movie.getPosterUrl() == null || movie.getPosterUrl().isEmpty()) {
                   
                    String fetchedPosterUrl = tmdbService.fetchPosterUrl(
    movie.getPrimaryTitle(),
    movie.getOriginalTitle()
);
                    movie.setPosterUrl(fetchedPosterUrl);
                    movieRepo.save(movie); 
                }

                return movieMapper.toDto(movie);
            })
        .toList();
}


}
