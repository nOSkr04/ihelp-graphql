import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from 'react-native';
import { persistor, store } from "./src/store";
import Navigation from './src/navigation/navigation-container';
const App = () => {
  return (
    <Provider store={store}>
       
        <PersistGate persistor={persistor}>
            <GestureHandlerRootView style={styles.container}>
              <SafeAreaProvider>
                <Navigation 
                // colorScheme={colorScheme}
                />
                <StatusBar />
              </SafeAreaProvider>
            </GestureHandlerRootView>
        </PersistGate>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})