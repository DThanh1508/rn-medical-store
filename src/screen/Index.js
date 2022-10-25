import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import routes from "../config/routes";


const tab = createBottomTabNavigator();

const Index = () => {
  return (
      <NavigationContainer>
        <tab.Navigator>
          {
            routes.map((route, index)=>{
              return <tab.Screen name={route.name} component={route.component} key={index} />
            })
          }
        </tab.Navigator>
      </NavigationContainer>
  );
}

export default Index;
