package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Plataforma;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Plataforma entity.
 */
@Repository
public interface PlataformaRepository extends JpaRepository<Plataforma, Long> {

    @Query(value = "select distinct plataforma from Plataforma plataforma left join fetch plataforma.games",
        countQuery = "select count(distinct plataforma) from Plataforma plataforma")
    Page<Plataforma> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct plataforma from Plataforma plataforma left join fetch plataforma.games")
    List<Plataforma> findAllWithEagerRelationships();

    @Query("select plataforma from Plataforma plataforma left join fetch plataforma.games where plataforma.id =:id")
    Optional<Plataforma> findOneWithEagerRelationships(@Param("id") Long id);

}
