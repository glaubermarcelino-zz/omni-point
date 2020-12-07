import React from 'react';
import {View, Image, StatusBar, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/Images/bg-login.png')} />
      <View
        style={{
          marginTop:200,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems:'center',
          position: 'absolute',
          flexDirection: 'column',
        }}>
        <Image
          style={{
            alignContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../assets/Images/logo.png')}
        />
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
          Bem vindo ao Omni Point
        </Text>
        <View  style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems:'center',
          flexDirection: 'row',
          marginTop:60
        }}>
          <TouchableOpacity style={{width: 164, height: 50,marginRight:10}}>
            <View style={{backgroundColor: '#E72051', borderRadius: 30,padding:10}}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  textAlign: 'center',
                  color: '#fff',
                }}>
                SIGN IN
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 164, height: 50}}>
            <View style={{backgroundColor: '#484848', borderRadius: 30,padding:10}}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  textAlign: 'center',
                  color: '#fff',
                }}>
                SIGN UP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
