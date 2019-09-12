import React, { Component } from 'react';
import ItemList from './ItemListComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Cart from './CartComponent';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';


const CartNavigator = createStackNavigator({
 Cart: { screen: Cart },
 navigationOptions: ({ navigation }) => ({
  headerLeft: <Icon name="cart" size={24} 
  color= 'white'
  onPress={ () => navigation.toggleDrawer() } />

 })

}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor : 'steelblue'
    },
    headerTitleStyle : {
      color: "#fff"        
    },
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24} 
    color= 'white'
    onPress={ () => navigation.toggleDrawer() } /> 
    })
    
  });
  
const ItemListNavigator = createStackNavigator({
  Item: { screen: ItemList },
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Icon name="menu" size={24} 
    color= 'white'
    onPress={ () => navigation.toggleDrawer() } /> 

  })

  }, {
  navigationOptions: ({ navigation }) => ({
  headerStyle: {
      backgroundColor: "steelblue"
  },
  headerTitleStyle: {
      color: "#fff"        
  },
  headerTintColor: "#fff",
  headerLeft: <Icon name="menu" size={24} 
  color= 'white'
  onPress={ () => navigation.toggleDrawer() } /> 
  })
  });

const HomeNavigator = createStackNavigator({
Home: { screen: Home },
navigationOptions: ({ navigation }) => ({
  headerLeft: <Icon name="menu" size={24} 
  color= 'white'
  onPress={ () => navigation.toggleDrawer() } /> 

})
}, {
navigationOptions: ({ navigation }) => ({
headerStyle: {
  backgroundColor: "steelblue"
},
headerTitleStyle: {
    color: "#fff"  , 
    textAlign: 'center',
    alignSelf:'center'  
           
},
headerTintColor: "#fff",
headerLeft: <Icon name="menu" size={24}
color= 'white'
onPress={ () => navigation.toggleDrawer() } />  
})
});

const ContactNavigator = createStackNavigator({
Contact: { screen: Contact },
navigationOptions: ({ navigation }) => ({
  headerLeft: <Icon name="menu" size={24}
  color= 'white'
  onPress={ () => navigation.toggleDrawer() } /> 

})
}, {
navigationOptions: ({ navigation }) => ({
headerStyle: {
  backgroundColor: "steelblue"
},
headerTitleStyle: {
  color: "#fff"            
},
headerTintColor: "#fff" ,
headerLeft: <Icon name="menu" size={24} 
color= 'white'
onPress={ () => navigation.toggleDrawer() } />  
})
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/yuktlogo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>YUKT GROCERY STORE</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
Home: 
{ screen: HomeNavigator,
  navigationOptions: {
    title: 'Home  ',
    drawerLabel: 'Home  ',
    drawerIcon: ({ tintColor, focused }) => (
      <Icon
        name='home'
        type='font-awesome'            
        size={24}
        color={tintColor}
      />
    ),
  }
},
Item: 
{ screen: ItemListNavigator,
  navigationOptions: {
    title: 'Item List  ',
    drawerLabel: 'Item List ',
    drawerIcon: ({ tintColor, focused }) => (
      <Icon
        name='plus-square'
        type='font-awesome'            
        size={24}
        color={tintColor}
      />
    ),
  } 
},
Cart: 
{ screen: CartNavigator,
  navigationOptions: {
    title: 'Cart  ',
    drawerLabel: 'Cart  ',
    drawerIcon: ({ tintColor, focused }) => (
      <Icon
        name='shopping-cart'
        type='font-awesome'            
        size={24}
        color={tintColor}
      />
    ),
  } 
},
Contact: 
{
screen: ContactNavigator,
navigationOptions: {
  title: 'Contact Us   ',
  drawerLabel: 'Contact Us   ',
  drawerIcon: ({ tintColor, focused }) => (
    <Icon
      name='phone'
      type='font-awesome'            
      size={24}
      color={tintColor}
    />
  ),
}
}
}, {
drawerBackgroundColor: 'skyblue',
contentComponent: CustomDrawerContentComponent
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: 'steelblue',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 5,
    width: 80,
    height: 60
  },
  headerLeft : {
    paddingLeft : 5
  }

});


class Main extends Component {

render() {

return (
  <View style={{flex:10, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
       <MainNavigator />
  </View>
);
}
}

export default Main;