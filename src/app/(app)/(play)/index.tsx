import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Play() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Play' }} />
      <Text className="text-center text-3xl">Events</Text>
      <Link href="/events/eventId">Go to Event Details</Link>
    </View>
  );
}
