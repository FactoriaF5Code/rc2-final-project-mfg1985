package org.factoriaf5.backend.persistence;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

   public List<Recipe> findByTitleRecipeContains(String title);

}
