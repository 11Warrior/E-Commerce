import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const getProducts = async () => {
        try {
            const products = await axios.get('https://fakestoreapi.com/products');
            const actualData = products.data
            setData(actualData);

        } catch (error) {
            console.log(error);
        }
    }

    const getCategories = (data, property) => {
        let cat = data?.map((currCat) => (currCat[property]))
        cat = [...new Set(cat)]
        return cat;
    }

    return <DataContext.Provider value={{ data, setData, getProducts, getCategories }}>
        {children}
    </ DataContext.Provider>
}

export const useData = () => (useContext(DataContext))