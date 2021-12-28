import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './screens/Home';
import Rescue from './screens/Rescue';

export default function Routes(){
  return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Rescue" component={Rescue} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}