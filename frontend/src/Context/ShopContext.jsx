/**
 * Context provider for the shop that provides access to products, currency, delivery fee,
 * search state, and functions to update search state.
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} A context provider component that wraps its children with the shop context.
 */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '₹';
    const delivery_fee = 10;

    const [search, setSearch]=useState('');
    const[showSearch, setShowSearch]=useState(false);


    const value ={
        products, currency,delivery_fee,
        search, setSearch,showSearch, setShowSearch
    }
    return(
        <ShopContext.Provider value={value}>
                {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;