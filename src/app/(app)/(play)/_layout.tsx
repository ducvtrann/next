import { Stack } from 'expo-router';

export default function EventLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      {/* <Tabs.Screen name="explore" />
      <Tabs.Screen name="create" />
      <Tabs.Screen name="ranking" />
      <Tabs.Screen name="profile" /> */}
    </Stack>
  );
}
