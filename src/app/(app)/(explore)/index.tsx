import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Explore() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Explore' }} />
      <Text className="text-center text-3xl">Explore</Text>
      <Link href="/court/courtId">Go to Court Details</Link>
    </View>
  );
}
