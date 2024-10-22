import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Play() {
  return (
    <View className="flex bg-red-500">
      <Stack.Screen options={{ title: 'Play' }} />
      <Text className="text-center text-3xl">Hello world</Text>
    </View>
  );
}
