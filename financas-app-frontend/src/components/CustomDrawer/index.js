import React, {useContext} from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

import { View, Image, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props){
    const { user , signOut} = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 20 }}>
                <Image 
                    source={require('../../assets/Logo.png')} 
                    style={{width:90, height:90}}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 20, color: '#121212', marginTop:14}}>
                    Bem vindo,
                </Text>
                <Text 
                    style={{ fontSize: 20, fontWeight: 'bold', color: '#121212', paddingHorizontal:20, }}
                    numberOfLines={1}
                >
                    {user && user.name}
                </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                {...props}
                label="Sair da conta"
                onPress={() => signOut()}
                inactiveBackgroundColor="transparent"
                inactiveTintColor="#c62c36"
                style={{ borderWidth: 1, borderColor: "#c62c36", marginTop:50, borderRadius: 10, borderTopWidth: 1}}
            />
        </DrawerContentScrollView>
    );
}