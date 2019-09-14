import React, {Component} from 'react';
import { FlatList, StyleSheet, TextInput} from 'react-native';
import { ListItem, Text, Left, Body, Right, List, Thumbnail, Form, Icon,Button } from 'native-base';
import { GROCERIES } from '../shared/groceries';
import { baseUrl } from '../shared/baseUrl';




class ItemList extends Component {



    constructor(props) {
        super(props);
        this.state = {
            groceries: GROCERIES,
            qty: '0'
        };
    }
    onChangeText(text) {
        this.setState({
          qty: text
        })
      }
    changeQuantity() {

    }



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
                    style={{height: 30, fontSize: 20, width: 50, fontFamily: 'regular', paddingBottom: 8}}  
                    placeholder="Qty"  
                    onChangeText={(text) => this.onChangeText({text})} /> 
              </Form> 
              <Button iconLeft style={styles.button} onPress={() => changeQuantity(this)} >
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