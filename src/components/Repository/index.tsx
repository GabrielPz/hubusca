import React from 'react'
import { Container, CreatedAtDate, Description, Language, LastPushDate, Title } from './styles';
import { IRepository } from '../../shared/types';
import { formatDateToPush, formatDateToCreate } from '../../util/date.util';
import { useNavigation } from '@react-navigation/native';

interface RepositoryProps {
    repository: IRepository
}

export default function Repository({ repository }: RepositoryProps) {
  const navigation =  useNavigation()
  
  function handleRepositoryClick() {
    navigation.navigate('RepositoryWebView', {
        url: repository.html_url
    })
  }

  return (
    <Container onPress={() => handleRepositoryClick()}>
      <Title>{repository.name}</Title>
      <Description>{repository.description}</Description>
      <Language>Linguagem: {repository.language}</Language>
      <LastPushDate>Último push: {formatDateToPush(repository.pushed_at)}</LastPushDate>
      <CreatedAtDate>Criado em: {formatDateToCreate(repository.created_at)}</CreatedAtDate>
    </Container>
  )
}