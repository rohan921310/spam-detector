import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  StatusBar,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import { DefaultTheme, Drawer, Provider as PaperProvider } from 'react-native-paper';
import {
  Divider
} from 'react-native-paper'
import Header from './src/Header'
import Messages from './src/components/Messages'


import SmsAndroid from 'react-native-get-sms-android'
import SmsListener from 'react-native-android-sms-listener'

import { check, PERMISSIONS, RESULTS, request, checkMultiple, requestMultiple, openSettings } from 'react-native-permissions'
import { amberA100 } from 'react-native-paper/lib/typescript/styles/colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#fff',
  },
};




const requestPermission = () => {
        const fs = require("fs");
  const bayes = require("bayes");

  request(PERMISSIONS.ANDROID.READ_SMS).then((response) => {
    // console.log(response)
    // alert(response);
  })
}
requestPermission();

const App = () => {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const subscribe = SmsListener.addListener(message => {
      // console.log('rohankjklskjks');
      // console.log("gelen sms", message);

      alert(message);
    })
    return () => subscribe.remove()
  }, [])

  useEffect(() => {
    const fetchAllSms = async () => {
      try {

        const filter = {
          box: "",
          // bodyRegex:"" //regex 
          //body:"selam",
          //adress:"+905545455"
          //minDate: 123213213,
          //maxDate:12312321321
          // read: 1,
          indexFrom: 0,
          // maxCount: 10
        }
        SmsAndroid.list(
          JSON.stringify(filter),
          (fail) => {
            console.log('fail', fail)
          },
          (count, smsList) => {
            console.log('count', count)
            let obj = JSON.parse(smsList);
            setMessages(obj);
          }
        )

      } catch (err) {
        console.warn(err);
      }

    };
    fetchAllSms();
  }, [])


  const WholeNews = () => {
   
  }

  const componentDidMount = async () => {
    console.log(messages);
    console.log('roj');
    messages.map(
      obj => {
        let rObj = {}
        rObj[obj.key] = obj.value
       console.log(obj._id);
      }
    )
  };
  componentDidMount();


  return (
    <PaperProvider theme={theme}>
      <StatusBar
        animated={true}
        backgroundColor="grey"

      />
      <Header />
      <Divider />
      <ScrollView>
        {
           messages.map(
            (obj, i) => {
              let rObj = {}
              rObj[obj.key] = obj.value
             return  <Messages data={obj} key={i} />
            }
          )
        }

      </ScrollView>

    </PaperProvider>
  );
}



export default App;