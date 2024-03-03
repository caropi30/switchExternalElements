import 'react-native-gesture-handler';
import TabNavigation from './src/navigation/TabNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <TabNavigation />
        </Provider>
    );
};

export default App;