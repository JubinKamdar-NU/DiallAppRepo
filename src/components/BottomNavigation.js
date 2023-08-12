import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import WatchScreen from './WatchPage';
import SearchScreen from './SearchPage';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
            
            tabBarActiveTintColor: 'white', 
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle: {
                fontSize: 16, 
                fontWeight:"bold"
              },
    
            tabBarStyle: {
              backgroundColor: '#3498db', 
              borderTopColor: 'transparent', 
              height:70
            },
          })}
  
      >
        <Tab.Screen name="Watch" component={WatchScreen} />
        <Tab.Screen name="Ask" component={SearchScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
