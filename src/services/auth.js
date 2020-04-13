
import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@NSFF-APP:token";
export const USER_ID = "@NSFF-APP:user-id";

export const onSignIn = () => AsyncStorage.setItem(TOKEN_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export function getToken() {
  try {
    const value = AsyncStorage.getItem(TOKEN_KEY)
    if (value!==null){
        return value
    }
  } catch(err){
    console.log(err)
  }
};
export const setToken = async (data) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, data)
    console.log('ok')
  }catch (err) {
    console.log('Um erro de armazenamento...',err);
  }
};

export async function getUser() {
  try {
    const value = AsyncStorage.getItem(USER_ID)
    if (value!==null){
        return value
    }
  } catch(err){
    console.log(err)
  }
};
export const setUser = async (data) => {
  try {
    await AsyncStorage.setItem(USER_ID, data)
  }catch (err) {
    console.log('Um erro de armazenamento...',err);
  }
};