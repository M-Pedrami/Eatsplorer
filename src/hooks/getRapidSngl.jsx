const getRapidSngl = async (id) => {
  const url =
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
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
    return result;
  } catch (err) {
    console.log("Rapid API Single Fetch:::", err);
  }
};;

export default getRapidSngl;
