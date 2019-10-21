import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {Layout, Text, Icon, Input, Button} from 'react-native-ui-kitten';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header} from 'react-navigation-stack';
import Accordion from 'react-native-collapsible/Accordion';

const Inspecao = () => {
  const [robos, setRobos] = React.useState([
    {title: 'fairywight', content: 'text'},
    {title: 'antweight', content: 'text'},
    {title: 'beetleweight', content: 'text'},
    {title: 'hobbyweight', content: 'text'},
    {title: 'featherweight', content: 'text'},
    {title: 'lightwight', content: 'text'},
    {title: 'middleweight', content: 'text'},
  ]);

  const [ativo, setAtivo] = React.useState([]);

  myRenderHeader = section => {
    let nomeIcone = 'chevron-up'
    let meuAtivo = robos && robos[ativo] && robos[ativo].title
    if(meuAtivo === section.title){
         nomeIcone = 'chevron-down'
    }

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon name={nomeIcone} width={32} height={32} style={{position:'absolute', right: 0, bottom: 3,}} />
      </View>
    );
  };

  myRenderContent = section => {
    return (
      <View style={styles.content2}>
        <Text>{section.content}</Text>
        <Text> watafok</Text>
      </View>
    );
  };
  return (
    <Layout style={styles.container}>
      <Accordion
        sections={robos}
        activeSections={ativo}
        touchableComponent={TouchableOpacity}
        renderHeader={myRenderHeader}
        renderContent={myRenderContent}
        onChange={setAtivo}
        containerStyle={{
          alignContent: 'center',
          justifyContent: 'center',
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
  },
  header: {
    padding: 10,
  },
  content2: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    padding: 10

  },
  linha2: {
    flexDirection: 'row',
    height: 120,
  },
  linha: {
    flex: 2,
    flexDirection: 'row',
    borderTopWidth: 1,
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

export default Inspecao;
