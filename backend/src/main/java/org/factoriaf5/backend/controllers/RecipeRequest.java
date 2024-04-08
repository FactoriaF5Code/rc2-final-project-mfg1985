package org.factoriaf5.backend.controllers;

import java.util.List;

public class RecipeRequest {
     private Long recipeId;
 private String titleRecipe;
 private String timeRecipe;
 private String servings;
 private String tag;
 private String dishType;
 private String collection;
 private String category;
 private String ingredients;
 private String instructions;
 private List<String> images;
 private String note;

 
public RecipeRequest(Long recipeId, String titleRecipe, String timeRecipe, String servings, String tag, String dishType,
        String collection, String category, String ingredients, String instructions, List<String> images, String note) {
    this.recipeId = recipeId;
    this.titleRecipe = titleRecipe;
    this.timeRecipe = timeRecipe;
    this.servings = servings;
    this.tag = tag;
    this.dishType = dishType;
    this.collection = collection;
    this.category = category;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.images = images;
    this.note = note;
}
public Long getRecipeId() {
    return recipeId;
}
public String getTitleRecipe() {
    return titleRecipe;
}
public String getTimeRecipe() {
    return timeRecipe;
}
public String getServings() {
    return servings;
}
public String getTag() {
    return tag;
}
public String getDishType() {
    return dishType;
}
public String getCollection() {
    return collection;
}
public String getCategory() {
    return category;
}
public String getIngredients() {
    return ingredients;
}
public String getInstructions() {
    return instructions;
}
public List<String> getImages() {
    return images;
}
public String getNote() {
    return note;
}

 
}
