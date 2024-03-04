import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function MyDeck(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <View style={[styles.container, backgroundStyle]} />;
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', // 상단에 이미지, 하단에 버튼
    alignItems: 'center',
    paddingBottom: 20, // 하단 여백 추가
  },
});
