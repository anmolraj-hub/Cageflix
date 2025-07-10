package com.cageflix.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cageflix.backend.model.TitlePrincipal;

public interface TitlePrincipalRepository extends JpaRepository<TitlePrincipal, String> {
    List<TitlePrincipal> findByNconst(String nconst);
    List<TitlePrincipal> findByTconst(String tconst);
}
