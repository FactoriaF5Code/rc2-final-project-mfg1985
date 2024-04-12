package org.factoriaf5.backend.controllers;

import java.util.List;

public class RecipeResponse {

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
    private String image;
    private String note;

    public RecipeResponse(Long recipeId, String titleRecipe, String timeRecipe, String servings, String tag,
            String dishType, String collection, String category, String ingredients, String instructions,
            String image, String note) {
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
                this.image = image;
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

    public String getImage() {
        return image;
    }

    public String getNote() {
        return note;
    }

    

}
