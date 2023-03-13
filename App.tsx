import { NavigationContainer } from '@react-navigation/native';
import DefaultStack from './src/navigators/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <DefaultStack />
    </NavigationContainer>
  );
};

export default App;
