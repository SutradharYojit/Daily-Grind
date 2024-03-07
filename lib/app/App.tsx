
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../view/splash/splash_screen';
import { RoutesName } from '../routes/routes_name';
import OnBoardingScreen from '../view/onboarding/onboarding_screen';
import LoginScreen from '../view/auth/login/login_screen';


function App(): React.JSX.Element {
  const ScreenStack = createNativeStackNavigator();
  // Set the default font family


  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen
          name={RoutesName.splashScreen}
          options={{
            headerShown: false,
          }}
          component={SplashScreen}>
        </ScreenStack.Screen>

        <ScreenStack.Screen
          name={RoutesName.onBoardingScreen}
          options={{
            headerShown: false,
          }}
          component={OnBoardingScreen}>
        </ScreenStack.Screen>

        <ScreenStack.Screen
          name={RoutesName.loginScreen}
          options={{
            title: ''
          }}
          component={LoginScreen}>
        </ScreenStack.Screen>

      </ScreenStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
