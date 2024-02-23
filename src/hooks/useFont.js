import { useFonts } from "expo-font";

const useFont = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat-VariableFont': require('./../../assets/fonts/Montserrat-VariableFont_wght.ttf')
    });

    return {
        fontsLoaded
    };

};

export default useFont;