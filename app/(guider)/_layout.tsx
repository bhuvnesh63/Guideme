import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
      <Stack>
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
          <Stack.Screen name="guidersignUp" options={{ headerShown: false }} />
          <Stack.Screen name="guidersignUpPer" options={{ headerShown: false }} />
          <Stack.Screen name="guiderSignin" options={{ headerShown: false }} />
          {/* Include other screens if necessary */}
      </Stack>
  );
}
