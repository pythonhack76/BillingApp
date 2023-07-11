import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Servizi from './components/Servizi';
import ChiSiamo from './components/ChiSiamo';
import Contatti from './components/Contatti';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Servizi" component={Servizi} />
        <Tab.Screen name="Chi Siamo" component={ChiSiamo} />
        <Tab.Screen name="Contatti" component={Contatti} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;