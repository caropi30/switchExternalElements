import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state.productsByCategory.filter((element) => element.category === state.category);

const useGetProductsByCategory = () => {
    const productsByCategory = useSelector(mapStateToProps);
    return { productsByCategory };
};

export default useGetProductsByCategory;
