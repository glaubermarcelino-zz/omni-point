import React, {useState} from 'react';
import {
  Image,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';
import RadioButtonRN from 'radio-buttons-react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import { Container } from './styles';

const PedidoCotacao: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('dinheiro');
  const data = [
    {
      label: 'Leite Longa Vida 1L  2UN',
    },
    {
      label: 'Café Orfeu Intenso   1CX',
    },
  ];
  return (
    <>
      <Header />
      <SearchBar placeHolder={'Qual produto você precisa?'} />
      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          margin: 20,
          height: 55,
        }}>
        <Text style={{color: '#6E6F70', fontSize: 20}}>Mercado</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'center',
            margin: 20,
          }}>
          <Text style={{color: '#E72051', fontSize: 17}}>Lista de Compras</Text>
        </View>
      </View>
          <RadioButtonRN data={data} selectedBtn={() => console.log('')} />
          <ScrollView>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={[styles.item]}>
          <Text style={{color: '#E72051', fontSize: 17, fontWeight: 'bold'}}>
            Agendar entrega para
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Domingo 06/12 - 23h59</Text>
            <Image source={require('../../assets/Icons/calendar.png')} />
          </View>
        </View>
        <View style={[styles.item]}>
          <Text style={{color: '#E72051', fontSize: 17, fontWeight: 'bold'}}>
            Forma de Pagamento
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Dinheiro" value="dinheiro" />
            <Picker.Item label="Cartão Crédito" value="cartaocredito" />
            <Picker.Item label="Cartão Débito" value="cartaodebito" />
          </Picker>
        </View>
        <View style={[styles.item]}>
          <Text style={{color: '#E72051', fontSize: 17, fontWeight: 'bold'}}>
            Informações Adicionais
          </Text>
          <Text>Se não tiver o café intenso , pode ser o clássico mesmo</Text>
        </View>
        <View style={[styles.item]}>
          <Text style={{color: '#E72051', fontSize: 17, fontWeight: 'bold'}}>
            Endereço de Entrega
          </Text>
          <Text>Rua polinize, 123 - Céu Azul - Goias</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',

            flexDirection: 'row',
            width: '100%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <TouchableOpacity style={{width: 220, height: 34.48,marginBottom:30}}>
              <View style={{backgroundColor: '#E72051', borderRadius: 30}}>
                <Text
                  style={{
                    fontSize: 20,
                    padding: 15,
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  Solicitar Orçamento
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
      
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
    height: 80,
    width: 344,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'flex-start',
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

export default PedidoCotacao;
