import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigation";


export default class App extends React.Component{
  render(){
    return(
     <NavigationContainer>
     <DrawerNavigator />
     </NavigationContainer>
    );
  }
}