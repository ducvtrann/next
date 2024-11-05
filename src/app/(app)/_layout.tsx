import { Redirect, Tabs } from 'expo-router';
import { House, PlusCircle, Search, Trophy, User } from 'lucide-react-native';
import { theme } from '@/theme/theme';
import { useAuthStore } from '@store/useAuthStore';

export default function TabLayout() {
  const { isAuthenticated } = useAuthStore();
  console.log('🚀 ~ TabLayout ~ isAuthenticated:', isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen,
      }}>
      <Tabs.Screen name="index" redirect />
      <Tabs.Screen
        name="(play)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <House size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(explore)"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(create)"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <PlusCircle size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(ranking)"
        options={{
          title: 'Ranking',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Trophy size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
