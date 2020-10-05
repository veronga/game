import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ListPlayers from '../screens/ListPlayers';
import Game from '../screens/Game';
import Punishment from '../screens/Punishment';
import Questions from '../screens/Questions';
import ResultTable from '../screens/ResultTable';
import StartGame from '../screens/StartGame';

const Stack = createStackNavigator();

function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="ListPlayers" component={ListPlayers} />
          <Stack.Screen name="StartGame" component={StartGame} />
          <Stack.Screen name="Questions" component={Questions} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Punishment" component={Punishment} />
          <Stack.Screen name="ResultTable" component={ResultTable} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;
