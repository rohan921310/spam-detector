import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, Touchable} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  Badge,
  IconButton,
  TouchableRipple,
  Divider,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Messages = props => {
  const [abc, setAbc] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      var date = new Date().toLocaleString('en-US');
      console.log(date);
      var messageDate = new Date(props.data.date).toLocaleString('en-US');
      console.log(messageDate);
      if (messageDate.slice(8, 10) == date.slice(8, 10)) {
        console.log('26 = ' + messageDate.slice(11, 16));
        setAbc(messageDate.slice(11, 16));
      } else if (
        messageDate.slice(8, 10) < date.slice(8, 10) ||
        messageDate.slice(4, 7) < date.slice(4, 7)
      ) {
        console.log(
          '31 = ' + messageDate.slice(8, 10) + messageDate.slice(4, 7),
        );
        setAbc(messageDate.slice(4, 10));
      } else if (messageDate.slice(20, 24) == date.slice(20, 24)) {
        console.log(
          '33 = ',
          messageDate.slice(4, 7) + messageDate.slice(20, 24),
        );
        setAbc(messageDate.slice(4, 7) + messageDate.slice(20, 24));
      }
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);
  console.log('1 = ', abc);

  console.log(props.data._id);

  return (
    <Card>
      {/* <Divider /> */}
      <TouchableRipple
        onPress={() => {
          alert(props.data.body);
        }}
        rippleColor="rgba(0, 0, 0, .32)">
        <Card.Title
          titleStyle={{color: 'grey', fontWeight: 'bold', marginLeft: -20}}
          title={props.data.address}
          subtitleStyle={{marginLeft: -20}}
          subtitle={props.data.body}
          // left={(props) => <Icon {...props} size={30} style={{ paddingLeft:7, paddingTop:4, color: '#F32013',backgroundColor:'#b5b3b3',  borderRadius:50, height:40, width:40}} name="exclamation-circle" />}
          left={props => (
            <Icon
              {...props}
              size={25}
              style={{
                marginRight: 5,
                paddingLeft: 0,
                paddingTop: 8,
                color: '#F32013',
                borderRadius: 50,
                height: 40,
                width: 40,
              }}
              name="exclamation-circle"
            />
          )}
          right={props => (
            <Text {...props} style={{marginRight: 10, fontSize: 12}}>
              {abc}
            </Text>
          )}
        />
      </TouchableRipple>
      {/* <Icon name="exclamation" size={30} color="#900" /> */}
    </Card>
  );
};

export default Messages;
