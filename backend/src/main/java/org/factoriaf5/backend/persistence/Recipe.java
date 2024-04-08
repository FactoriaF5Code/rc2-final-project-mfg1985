package org.factoriaf5.backend.persistence;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private List<String> images; // Assuming a list of image URLs
    private String note;


    public Recipe() {
    }


    public Recipe(Long recipeId, String titleRecipe, String timeRecipe, 
    String servings, String tag, String dishType,
            String collection, String category, String ingredients,
             String instructions, List<String> images,
            String note) {
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
    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
    }
    

    public String getTitleRecipe() {
        return titleRecipe;
    }
    public void setTitleRecipe(String titleRecipe) {
        this.titleRecipe = titleRecipe;
    }


    public String getTimeRecipe() {
        return timeRecipe;
    }
    public void setTimeRecipe(String timeRecipe) {
        this.timeRecipe = timeRecipe;
    }


    public String getServings() {
        return servings;
    }
    public void setServings(String servings) {
        this.servings = servings;
    }
    public String getTag() {
        return tag;
    }


    public void setTag(String tag) {
        this.tag = tag;
    }
    public String getDishType() {
        return dishType;
    }


    public void setDishType(String dishType) {
        this.dishType = dishType;
    }
    public String getCollection() {
        return collection;
    }


    public void setCollection(String collection) {
        this.collection = collection;
    }
    public String getCategory() {
        return category;
    }


    public void setCategory(String category) {
        this.category = category;
    }
    public String getIngredients() {
        return ingredients;
    }


    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
    public String getInstructions() {
        return instructions;
    }


    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
    public List<String> getImages() {
        return images;
    }


    public void setImages(List<String> images) {
        this.images = images;
    }
    public String getNote() {
        return note;
    }


    public void setNote(String note) {
        this.note = note;
    }
}
