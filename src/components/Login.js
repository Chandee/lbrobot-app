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
import {Layout, Text, Icon, Input, Button} from 'react-native-ui-kitten';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header} from 'react-navigation-stack';

const Login = props => {
  const [senha, setSenha] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textoSeguro, setTextoSeguro] = React.useState(true);

  renderIcon = style => {
    const iconName = textoSeguro ? 'eye-off' : 'eye';
    return <Icon name={iconName} />;
  };

  renderIcon2 = style => {
    const iconName2 = 'person';
    return <Icon name={iconName2} />;
  };
  onChangeText = value => {
    this.setState({value});
  };

  onIconPress = () => {
    setTextoSeguro(!textoSeguro);
  };
  return (
    <View>
      <ImageBackground
        source={require('../imagem/RoboFundo.jpeg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      />
      <ScrollView
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 16,
        }}>
        <Layout style={styles.backgroundContainer}>
          <Layout style={styles.centralziar}>
            <Image
              source={require('../imagem/LogoRobot2.png')}
              style={{width: 150, height: 150}}
            />

            <Text style={{marginTop: 40}} category="h4">
              Login
            </Text>
          </Layout>
          <Layout style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <Input
              value={email}
              placeholder="Email"
              size="tiny"
              icon={renderIcon2}
              onChangeText={setEmail}
              style={{marginBottom: 15}}
            />
            <Input
              value={senha}
              placeholder="Senha"
              size="tiny"
              icon={renderIcon}
              secureTextEntry={textoSeguro}
              onIconPress={onIconPress}
              onChangeText={setSenha}
            />
          </Layout>

          <Layout
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0)',
              flex: 1,
              marginBottom: 15,
              justifyContent: 'flex-end',
            }}>
            <Button
              style={styles.button}
              size="large"
              onPress={() => props.navigation.navigate('Dashboard')}>
              Entrar
            </Button>
          </Layout>
          <Layout style={styles.centralizarEmbaixo}>
            <Text>
              Não possui uma conta?
              <Text
                style={{fontWeight: 'bold'}}
                onPress={() => props.navigation.navigate('Cadastrar')}>
                Cadastre-se
              </Text>
            </Text>
          </Layout>
        </Layout>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '110%',
    overlayColor: '../imagem/RoboFundo.jpeg',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  centralziar: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    marginBottom: 20,
  },
  centralizarEmbaixo: {
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'flex-end',
    height: 15,
  },
  backgroundContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: Dimensions.get("window").height * 0.9,
    padding: 10,
  },
});

export default Login;
