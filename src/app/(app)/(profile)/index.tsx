import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Profile' }} />
      <Text className="text-center text-3xl">Profile</Text>
    </View>
  );
}
