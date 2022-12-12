import React, { useEffect, useState } from 'react'

import { Container, Text, Body, Animation, Input, HomeButton, HomeButtonContent, Header } from './styles'

import Ionicons from '@expo/vector-icons/Ionicons'

import Toast from 'react-native-toast-message'

import NotFoundAnimation from '../../assets/animations/not-found.json'
import theme from '../../config/theme'
import { showUser } from '../../service/api'
import Constants from 'expo-constants';
import { IUser } from '../../shared/types';
import User from '../../components/User'
import { ScrollView } from 'react-native'
import { fetchUsers, storeUser } from '../../service/storage'
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const [username, setUsername] = useState('')
    const [history, setHistory] = useState<IUser[]>([])
    const [user, setUser] = useState<IUser | null>()
    
    const navigation = useNavigation()

    function HandleHomeButtonClick(){
        setUser(null);
        listUsers();
    }

    useEffect(() => {
        listUsers();
    }, [])

    function listUsers() {
        fetchUsers()
            .then(users => {
                if (Array.isArray(users)) {
                    setHistory(users)
                }
            })
    }

    function fetchUser() {
        if (!username.trim()) return

        showUser(username)
            .then((response) => {
                setUser(response)
                storeUser(response)
            })
            .catch(() => {
                setUser(null)

                Toast.show({
                    autoHide: true,
                    text1: 'Usuário não encontrado ☹️',
                    visibilityTime: 4000,
                    type: 'error',
                    topOffset: Constants.statusBarHeight
                })
            })
            .finally(() => {
                setUsername('')
            })
    }

    function renderContentTitle() {
        if (hasUserLoaded) return 'Resultado'

        if (history.length) return 'Recentes'
    }

    function renderSearchResult() {
        if (hasUserLoaded) {
            return <User user={user} />
        }
    }

    function renderEmptyAnimation() {
        if (!hasUserLoaded && !history.length) {
            return <Animation
                autoPlay
                source={NotFoundAnimation}
            />
        }
    }

    function renderHistory() {
        if (!hasUserLoaded && history.length) {
            return history.map((searchHistory) => (
                <User 
                    key={searchHistory.id} 
                    user={searchHistory} 
                    showDeleteButton 
                    listUsers={listUsers}
                />
            ))
        }
    }

    const hasUserLoaded = !!user

    const contentTitle = renderContentTitle()

    return (
        <Container>
            <Header>
                <Text>Buscar desenvolvedor</Text>
                {user && <Ionicons name='arrow-back' size={24}  onPress={HandleHomeButtonClick} color={theme.colors.text}/>}
            </Header>
            <Input
                placeholder='Ex. GabrielPz'
                placeholderTextColor={theme.colors.text}
                autoFocus
                autoCorrect={false}
                autoCapitalize={'none'}
                returnKeyLabel='Buscar'
                returnKeyType='search'
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={fetchUser}
            />

            {hasUserLoaded || history.length ? <Text>{contentTitle}</Text> : null}
            <Body>
                <ScrollView 
                    style={{ width: '100%', flex: 1 }} 
                    contentContainerStyle={{ 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                }}>
                    {renderSearchResult()}
                    {renderEmptyAnimation()}
                    {renderHistory()}
                </ScrollView>
            </Body>

        </Container>
    )
}