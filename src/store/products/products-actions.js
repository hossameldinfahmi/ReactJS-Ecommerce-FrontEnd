import { productActions } from "./products-slice";

export const fetchProducts = (url) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        // `${process.env.REACT_APP_BASE_API_URL}/products/`
        url
      );

      if (!response.ok) {
        throw new Error("Could not fetch products from DB");
      }

      const data = await response.json();
      return data;
    };

    try {
      const productsData = await fetchData();
      dispatch(
        productActions.replaceProducts({
          items: productsData.results || [],
          isLoading: false,
          next: productsData.next,
          previous: productsData.previous,
        })
      );
    } catch (error) {
      throw new Error("Products not feched corerctly");
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/categories/`
      );

      if (!response.ok) {
        throw new Error("Could not fetch categories from DB");
      }

      const data = await response.json();
      return data;
    };

    try {
      const categories = await fetchData();
      dispatch(
        productActions.getcategories({
          categories: categories.results || [],
          isLoading: false,
        })
      );
    } catch (error) {
      throw new Error("categories not feched corerctly");
    }
  };
};
