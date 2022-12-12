import { lighten } from "polished";

export default {
  colors: {
    primary: '#000',
    primary_light: lighten(0.095, '#000'),

    secondary: '#fff',
    secondary_light: 'rgba(255, 135, 44, 0.3)',

    success: 'rgb(29, 161, 160)',
    success_light: 'rgb(29, 161, 160, 0.5)',

    attention_light: 'rgba(232, 63, 91, 0.5)',

    input_background: 'rgba(255, 255, 255, 0.2)',

    loader_foreground: '#fff',

    shape: '#ffffff',
    title: 'rgba(255, 255, 255, 0.6)',
    text: '#f0f2f5',
    text_dark: '#000',
    background: '#f0f2f5'
  },
  fonts: {
    regular: 'NanumGothicCoding_400Regular',
    bold: 'NanumGothicCoding_700Bold'
  }
}