import styled from 'styled-components/native';
import theme from '../../config/theme';

export const Container = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;

  width: 100%;

  background-color: ${theme.colors.primary_light};

  border-radius: 8px;

  padding: 16px;

  margin-top: 24px;
`;

export const Info = styled.View`
  flex-direction: column;
  flex: 1;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  margin-right: 8px;
`;

export const Name = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};

  margin-bottom: 4px;
`;

export const Username = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const Location = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;
export const ButtonContent = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
  
  
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const FollowersNumber = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const PublicReposNumber = styled.Text``;

