import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./src/Store/Store";
import StackNavigation from "./src/Navigation/StackNavigation";

export default function App() {


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </Provider>
  );
}