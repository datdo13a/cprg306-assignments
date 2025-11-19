"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    console.dir(data);
    return data.meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData || []);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="p-4 rounded-lg bg-gray-100 shadow-xl m-10 w-[25rem]">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Meal Ideas for {ingredient}
      </h1>

      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-3 bg-white rounded-lg shadow-sm font-semibold text-gray-700"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500">No meal ideas found for {ingredient}.</p>
      )}
    </div>
  );
}
