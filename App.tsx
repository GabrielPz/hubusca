import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';

import Toast from 'react-native-toast-message';

import Home from './src/screens/Home';

import {
  useFonts,
  NanumGothicCoding_400Regular,
  NanumGothicCoding_700Bold
} from '@expo-google-fonts/nanum-gothic-coding'
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    NanumGothicCoding_400Regular,
    NanumGothicCoding_700Bold,
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
      <StackNavigation />
      <StatusBar style="light" />
      <Toast />
    </>
  );
}
