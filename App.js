import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Cartoes from "./src/screens/Cartoes";
import Home from "./src/screens/Home";
import Extrato from "./src/screens/Extrato";
import Dicas from "./src/screens/Dicas";
import CriarConta from "./src/screens/CriarConta";
import Login from "./src/screens/Login";
import Analise from "./src/screens/Analise";

const DrawerNavigation = createDrawerNavigator({
  Home: Home,
  Login:Login,
  CriarConta:CriarConta,
  Cartoes: Cartoes,
  Extrato: Extrato,
  Dica: Dicas,
  Analise: Analise
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login:Login,
    CriarConta:CriarConta,
    Home: Home,
    Cartoes: Cartoes,
    Extrato: Extrato,
    Dicas: Dicas,
    Analise: Analise
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "trebuchet-ms-regular": require("./src/assets/fonts/trebuchet-ms-regular.ttf"),
      "michroma-regular": require("./src/assets/fonts/michroma-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
