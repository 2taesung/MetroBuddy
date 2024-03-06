import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Divider, Header, useTheme} from '@rneui/themed';

export default function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {theme} = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.colors.grey0 : theme.colors.primary,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <Header backgroundColor={theme.colors.background}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </Header>
      <Divider />
      <View style={styles.mainTopContents}>
        <Text style={styles.mainTopContentsText}>
          This is the main top content
        </Text>
      </View>
      <View style={styles.mainContents}>{/* 나머지 메인 컨텐츠 */}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between', 제거하거나 변경
    alignItems: 'center',
    paddingBottom: 20, // 하단 여백 추가
  },
  image: {
    width: 114,
    height: 14,
  },
  mainContents: {
    width: '100%', // 너비를 부모 컨테이너에 맞게 조정
    // 컨텐츠에 필요한 추가 스타일
  },
  mainTopContents: {
    height: 100,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTopContentsText: {
    // 텍스트 스타일
  },
});
