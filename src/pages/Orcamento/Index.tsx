import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';

// import { Container } from './styles';

const Orcamento: React.FC = () => {
  const [visibleOrcamento, setVisibleOrcamento] = useState<boolean>(true);
  const [visibleProposta, setVisibleProposta] = useState<boolean>(false);

  function handleOrcamentoSolicitado() {
    setVisibleOrcamento(true);
    setVisibleProposta(false);
  }
  function handlePropostaRecebida() {
    setVisibleOrcamento(false);
    setVisibleProposta(true);
  }
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
                {height: 35, width: 165, backgroundColor: '#E72051'},
              ]}
              onPress={() => handleOrcamentoSolicitado()}>
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
                  Orçamentos Solicitados
                </Text>
              </View>
            </TouchableOpacity>
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
              onPress={() => handlePropostaRecebida()}
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
                Pedido 01
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Categoria Eletrônicos
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Itens
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                TV 50º Sansung Crystal 4k
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Status
              </Text>
              <Text style={styles.itemTitle}>Fechado</Text>
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
                Pedido 02
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Categoria Mercado-Açougue
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Itens
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Contra-Filé e Filé de Frango
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Status
              </Text>
              <Text style={[styles.itemTitle, {color: '#167814'}]}>
                Em transação
              </Text>
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
                Pedido 03
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Categoria Mercado
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 12, color: '#E72051'}]}>
                Itens
              </Text>
              <Text
                style={[styles.itemTitle, {fontSize: 14, color: '#6E6F70'}]}>
                Leite e Café
              </Text>
            </View>
            <View>
              <Text
                style={[styles.itemTitle, {color: '#E72051', fontSize: 12}]}>
                Status
              </Text>
              <Text style={[styles.itemTitle, {color: '#007AFF'}]}>
                Aceitando proposta
              </Text>
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
    borderWidth: 1,
    borderColor: '#E72051',
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

export default Orcamento;
