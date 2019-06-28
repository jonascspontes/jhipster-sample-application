package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Genero;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Genero entity.
 */
@Repository
public interface GeneroRepository extends JpaRepository<Genero, Long> {

    @Query(value = "select distinct genero from Genero genero left join fetch genero.games",
        countQuery = "select count(distinct genero) from Genero genero")
    Page<Genero> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct genero from Genero genero left join fetch genero.games")
    List<Genero> findAllWithEagerRelationships();

    @Query("select genero from Genero genero left join fetch genero.games where genero.id =:id")
    Optional<Genero> findOneWithEagerRelationships(@Param("id") Long id);

}
