import { useSelector } from 'react-redux';

const mapStateToProps = (state) => {
    const categories = new Set();
    state.category.forEach((element) => {
        categories.add(element.category);
    });
    return Array.from(categories);
};

const useGetCategories = () => {
    const categories = useSelector(mapStateToProps);
    console.log('categories', categories);
    return { categories };
};

export default useGetCategories;
