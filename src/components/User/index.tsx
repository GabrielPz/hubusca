import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Alert } from 'react-native';
import { deleteUser } from '../../service/storage';
import { IUser } from '../../shared/types';

import Ionicons from '@expo/vector-icons/Ionicons'

import { Avatar, Container, Name, Username, Location, Info, FollowersNumber, DeleteButton, ButtonContent } from './styles';
import theme from '../../config/theme';

interface UserProps {
    user: IUser
    detailed?: boolean
    showDeleteButton?: boolean
    listUsers?: () => void
}

 

export default function User({ user, detailed = false, showDeleteButton = false, listUsers }: UserProps) {
  const name = `${user.name} ${detailed ? `- ${user.id}` : ''}` 

  const navigation = useNavigation()

  function handleUserClick(user: IUser) {
    navigation.navigate('UserDetail', {
        user
    })
  }

  async function handleConfirmDeleteUser() {
    Alert.alert("Certeza que deseja excluir do Histórico?", "Essa ação não pode ser revertida", [
      {
        text: "Não",
        style: 'cancel',
      },
      {
        text: "Sim",
        style: 'default',
        onPress: handleDeleteUser
      }
    ])
  }

  async function handleDeleteUser(){
    await deleteUser(user)
    if(listUsers){
       listUsers()
    }
  }

  function renderDeleteButton() {
    if (showDeleteButton) {
      return <DeleteButton onPress={handleConfirmDeleteUser}>
        <Ionicons name='trash-bin' size={24} color={theme.colors.text}/>
      </DeleteButton>
    }
  }

  return (
    <Container onPress={() => handleUserClick(user)}>
        <Avatar source={{ uri: user.avatar_url }}/>
      <Info>
        <Name>{name}</Name>
        <Username>{user.login}</Username>
        <Location>{user.location}</Location>
        {detailed && <FollowersNumber>{user.followers} seguidores</FollowersNumber>}
      </Info>
      {renderDeleteButton()}
    </Container>
  )
}