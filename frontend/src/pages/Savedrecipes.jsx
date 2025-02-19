import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const SavedRecipes = () => {
    const navigate = useNavigate();
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(recipes);
  }, []);
  
  const handleDelete = (index) => {
    let updatedRecipes = [...savedRecipes];
    updatedRecipes.splice(index, 1);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    setSavedRecipes(updatedRecipes);
  };
  
  const handleEdit = (recipe) => {
    localStorage.setItem("editRecipe", JSON.stringify(recipe));
    navigate("/editrecipe");
};

  

  return (
    <div className='container-fluid'>
      <h2>Saved Recipes</h2>
      <div className="row">
        {savedRecipes.length === 0 ? (
          <p>No saved recipes yet.</p>
        ) : (
          savedRecipes.map((recipe, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                {recipe.imageUrl && (
                  <img src={recipe.imageUrl} className="card-img-top" alt={recipe.name} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
                  <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                  <p><strong>Instructions:</strong> {recipe.instructions}</p>
                  <button 
                    className="btn btn-primary me-2" 
                    onClick={() => handleEdit(recipe)}
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleDelete(index)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;
