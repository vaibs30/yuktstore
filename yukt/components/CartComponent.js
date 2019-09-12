import React, {Component} from 'react';
import { View, FlatList, StyleSheet, TextInput} from 'react-native';
import { ListItem, Text, Left, Body, Right, List, Thumbnail, Form, Picker, Icon, Item,  Button, Input, Label } from 'native-base';
import { GROCERIES } from '../shared/groceries';
import { baseUrl } from '../shared/baseUrl';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: GROCERIES
        };
    }

    static navigationOptions = {
        title: 'Cart  '
      };

      render(){
        const renderMenuItem = ({item, index}) => {

            return (
          <List>
            <ListItem avatar key={index}>
              <Left>
                <Thumbnail source={{uri: baseUrl + item.image}} />
              </Left>
              <Body style={styles.body}>
                <Text  style={{ fontSize: 20}}>{item.name}</Text>
                <Text note style={{ fontSize: 15}}>Qty: {item.quantity}</Text>
              </Body>
             <Right style={styles.container}>
             <Button  style={styles.button}>
            <Text>Rs: {item.price * item.quantity}</Text>
          </Button>
              </Right> 
            </ListItem>
          </List>
                    );
        };
        const { navigate } = this.props.navigation;
        return (
            <FlatList 
            data= {this.state.groceries.filter(function(grocery)
            {
                      return grocery.quantity > "0"
                      })
                      }
            
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
    }

    
    
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding : 'auto'
    },
    button: {
      backgroundColor: 'steelblue',
      width: 110,
      height: 40,
      color : 'white',
      
    },
    body : {
      flex : 2,
      flexDirection : 'column',
    }
  });

export default Cart;