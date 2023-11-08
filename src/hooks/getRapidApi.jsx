const getRapidApi = async (query) => {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=true&minAlcohol=0&minCaffeine=0&minFluoride=0&minVitaminC=0&minSelenium=0&number=5&limitLicense=true&ranking=2`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8886b3e956mshfb2db367c6afebap1bd00djsn661d03fe1e0d",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;
  } catch (err) {
    console.log("Ninja API", err);
  }
};

export default getRapidApi;