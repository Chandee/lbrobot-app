import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import {
  Layout,
  Text,
  Icon,
  Input,
  Button,
  Select,
  Datepicker,
} from 'react-native-ui-kitten';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskedInput from 'react-native-masked-input-text';

const Cadastrar = props => {
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [aniversario, setAniversario] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [equipe, setEquipe] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textoSeguro, setTextoSeguro] = React.useState(true);
  const [cor, setCor] = React.useState('#8F9BB3');
  const [corBorda, setCorBorda] = React.useState('#E4E9F2');
  const [dataEquipe, setDataEquipe] = React.useState([
    {text: 'Equipe 1'},{ text: 'Equipe2'},{ text: 'Equipe3'},{ text: 'Equipe4'}
  ]);

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

  React.useEffect(() => {
    console.log('só verificando o numerio', aniversario);
  }, [aniversario]);
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
          <Layout style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <Select
              style={styles.select}
              data={dataEquipe}
              selectedOption={equipe}
              onSelect={setEquipe}
              placeholder="Selecione sua equipe"
            />
            <Input
              value={nome}
              placeholder="Nome"
              size="tiny"
              icon={renderIcon2}
              onChangeText={setNome}
              style={{marginBottom: 10}}
            />
            <Input
              value={cpf}
              placeholder="CPF"
              size="tiny"
              icon={renderIcon2}
              onChangeText={setCpf}
              style={{marginBottom: 10}}
            />

            <MaskedInput
              mask={'00/00/0000'}
              value={aniversario}
              onChangeText={value => setAniversario(value)}
              placeholder={'Data de aniversario'}
              onBlur={() => {
                setCor('#8F9BB3');
                setCorBorda('#E4E9F2');
              }}
              onFocus={() => {
                setCor('#1A2138');
                setCorBorda('#3366FF');
              }}
              style={{
                borderRadius: 4,
                borderWidth: 1,
                paddingHorizontal: 21,
                borderColor: corBorda,
                backgroundColor: '#F7F9FC',
                textColor: cor,
                placeholderColor: '#8F9BB3',
                marginBottom: 10,
              }}
            />
            <Input
              value={celular}
              placeholder="Celular"
              size="tiny"
              onChangeText={setCelular}
              style={{marginBottom: 10}}
            />

            <Input
              value={email}
              placeholder="Email"
              size="tiny"
              icon={renderIcon2}
              onChangeText={setEmail}
              style={{marginBottom: 10}}
            />
            <Input
              value={senha}
              placeholder="Senha"
              size="tiny"
              icon={renderIcon}
              secureTextEntry={textoSeguro}
              onIconPress={onIconPress}
              onChangeText={setSenha}
              style={{marginBottom: 10}}
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
              Cadastrar
            </Button>
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
    height: Dimensions.get('window').height * 0.9,
    padding: 10,
  },
  select: {
    marginBottom: 10,
  },
});

export default Cadastrar;
