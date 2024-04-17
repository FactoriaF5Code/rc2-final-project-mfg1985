package org.factoriaf5.backend.persistence;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String time;
    private String servings;
    private String tag;
    private String dishType;
    private String collection;
    private String category;
    private String ingredients;
    @Lob
    private String instructions;
    private String image;
    private String note;


    public Recipe() {
    }


    public Recipe(Long recipeId, String titleRecipe, String timeRecipe, 
    String servings, String tag, String dishType,
            String collection, String category, String ingredients,
             String instructions, String image,
            String note) {
        this.id = recipeId;
        this.title = titleRecipe;
        this.time = timeRecipe;
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


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public String getTime() {
        return time;
    }


    public void setTime(String time) {
        this.time = time;
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


    public String getImage() {
        return image;
    }


    public void setImages(String image) {
        this.image = image;
    }


    public String getNote() {
        return note;
    }


    public void setNote(String note) {
        this.note = note;
    }

    

}
