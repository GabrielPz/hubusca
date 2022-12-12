import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import UserDetail from '../screens/UserDetail/index';
import RepositoryWebView from '../screens/RepositoryWebView/index';
import theme from '../config/theme';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserDetail" component={UserDetail} options={{
          headerShown: true,
          title: 'Detalhes do usuário',
          headerTransparent: true,
          headerTintColor: theme.colors.text,
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="RepositoryWebView" component={RepositoryWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;