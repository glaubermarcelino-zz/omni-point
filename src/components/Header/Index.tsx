import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Images/omni-point143x117.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E72051',
    height: 150,
    marginBottom:5,
    width: 414,
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
});

export default Header;
