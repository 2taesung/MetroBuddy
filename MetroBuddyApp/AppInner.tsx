import React, {useEffect} from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
import SignIn from './src/pages/SignIn';
import Home from './src/pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './App';
import History from './src/pages/History';
import MyDeck from './src/pages/MyDeck';

// TabBarIconProps 인터페이스 정의
interface TabBarIconProps {
  focused: boolean;
  iconOn: ImageSourcePropType;
  iconOff: ImageSourcePropType;
}

// TabBarIcon 컴포넌트 정의 및 타입 적용
const TabBarIcon: React.FC<TabBarIconProps> = ({focused, iconOn, iconOff}) => (
  <Image source={focused ? iconOn : iconOff} style={{width: 20, height: 20}} />
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('!isLoggedIn', !isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="MyDeck"
            component={MyDeck}
            options={{
              tabBarIcon: props => (
                <TabBarIcon
                  {...props}
                  iconOn={require('./src/assets/ic_mydeck_on.png')}
                  iconOff={require('./src/assets/ic_mydeck_off.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: props => (
                <TabBarIcon
                  {...props}
                  iconOn={require('./src/assets/ic_home_on.png')}
                  iconOff={require('./src/assets/ic_home_off.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarIcon: props => (
                <TabBarIcon
                  {...props}
                  iconOn={require('./src/assets/ic_history_on.png')}
                  iconOff={require('./src/assets/ic_history_off.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
