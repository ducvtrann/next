import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function EventDetails() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Event Id' }} />
      <Text className="text-center text-3xl">Event Detail</Text>
    </View>
  );
}
