import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Ranking() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Ranking' }} />
      <Text className="text-center text-3xl">Ranking</Text>
    </View>
  );
}
