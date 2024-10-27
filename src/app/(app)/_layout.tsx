import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen name="(play)" options={{ headerShown: false }} />
      <Tabs.Screen name="(explore)" options={{ headerShown: false }} />
      <Tabs.Screen name="(create)" options={{ headerShown: false }} />
      <Tabs.Screen name="(ranking)" options={{ headerShown: false }} />
      <Tabs.Screen name="(profile)" options={{ headerShown: false }} />
    </Tabs>
  );
}
