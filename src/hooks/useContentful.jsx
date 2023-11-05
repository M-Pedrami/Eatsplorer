import { createClient } from "contentful";

const useContentful = ()=> {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '4ulkrk5gvrwd',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'Ir8G84ywZJ01THkmfNcvaBT9lXkfKXnSk4ae4qeynVE',
  });
  // Writing the get function to fetch the data from the api
  const getRecipe = async () =>{
    try{
      const entries = await client.getEntries({
        content_type: 'recipe',
        select: 'fields'
      })
      return entries.items;
    

    }catch (err) {
      console.log("Maziar !!! Error from useContentful", err)
    }
  }
  return {getRecipe};
}
export default useContentful;