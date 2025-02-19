import React, { useState } from "react";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [""], // Start with one ingredient input
    instructions: "",
    imageUrl: "",
    cookingTime: "",
  });

  const handleChange = (e, index = null) => {
    if (index !== null) {
      // Update specific ingredient
      const newIngredients = [...recipe.ingredients];
      newIngredients[index] = e.target.value;
      setRecipe({ ...recipe, ingredients: newIngredients });
    } else {
      setRecipe({ ...recipe, [e.target.name]: e.target.value });
    }
  };

  const addIngredientField = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve existing recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    
    // Save new recipe
    localStorage.setItem("recipes", JSON.stringify([...savedRecipes, recipe]));
    
    alert("Recipe added successfully!");
    setRecipe({
      name: "",
      description: "",
      ingredients: [""],
      instructions: "",
      imageUrl: "",
      cookingTime: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input type="text" className="form-control" name="name" value={recipe.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={recipe.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="d-flex mb-2">
              <input type="text" className="form-control me-2" value={ingredient} onChange={(e) => handleChange(e, index)} required />
            </div>
          ))}
          <button type="button" className="btn btn-secondary mt-2" onClick={addIngredientField}>+ Add Ingredient</button>
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea className="form-control" name="instructions" value={recipe.instructions} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" name="imageUrl" value={recipe.imageUrl} onChange={handleChange} required />
          {recipe.imageUrl && <img src={recipe.imageUrl} alt="Recipe" className="img-fluid mt-2" style={{ maxWidth: "200px" }} />}
        </div>

        <div className="mb-3">
          <label className="form-label">Cooking Time (in minutes)</label>
          <input type="number" className="form-control" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
