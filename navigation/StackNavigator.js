import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomTabNavigator";
import StoryScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  
  return( 
    <StackNavigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
        }}>
        
        <Stack.Screen name="PostScreen" component={PostScreen}/>
        <Stack.Screen name="Home" component={BottomTabNavigator}/>
    </StackNavigator>
  );
};

export default StackNavigator;