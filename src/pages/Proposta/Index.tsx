import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';

// import { Container } from './styles';

const Proposta: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar placeHolder={'Buscar'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          margin: 20,
        }}>
        <Text style={{color: '#6E6F70', fontSize: 14, fontWeight: 'bold'}}>
          Orçamentos e propostas
        </Text>
        <Text style={{color: '#FE6C6D'}}>+ Novo</Text>
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
            <TouchableOpacity
              style={[
                styles.itemTab,
                {
                  height: 35,
                  width: 165,
                  borderColor: '#E72051',
                  borderWidth: 1,
                },
              ]}
              onPress={() => handleNavigate()}
              activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.itemTitle,
                    {textAlign: 'center', fontSize: 12},
                  ]}>
                  Orçamentos Solicitados
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.itemTab,
                {height: 35, width: 165, backgroundColor: '#E72051'},
              ]}
              onPress={() => handleNavigate()}>
              <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text
                  style={[
                    styles.itemTitle,
                    {textAlign: 'center', fontSize: 12, color: '#fff'},
                  ]}>
                  Propostas Recebidas
                </Text>
              </View>
            </TouchableOpacity>
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
                Nome Empresa
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Mercado do João
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Proposta - Orçamento 03
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                R$ 40,00
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Avaliação
              </Text>
              <Image source={require('../../assets/Images/stars3x5.png')} />
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Ver Detalhes
              </Text>
            </View>
          </View>
        </TouchableOpacity>

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
                Nome Empresa
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Mercado da Maria
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Proposta Orçamento 04
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                R$ 45,00
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Avaliação
              </Text>
              <Image source={require('../../assets/Images/stars4x5.png')} />
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Ver Detalhes
              </Text>
            </View>
          </View>
        </TouchableOpacity>

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
                Nome Empresa
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Extra Hipermercado
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Proposta - Orçamento 05
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                R$ 55,00
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Avaliação
              </Text>
              <Image source={require('../../assets/Images/stars2x5.png')} />
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Ver Detalhes
              </Text>
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

export default Proposta;
