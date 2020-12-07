import React from 'react';
import {View, Image, StatusBar, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const TipoUsuario: React.FC = () => {
  return (
    <View style={{alignItems:'center'}}>
      <View
        style={{
          marginTop:50,
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
          O que você precisa?
        <Image
        style={{
          alignContent: 'center',
          alignItems: 'center',
          marginBottom:20,
          position:'absolute'
        }}
        source={require('../../assets/Images/quem-e-voce.png')}
      />
        </Text>
        <View  style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems:'center',
          flexDirection: 'row'
        }}>
          <TouchableOpacity style={{width: 164, height: 50,marginRight:10}}>
            <View style={{backgroundColor: '#E72051', borderRadius: 30,padding:10}}>
              <Text
                style={{
                  fontSize: 15,
                  padding: 5,
                  textAlign: 'center',
                  color: '#fff'
                  
                }}>
                Sou Cliente
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 164, height: 50}}>
            <View style={{backgroundColor: '#484848', borderRadius: 30,padding:10}}>
              <Text
                style={{
                  fontSize: 15,
                  padding: 5,
                  textAlign: 'center',
                  color: '#fff',
                }}>
                Sou Comerciante
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TipoUsuario;
