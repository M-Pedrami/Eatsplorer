export default async function getWidget(id) {
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.png`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8886b3e956mshfb2db367c6afebap1bd00djsn661d03fe1e0d',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming the response is a binary image
    const result = await response.blob();
    return URL.createObjectURL(result); // Convert blob to a URL

  } catch (error) {
    console.error(error);
  }
}
