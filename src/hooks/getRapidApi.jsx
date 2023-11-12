const getRapidApi = async (query, offset) => {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=true&minAlcohol=0&minCaffeine=0&minFluoride=0&minVitaminC=0&minSelenium=0&number=9&limitLicense=true&ranking=2&offset=${offset}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RAPIDAPI_HOST,
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log("Ninja API", err);
  }
};

export default getRapidApi;