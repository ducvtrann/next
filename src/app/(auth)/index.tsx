import React, { useState } from 'react';
import { supabase } from '@/utils/supabase';
import { Text, StyleSheet, View, SafeAreaView, Alert, Button, TextInput } from 'react-native';
import { useAuthStore } from '@store/useAuthStore';
import { Redirect, useRouter } from 'expo-router';

export default function signInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signIn, signUp, isAuthenticated } = useAuthStore();
  console.log('🚀 ~ signInScreen ~ isAuthenticated:', isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href="/(app)/(play)" />;
  }

  const handlesignIn = async () => {
    try {
      const result = await signIn(email, password);
      console.log(result);
      router.replace('/(app)/(play)');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>signIn</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handlesignIn} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'blue',
    marginTop: 10,
  },
});
