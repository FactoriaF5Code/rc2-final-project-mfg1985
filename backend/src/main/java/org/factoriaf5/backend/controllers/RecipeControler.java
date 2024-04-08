package org.factoriaf5.backend.controllers;

import org.factoriaf5.backend.persistence.Recipe;
import org.factoriaf5.backend.persistence.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class RecipeControler {

     private   RecipeRepository repository;

    public void RecipeController(@Autowired RecipeRepository repository) {
     this.repository = repository;
 }

 @PostMapping("/recipes")
 public RecipeResponse createRecipe(@RequestBody RecipeRequest  request) {
    Recipe recipe = new Recipe (request.getRecipeId(), request.getTitleRecipe(), request.getTimeRecipe(),
    request.getServings(), request.getTag(), request.getDishType(),request.getCollection(),
    request.getCategory(),request.getIngredients(), request.getInstructions(), request.getImages(), request.getNote());

    Recipe savedRecipe = repository.save(recipe);
    return new RecipeResponse(savedRecipe.getRecipeId(), savedRecipe.getTitleRecipe(), savedRecipe.getTimeRecipe(),
    savedRecipe.getServings(), savedRecipe.getTag(), savedRecipe.getDishType(),savedRecipe.getCollection(),
    savedRecipe.getCategory(),savedRecipe.getIngredients(), savedRecipe.getInstructions(), savedRecipe.getImages(), savedRecipe.getNote());
     
 }
 
}
