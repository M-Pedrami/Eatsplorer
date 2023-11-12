import { createClient } from "contentful";

const getAllRecipes = async () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });
  try {
    const response = await client.getEntries({
      content_type: "recipe",
    });
    return response.items;
  } catch (err) {
    console.log("Maziar !!! Error from useContentful", err);
  }
};

export default getAllRecipes;
