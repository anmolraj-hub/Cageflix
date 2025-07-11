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

    public List<Moviedto> getAllCageMovies() {
        Person cage = personRepo.findByPrimaryNameIgnoreCase("Nicolas Cage");
        //Person cage = personRepo.findBynconstIgnoreCase("nm0000115");
        if (cage == null) {
            throw new RuntimeException("Nicolas Cage not found!");
        }
        List<TitlePrincipal> cageTitles = principalRepo.findByNconst(cage.getnconst());
        List<String> tconsts = cageTitles.stream().map(TitlePrincipal::getTconst).toList();
        return movieRepo.findAllById(tconsts).stream().map(movieMapper::toDto).toList();
    }

    public Moviedto getMovieById(String id) {
        return movieRepo.findById(id).map(movieMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    public List<Moviedto> searchMovies(String genre, String actor, String keyword) {
        List<Moviedto> cageMovies = getAllCageMovies();

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
}
