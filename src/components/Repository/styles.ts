import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../config/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;

    background-color: ${theme.colors.primary_light};

    border-radius: 8px;

    padding: 16px;

    margin-top: 16px;
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};

  font-size: 20px;

  margin-bottom: 8px;
`;

export const Description = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};

  margin-bottom: 4px;
`;

export const Language = styled.Text`
  margin-top: 4px;

  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const LastPushDate = styled.Text`
  margin-top: 8px;

  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;

export const CreatedAtDate = styled.Text`
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`;
