import { createClient } from "contentful";

const getAllRecipes = async (skip=0, limit=4) => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
  });
  try {
    const {total, items} = await client.getEntries({
      limit: limit,
      skip: skip,
      content_type: "recipe",
      
      
    });
    return {total, recipes: items}
  } catch (err) {
    console.log("Maziar !!! Error from useContentful", err);
    return {total: 0, recipes: []}
  }
};

export default getAllRecipes;
