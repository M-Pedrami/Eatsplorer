const getRecipeNinja = async (query) => {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8886b3e956mshfb2db367c6afebap1bd00djsn661d03fe1e0d",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
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

export default getRecipeNinja;