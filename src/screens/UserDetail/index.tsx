import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Container, PublicReposNumber } from './styles'
import { IUser, IRepository } from '../../shared/types';
import User from '../../components/User';
import { listRepositoriesByUser } from '../../service/api';
import { ActivityIndicator, FlatList } from 'react-native';
import Repository from '../../components/Repository';

type ParamList = {
    UserDetail: {
      user: IUser;
    };
  };

export default function UserDetail() {
  const route = useRoute<RouteProp<ParamList, 'UserDetail'>>()
  const [repositories, setRepositories] = useState<IRepository[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const { user } = route.params;

  useEffect(() => {
    loadRepositories()
  }, [])

  async function loadRepositories() {
    if (loading) return;

    setLoading(true)

    const response = await listRepositoriesByUser(user.login, page, 50)

    setRepositories(oldRepositories => [...oldRepositories, ...response])

    setLoading(false)
    setPage(page => page + 1)
  }

  function renderFooter() {
    if (!loading) return null;
    return (
        <ActivityIndicator />
    );
  };


  return (
    <Container>
        <User 
          user={user} 
          detailed 
        />

        <PublicReposNumber>{user.public_repos} repositórios públicos</PublicReposNumber>

        <FlatList
          data={repositories}
          renderItem={({item}) => <Repository repository={item} />}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadRepositories}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
    </Container>
  )
}