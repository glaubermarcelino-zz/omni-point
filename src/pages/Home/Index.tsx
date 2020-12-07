import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';
import Maps from '../../components/Maps/Index';
import PedidoCotacao from '../PedidoCotacao/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orcamento from '../Orcamento/Index';
import Proposta from '../Proposta/Index';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar placeHolder="Localizar" />
      <Maps />
    </>
  );
};

export default Home;
