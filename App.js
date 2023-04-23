import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native'
export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-red-500">Lets start</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TailwindProvider>
  );
}