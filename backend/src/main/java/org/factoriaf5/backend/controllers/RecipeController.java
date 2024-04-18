package org.factoriaf5.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.factoriaf5.backend.persistence.Recipe;
import org.factoriaf5.backend.persistence.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*")
public class RecipeController {

      private RecipeRepository repository;

      public RecipeController(@Autowired RecipeRepository repository) {
            this.repository = repository;
      }

      @PostMapping("/newrecipe")
      public RecipeResponse createRecipe(@RequestBody RecipeRequest request) {
            Recipe recipe = new Recipe(request.getRecipeId(), request.getTitleRecipe(), request.getTimeRecipe(),
                        request.getServings(), request.getTag(), request.getDishType(), request.getCollection(),
                        request.getCategory(), request.getIngredients(), request.getInstructions(), request.getImage(),
                        request.getNote());

            Recipe savedRecipe = repository.save(recipe);
            return new RecipeResponse(savedRecipe.getId(), savedRecipe.getTitle(), savedRecipe.getTime(),
                        savedRecipe.getServings(), savedRecipe.getTag(), savedRecipe.getDishType(),
                        savedRecipe.getCollection(),
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

      @GetMapping("/recipes/{id}")
      public RecipeResponse getRecipeById(@PathVariable Long id) {
           
            Recipe recipe = repository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Receta no encontrada con ID: " + id));

            return new RecipeResponse(recipe.getId(), recipe.getTitle(), recipe.getTime(),
                        recipe.getServings(), recipe.getTag(), recipe.getDishType(),
                        recipe.getCollection(), recipe.getCategory(), recipe.getIngredients(),
                        recipe.getInstructions(), recipe.getImage(), recipe.getNote());
      }
}
