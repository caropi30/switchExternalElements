import { useState, useEffect } from "react";
import labels from "../constants/labels";

const { PRODUCTS } = labels;
const useData = () => {
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');

    return {
        category,
        setCategory,
        product,
        setProduct
    };
};

export default useData;