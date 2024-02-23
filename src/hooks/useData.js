import { useState, useEffect } from "react";
import labels from "../constants/labels";

const { PRODUCTS } = labels;
const useData = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category)
    };

    const handleProduct = (product) => {
        setSelectedProduct(product)
    };

    const handleFilterProductList = (category) => {
        setFilteredProductList(PRODUCTS.filter(product => product.category === selectedCategory));
    };

    const handleProductList = () => {
        console.log('click')
    };

    const handleCategoryGoBack = () => {
        setSelectedCategory('');
    };

    useEffect(() => {
        handleFilterProductList()
    }, [selectedCategory])

    return {
        selectedCategory,
        selectedProduct,
        filteredProductList,
        setFilteredProductList,
        handleSelectedCategory,
        handleFilterProductList,
        handleProductList,
        handleCategoryGoBack,
        handleProduct,
    };
};

export default useData;