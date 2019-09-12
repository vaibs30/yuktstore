import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

 class Contact extends Component {

     static navigationOptions = {
        title: 'Contact Us    '
    };

     render() {
        return(
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <Card title='Contact Information'>
                    <Text style={{margin: 10}}>21/15, Tanjore Apartments</Text>
                    <Text style={{margin: 10}}>Brakathambal street</Text>
                    <Text style={{margin: 10}}>Chennai, Tamil Nadu</Text>
                    <Text style={{margin: 10, paddingTop : 10}}>{<Text style={{ fontWeight : 'bold'}}>Tel:</Text>} 123456789</Text>
                    <Text style={{margin: 10}}>{<Text style={{ fontWeight : 'bold'}}>Email:</Text>} yukt@gmail.com</Text>     
                </Card>
            </View>
        );
    }
}

 export default Contact;