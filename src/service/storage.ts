import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../shared/types';

const APP_ROOT_FLAG = '@hubusca/'

const HISTORY_KEY = 'history'

const FULL_HISTORY_KEY = APP_ROOT_FLAG + HISTORY_KEY

export async function storeUser(user: IUser) {
    try {
        const history = await fetchUsers()

        if (history) {
            const alreadyExist = history.find(data => data.id === user.id)

            if (alreadyExist) return

            await AsyncStorage.setItem(FULL_HISTORY_KEY, JSON.stringify([...history, user]))
        } else {
            await AsyncStorage.setItem(FULL_HISTORY_KEY, JSON.stringify([user]))
        }
      } catch (error) {
        throw error
      }
}

export async function fetchUsers(): Promise<IUser[] | null> {
    try {
        const data = await AsyncStorage.getItem(FULL_HISTORY_KEY)
        if (data) {
            return JSON.parse(data)
        }

        return null
    } catch (error) {
        throw error
    }
}

export async function deleteUser(user: IUser){
    try {
        const userList = await fetchUsers();
         const updatedList = userList?.filter((_user) => _user.id !== user.id)
        if(updatedList){
            await AsyncStorage.setItem(FULL_HISTORY_KEY, JSON.stringify(updatedList))
        }

        
    } catch (error) {
        throw error
        
    }
}

