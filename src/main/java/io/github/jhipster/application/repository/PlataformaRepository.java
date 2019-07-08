package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Plataforma;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Plataforma entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlataformaRepository extends JpaRepository<Plataforma, Long> {

}
