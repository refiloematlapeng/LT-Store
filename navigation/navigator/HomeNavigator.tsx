import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import { HomeParamList } from '../../types';
import { HeaderLeftDrawer, HeaderRightOptions, HeaderTitleOptions } from './HeaderComponent';

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (<HeaderTitleOptions />),
          headerLeft: () => (<HeaderLeftDrawer navigationProps={navigation} />),
          headerRight: () => (<HeaderRightOptions navigationProps={navigation} />),
          headerTitleAlign: "center",
          headerLeftContainerStyle: {paddingLeft:'2%'},
          headerRightContainerStyle: {paddingRight:'2%'}
        }} 
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;