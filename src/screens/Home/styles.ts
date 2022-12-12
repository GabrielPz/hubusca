import styled from "styled-components/native";
import theme from "../../config/theme";
import LottieView from "lottie-react-native";

import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding: ${Constants.statusBarHeight + 20}px 16px 0px 16px;
`;

export const HomeButton = styled.TouchableOpacity`
  width:32px;
  height: 32px;
  border-radius: 8px;
  background-color: green;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Header = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const HomeButtonContent = styled.Text`

`;

export const Text = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.primary_light};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  font-size: ${16}px;

  margin-top: 16px;
  margin-bottom: 32px;

  height: ${RFValue(42)}px;

  border-radius: 8px;

  padding: 16px 16px 16px 16px;
`;
