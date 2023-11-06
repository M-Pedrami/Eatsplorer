import { createClient } from "contentful";


/* The parameter passed in the async function can be anything e.g. cucumber as long as it matches the one passed in the getEntry method below. It is a place holder that indicates something (in this case an ID will be provided. Also it does not have anything to do with the {ID} param used in the Route (Home Component) and the Link(RecipeCard Component) */

const getRecipe = async (id) => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntry(id);
    return response; 
  } catch (err) {
    console.log("Maziar !!! Error from getRecipe", err);
    throw err; 
  }
};

export default getRecipe;
