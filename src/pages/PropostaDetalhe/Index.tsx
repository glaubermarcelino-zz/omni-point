import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';

// import { Container } from './styles';

const PropostaDetalhe: React.FC = () => {
  return (
    <>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          margin: 20,
          height: 55,
        }}>
        <Image source={require('../../assets/Icons/back.png')} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            margin: 20,
            height: 55,
          }}>
          <Image
            style={{marginRight: 10}}
            source={require('../../assets/Icons/favorite.png')}
          />
          <Image source={require('../../assets/Icons/chat.png')} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.servicos}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <View
              style={{
                width: 268,
                height: 270,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Image source={require('../../assets/Images/joao.png')} />
              <Text>
                Mercado do João
                <Text>Plumber</Text>
                <Text>10 years experience</Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.item]}
          // onPress={() => handleNavigate()}
          activeOpacity={0.6}>
          <View
            style={{
              justifyContent: 'space-between',
              alignContent: 'flex-end',
              flexDirection: 'row',
              width: '100%',
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Proposta Pedido:
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 11, color: '#6E6F70'}]}>
                Leite Longa Vida 1l - 2cx - R$ 5,00
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 11, color: '#6E6F70'}]}>
                Café Orfeu Intenso - 1CX - R$ 35,00
              </Text>
              <Text
                style={[
                  styles.itemTitle,
                  {fontSize: 14, color: '#000', marginTop: 10},
                ]}>
                Total: R$ 40,00
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, {height: 55, marginTop: -5}]}
          // onPress={() => handleNavigate()}
          activeOpacity={0.6}>
          <View
            style={{
              justifyContent: 'space-between',
              alignContent: 'center',
              flexDirection: 'column',
              width: '100%',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={[styles.itemTitle, {fontSize: 17, color: '#000'}]}>
                Reviews
              </Text>
              <Image source={require('../../assets/Icons/reviews.png')} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.item,
            {height: 120, marginTop: -5, overflow: 'hidden'},
          ]}
          // onPress={() => handleNavigate()}
          activeOpacity={0.6}>
          <View
            style={{
              justifyContent: 'space-between',
              alignContent: 'center',

              flexDirection: 'row',
              width: '100%',
            }}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity style={{width: 66, height: 34,marginBottom:5}}>
                <View>
                  <Text
                    style={{
                      backgroundColor: '#51B92C',
                      textAlign: 'center',
                      borderRadius: 20,
                      color: '#fff',
                      justifyContent: 'center',
                      fontSize: 20,padding:5,
                      
                    }}>
                    Chat
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 201.17, height: 34.48}}>
                <View style={{backgroundColor: '#6E6F70', borderRadius: 20}}>
                  <Text
                    style={{fontSize: 20,padding:5, textAlign: 'center', color: '#fff'}}>
                    (00) 9.1234-5678
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 276, height: 34.48}}>
                <View style={{backgroundColor: '#E72051', borderRadius: 20}}>
                  <Text
                    style={{fontSize: 20,padding:5, textAlign: 'center', color: '#fff'}}>
                    Peça Agora
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  welcome: {color: '#E72051', fontSize: 16, margin: 10, fontWeight: 'bold'},
  instructions: {},
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
  item: {
    backgroundColor: '#fff',
    height: 104,
    width: 344,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6E6F70',
  },
  itemTitleSaldoCashBack: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  itemTitleSecond: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#979797',
  },
});

export default PropostaDetalhe;
