import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./src/Store/Store";
import StackNavigation from "./src/Navigation/StackNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {


  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}