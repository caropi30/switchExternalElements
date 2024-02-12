import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";


const ProductScreen = ({title, goBack, data, cardOnPress}) =>{
    return (
        <>   
            <Header title={title} goBack={goBack}/>
            <CardList data={data} cardOnPress={cardOnPress}/>
        </>
    );
};

export default ProductScreen;