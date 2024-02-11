import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";


const ProductScreen = ({title, data}) =>{
    return (
        <>   
            <Header title={title}/>
            {/* <CardList data={data} /> */}
        </>
    );
};

export default ProductScreen;