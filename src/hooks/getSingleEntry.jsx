import { createClient } from "contentful";

const getRecipe = async (id) => {
  const client = createClient({
    space: '4ulkrk5gvrwd',
    accessToken: 'Ir8G84ywZJ01THkmfNcvaBT9lXkfKXnSk4ae4qeynVE',
  });

  try {
    const response = await client.getEntry(id);
    return response; // Assuming you want to return the fields of the entry
  } catch (err) {
    console.log("Maziar !!! Error from getRecipe", err);
    throw err; // You might want to throw the error to handle it in your component
  }
};

export default getRecipe;
