import { createClient } from "contentful";

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
