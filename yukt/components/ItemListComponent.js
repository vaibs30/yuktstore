import React, {Component} from 'react';
import { View, FlatList, StyleSheet, TextInput} from 'react-native';
import { ListItem, Text, Left, Body, Right, List, Thumbnail, Form, Picker, Icon, Item,  Button, Input, Label } from 'native-base';
import { GROCERIES } from '../shared/groceries';
import { baseUrl } from '../shared/baseUrl';




class ItemList extends Component {



    constructor(props) {
        super(props);
        this.state = {
            groceries: GROCERIES,
            initialqty: '0'
        };
    }

  /*  valueChange = () => {
      this.setState({ 
        initialqty : 
       }); 
      }*/


    static navigationOptions = {
        title: 'Items     '
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
                <Text note style={{ fontSize: 15}}>Price is : Rs {item.price}</Text>
              </Body>
              <Right style={styles.container}>
              <Form>
              <TextInput  
                    style={{height: 30, fontSize: 20, width: 40}}  
                    placeholder="0"  
                    onChangeText={(initialqty) => this.setState({initialqty})} /> 
              </Form> 
              <Button iconLeft style={styles.button}>
                  <Icon name='cart' />
                  <Text>ADD TO CART</Text>
              </Button>
              </Right>
            </ListItem>
          </List>
                    );
        };
        const { navigate } = this.props.navigation;
        return (
            <FlatList 
            data={this.state.groceries}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
    }

    
    
}

const styles = StyleSheet.create({
   /* top:{
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      top: 0,
      height: 64,
      right: 0,
      left: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: '#828287',
      position: 'relative',
    },
    text:{
      marginTop:20,
    },
    rightButton: {
      width: 100,
      height: 37,
      position: 'absolute',
      bottom: 8,
      right: 2,
      padding: 8
    },*/
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
      flex : 1,
      flexDirection : 'column',
    }
  });

export default ItemList;