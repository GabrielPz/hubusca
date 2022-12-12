import styled from 'styled-components/native';
import theme from '../../config/theme';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding: ${Constants.statusBarHeight + 20}px 16px 0px 16px;
`;

export const PublicReposNumber = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  margin-top: 16px;
`;
