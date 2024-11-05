import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'session',
});

/**
 * Get an item from storage by key
 *
 * @param {string} key of the item to fetch
 * @returns {Promise<string | null>} value for the key as a string or null if not found
 */
export async function getItem(key: string): Promise<string | null> {
  try {
    return storage.getString(key) ?? null;
  } catch {
    console.warn(`Failed to get key "${key}" from secure storage`);
    return null;
  }
}

/**
 * Sets an item in storage by key
 *
 * @param {string} key of the item to store
 * @param {string} value of the item to store
 */
export async function setItem(key: string, value: string): Promise<void> {
  try {
    storage.set(key, value);
  } catch {
    console.warn(`Failed to set key "${key}" in secure storage`);
  }
}

/**
 * Removes a single item from storage by key
 *
 * @param {string} key of the item to remove
 */
export async function removeItem(key: string): Promise<void> {
  try {
    storage.delete(key);
  } catch {
    console.warn(`Failed to remove key "${key}" from secure storage`);
  }
}
