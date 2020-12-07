import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home/Index';
import PedidoCotacao from './pages/PedidoCotacao/Index';
import Proposta from './pages/Proposta/Index';
import Orcamento from './pages/Orcamento/Index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categoria from './pages/Categoria/Index';
import {Image} from 'react-native';
import PropostaDetalhe from './pages/PropostaDetalhe/Index';

const AppStack = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        tabBarOptions={{activeTintColor: '#1ee91e', style: {height: '8%'}}}>
        <AppStack.Screen
          name="Cotação"
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/buscar-mapa.png')} />
            ),
          }}
          component={PedidoCotacao}
        />

        <AppStack.Screen
          name="Categorias"
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/categorias.png')} />
            ),
          }}
          component={Categoria}
        />
        <AppStack.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/home.png')} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <AppStack.Screen
          name="Orçamento"
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/orcamento.png')} />
            ),
          }}
          component={Orcamento}
        />
        <AppStack.Screen
          name="Proposta"
          options={{
            tabBarLabel: 'Proposta',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/proposta.png')} />
            ),
          }}
          component={Proposta}
        />
        <AppStack.Screen
          name="Proposta Detalhe"
          options={{
            tabBarLabel: 'Proposta Detalhe',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/proposta.png')} />
            ),
          }}
          component={PropostaDetalhe}
        />
        <AppStack.Screen
          name="Proposta"
          options={{
            tabBarLabel: 'Proposta',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./assets/Icons/proposta.png')} />
            ),
          }}
          component={Proposta}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
