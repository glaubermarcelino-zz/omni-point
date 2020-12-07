import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Index';
import PedidoCotacao from '../PedidoCotacao/Index';
import Orcamento from '../Orcamento/Index';
import Proposta from '../Proposta/Index';

const Categoria = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  // const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Oooops...', 'Funcionalidade de Navegação acionada');
  }

  return (
    <>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#E72051"
          barStyle="light-content"
        />
        <Header />
        <SearchBar placeHolder={'Buscar Categoria'}/>
      </View>
      <SafeAreaView>
        <Text style={{fontSize:20,color:'#6E6F70',marginLeft:20,fontWeight:'bold'}}>Categorias</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                // onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/mercado.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Mercado</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/Icons/veiculo.png')} />
                </View>
                <Text style={styles.itemTitle}>Veículos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Pagamentos')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/assistencia-tecnica.png')}
                  />
                </View>
                <Text style={[styles.itemTitle,{flex:1,flexWrap:'wrap'}]}>Assistência Técnica</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/Icons/games.png')} />
                </View>
                <Text style={styles.itemTitle}>Games</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Credito')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/esporte-lazer.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Esporte e Lazer</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('FundoReserva')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/eletronico.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Eletrônicos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/eletrodomestico.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Eletrodomésticos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/Icons/modabeleza.png')} />
                </View>
                <Text style={styles.itemTitle}>Moda e Beleza</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/moveis-decoracao.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Móveis e Decorações</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Utilidades')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/Icons/outras-categorias.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Outras Categorias</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
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
    height: 90,
    width: 147,
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Categoria;
