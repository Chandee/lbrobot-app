import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import {Layout, Text, Avatar, Input, Button} from 'react-native-ui-kitten';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header} from 'react-navigation-stack';

const Equipe = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.linha2}>
        <Layout
          style={{
            flex: 2,
            height: 115,
            justifyContent: 'center',
            margin: 10,
            flexDirection: 'column',
          }}>
          <Text category="h4">Equipe 1</Text>
          <Text category="s1">Parana</Text>
        </Layout>
        <Layout
          style={{
            flex: 1,
            height: 100,

            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 90, height: 90}}
            source={require('../imagem/Logo-Default.png')}
          />
        </Layout>
      </Layout>
      {
        <Layout style={styles.linha}>
          <Layout style={styles.boxNumero}>
            <Text>123</Text>
            <Text>Membros</Text>
          </Layout>
          <Layout style={styles.boxNumero}>
            <Text>1</Text>
            <Text>Rank</Text>
          </Layout>
          <Layout style={styles.boxNumero}>
            <Text>2</Text>
            <Text>Robos</Text>
          </Layout>
        </Layout>
      }
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
  },
  linha2: {
    flexDirection: 'row',
    height: 120,

  },
  linha: {
    flex: 2,
    flexDirection: 'row',
    borderTopWidth: 1
  },
  coluna: {
    flex: 1,
    height: 100,
    margin: 10,
  },
  boxNumero: {
    flex: 1,
    height: 100,

    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default Equipe;
