import { useState, useEffect } from "react";
import labels from "../constants/labels";

const { PRODUCTS } = labels;
const useData = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProductList, setFilteredProductList] = useState([]);
  
    const handleSelectedCategory = (category) => {
      setSelectedCategory(category)
    };
  
    const handleFilterProductList = () => {
      setFilteredProductList(PRODUCTS.filter(product => product.category === selectedCategory));
    };
  
    const handleProductList = () => {
      console.log('click')
    };
  
    const handleCategoryGoBack = () =>{
      setSelectedCategory('');
    };
  
    useEffect(()=> {
      handleFilterProductList()
    }, [selectedCategory])

    return {
        selectedCategory, 
        filteredProductList, 
        handleSelectedCategory, 
        handleFilterProductList, 
        handleProductList, 
        handleCategoryGoBack
    };
};

export default useData;