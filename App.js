import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useIsDrawerOpen, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const isDrawerOpen = useIsDrawerOpen();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {{fontSize:40}}>{isDrawerOpen}</Text>
      <Text style = {{fontSize:40}}>Home</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button onPress={() => navigation.openDrawer()} title="OpenDrawer" />
      <Button onPress={() => navigation.closeDrawer()} title="CloseDrawer" />
      <Button onPress={() => navigation.toggleDrawer()} title="ToggleDrawer" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style = {{fontSize:40}}>Notification</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Text>Sagar</Text>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
