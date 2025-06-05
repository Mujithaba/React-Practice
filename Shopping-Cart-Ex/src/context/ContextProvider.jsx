import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

export default function ShoppingCartContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const fetchListOfProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    if (result && result?.products) {
      setListOfProducts(result?.products);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);

  function handleCartData(getProductDetails) {
    const copyExistingCartItems = [...cartItems];
    const findCartItemIndex = copyExistingCartItems.findIndex(
      (cartData) => cartData.id === getProductDetails.id
    );

    if (findCartItemIndex === -1) {
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
          console.log("its coming here");
      copyExistingCartItems[findCartItemIndex] = {
        ...copyExistingCartItems[findCartItemIndex],
        quantity: copyExistingCartItems[findCartItemIndex].quantity + 1,
        totalPrice:
          (copyExistingCartItems[findCartItemIndex].quantity + 1) *
          copyExistingCartItems[findCartItemIndex].price,
      };
    }
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));

    navigate("/cart");
  }
console.log(...cartItems,"ooo");
console.log(cartItems,"p");

    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
    } else {
      cpyExistingCartItems[findIndexOfCurrentCartItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentCartItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
          cpyExistingCartItems[findIndexOfCurrentCartItem].price,
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleCartData,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
