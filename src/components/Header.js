import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import mainImage from '../img/logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});

class Header extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.logo}
          source={mainImage}
        />
      </View>
    );
  }
}

export default Header;
