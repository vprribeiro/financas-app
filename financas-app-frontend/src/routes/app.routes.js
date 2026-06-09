import React , { useContext }from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

import { View, Text } from "react-native";


import Home from '../pages/Home'
import New from '../pages/New'
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";
import { AuthContext } from "../contexts/auth";

const AppDrawer = createDrawerNavigator()

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerContent={(props)=> <CustomDrawer{...props}/>}
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor:'#FFF',
                    paddingTop:20,
                },

                drawerActiveBackgroundColor:'#3b3dbf',
                drawerActiveTintColor:'#FFF',

                drawerInactiveBackgroundColor:'#F0F2FF',
                drawerInactiveTintColor:'#121212',

                drawerItemStyle:{
                    marginBottom:10,
                    borderRadius:10,
                }
            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />

            <AppDrawer.Screen
                name="Registrar"
                component={New}
            />

            <AppDrawer.Screen
                name="Meu perfil"
                component={Profile}
            />

        </AppDrawer.Navigator>
    )
}

export default AppRoutes;