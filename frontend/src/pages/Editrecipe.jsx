import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Editrecipe = () => {
  const navigate = useNavigate();
  
  // ✅ Declare state before useEffect
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipe = JSON.parse(localStorage.getItem("editRecipe"));
    if (storedRecipe) {
      setRecipe(storedRecipe);
    } else {
      console.log("Recipe not found, redirecting...");
      navigate("/savedrecipes"); // Redirect if no recipe is found
    }
  }, [navigate]);

  // ✅ Prevent rendering if recipe is still null
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  const handleSave = () => {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const index = savedRecipes.findIndex((r) => r.name === recipe.name);
    if (index !== -1) {
      savedRecipes[index] = recipe;
    }
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    alert("Recipe updated!");
    navigate("/savedrecipes");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Recipe</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeIngredient(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mt-2" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
          />
          {recipe.imageUrl && (
            <img src={recipe.imageUrl} alt="Dish" className="img-fluid mt-2" style={{ maxWidth: "300px" }} />
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Cooking Time (mins)</label>
          <input
            type="number"
            className="form-control"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Editrecipe;
