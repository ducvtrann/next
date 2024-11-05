import { Stack, Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useAuthStore } from '@store/useAuthStore';

export default function Play() {
  const { signOut } = useAuthStore();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Play' }} />
      <Text className="text-center text-3xl">Events</Text>
      <Link href="/events/eventId">Go to Event Details</Link>
      <Pressable onPress={signOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}
