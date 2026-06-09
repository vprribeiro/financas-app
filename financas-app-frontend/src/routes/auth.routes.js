import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle: 'Voltar',
                    headerTintColor:'#f0f0f0',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: '#3B3DBF',
                    },
                    
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;