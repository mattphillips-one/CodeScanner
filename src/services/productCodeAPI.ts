/*
 Problems:
 - Needs a better UPC lookup API (that is cheaper than this one)
*/

export const getProduct = async (code: string) => {
  const url = `https://big-product-data.p.rapidapi.com/gtin/${code}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.EXPO_PUBLIC_PRODUCT_API_KEY}`,
      'x-rapidapi-host': `${process.env.EXPO_PUBLIC_PRODUCT_API_HOST}`
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};