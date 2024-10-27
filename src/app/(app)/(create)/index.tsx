import { Stack, Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Create() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: 'Create' }} />
      <Text className="text-center text-3xl">Create</Text>
    </View>
  );
}
