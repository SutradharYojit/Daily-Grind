import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../view/splash/splash_screen';
import { RoutesName } from '../routes/routes_name';
import OnBoardingScreen from '../view/onboarding/onboarding_screen';
import LoginScreen from '../view/auth/login/login_screen';
import SingUpScreen from '../view/auth/signup/signup_screen';
import OTPScreen from '../view/auth/otp/otp_screen';
import ComepleAuthScreen from '../view/auth/otp/complete_auth_screen';
import DashboardScreen from '../view/dashboard/dashboard';
import ForgetPassScreen from '../view/auth/forget_pass/forget_pass_screen';
import NewPasswordScreen from '../view/auth/forget_pass/create_new_pass_screen';

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
            headerShown: false,
          }}
          component={LoginScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.signupScreen}
          options={{
            title: ''
          }}
          component={SingUpScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.forgetPassScreen}
          options={{
            title: ''
          }}
          component={ForgetPassScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.newPassScreen}
          options={{
            title: ''
          }}
          component={NewPasswordScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.otpScreen}
          options={{
            title: ''
          }}
          component={OTPScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.completeAuthScreen}
          options={{
            headerShown: false,
          }}
          component={ComepleAuthScreen}>
        </ScreenStack.Screen>
        <ScreenStack.Screen
          name={RoutesName.dashboardScreen}
          options={{
            headerShown: false,
          }}
          component={DashboardScreen}>
        </ScreenStack.Screen>
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
