import { NavigationContainer} from "@react-naviagtion/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/HomeScreen";
import About from "./screens/About";
 "./screens/Home";

export default function app(){

   const Stack =  createNativeStackNavigator() 
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen  name="About" component={About} />
        </Stack.Navigator> 

        </NavigationContainer>
    )
}