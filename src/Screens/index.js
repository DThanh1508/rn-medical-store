import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import routes from "../config/routes";


const tab = createBottomTabNavigator();

const Screens = () => {
  return (
      <NavigationContainer>
        <tab.Navigator>
          {
            routes.map((route, index)=>{
              return <tab.Screen name={route.name} component={route.component} key={index}
              options={()=> {
              return{
                  tabBarShowLabel: false,
                  tabBarIcon: () => {
                      return (route.icon)
                  }
              }
              }
              } />
            })
          }
        </tab.Navigator>
      </NavigationContainer>
  );
}

export default Screens;
