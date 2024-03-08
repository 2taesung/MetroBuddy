import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

export default function SignIn(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };

  const onSubmit = useCallback(() => {
    console.log('onSubmit');
    dispatch(
      userSlice.actions.setUser({
        name: '이태성',
        email: 'dlxotjde@gmail.com',
        accessToken: '1',
      }),
    );
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[styles.container, backgroundStyle]}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginButtonText}>카카오로 시작하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
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
  loginButton: {
    backgroundColor: '#FFE300',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
    width: '90%',
  },
  loginButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});
