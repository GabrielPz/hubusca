import { RouteProp, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { WebView } from 'react-native-webview';

type ParamList = {
    RepositoryWebView: {
      url: string;
    };
  };

export default function RepositoryWebView() {
  const route = useRoute<RouteProp<ParamList, 'RepositoryWebView'>>()
  const { url } = route.params

  return (
    <WebView
      source={{ uri: url }}
    />
  );
}