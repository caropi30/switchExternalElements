import React, { useState, useEffect } from "react";
import labels from "../constants/labels";

const {CATEGORIES} = labels;
const useData = () => {
    const [ product, setProduct ] = useState({})
    const [ productList, setProductList ] = useState([])
    const [ category, setCategory] = useState({})
    const [ categoryList, setCategoryList ] = useState([])
    const [ quantity, setQuantity ] = useState(1)

    const handleCategory = (id) => {
        console.log('click en id ', id)
    }

    return { categoryList, handleCategory}
};

export default useData;