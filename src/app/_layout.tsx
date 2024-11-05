import '../../global.css';
import { Stack } from 'expo-router';
import { useAuthListener } from '@/store/useAuthStore';
export default function RootLayout() {
  useAuthListener();
  
  return (
    <Stack>
      <Stack.Screen name="(app)" options={{ headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false, animation: 'fade' }} />
    </Stack>
  );
}
