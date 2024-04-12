package org.factoriaf5.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.factoriaf5.backend.persistence.Recipe;
import org.factoriaf5.backend.persistence.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class RecipeControler {

   private RecipeRepository repository;

   public void RecipeController(@Autowired RecipeRepository repository) {
      this.repository = repository;
   }

   @PostMapping("/recipes")
   public RecipeResponse createRecipe(@RequestBody RecipeRequest request) {
      Recipe recipe = new Recipe(request.getRecipeId(), request.getTitleRecipe(), request.getTimeRecipe(),
            request.getServings(), request.getTag(), request.getDishType(), request.getCollection(),
            request.getCategory(), request.getIngredients(), request.getInstructions(), request.getImage(),
            request.getNote());

      Recipe savedRecipe = repository.save(recipe);
      return new RecipeResponse(savedRecipe.getId(), savedRecipe.getTitle(), savedRecipe.getTime(),
            savedRecipe.getServings(), savedRecipe.getTag(), savedRecipe.getDishType(), savedRecipe.getCollection(),
            savedRecipe.getCategory(), savedRecipe.getIngredients(), savedRecipe.getInstructions(),
            savedRecipe.getImage(), savedRecipe.getNote());

   }

   @GetMapping("/recipes")
   public List<RecipeResponse> allRecipes() {
      return repository.findAll().stream()
            .map(r -> new RecipeResponse(r.getId(), r.getTitle(), r.getTime(),
                  r.getServings(), r.getTag(), r.getDishType(), r.getCollection(),
                  r.getCategory(), r.getIngredients(), r.getInstructions(),
                  r.getImage(), r.getNote()))
            .collect(Collectors.toList());
   }

}
