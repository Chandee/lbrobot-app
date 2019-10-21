import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity 
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from '../components/Login';
import {Layout, Text, Icon, Input, Button} from 'react-native-ui-kitten';
import Equipe from '../components/Equipe'
import Cadastrar from '../components/Cadastrar';
import Inspecao from '../components/Inspecao'

const WelcomeScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate('Dashboard')}
      />
      <Button title="Sign Up" onPress={() => alert('button pressed')} />
    </View>
  );
};

const DashboardScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DashboardScreen</Text>
    </View>
  );
};



const Membros = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Membros</Text>
    </View>
  );
};

const Robos = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Robos</Text>
    </View>
  );
};

const Lutas = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>lutas</Text>
    </View>
  );
};

const Perfil = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Perfil</Text>
    </View>
  );
};



const Contador = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contador</Text>
    </View>
  );
};

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Equipe,
    Membros,
    Robos,
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  },
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <TouchableOpacity 
            style={{marginLeft: 15, width: 32, height: 32}}
            onPress={() => navigation.openDrawer()}>
            <Icon
              name="menu"
              width={32}
              height={32}
            />
          </TouchableOpacity >
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Equipe: {
      screen: DashboardStackNavigator,
    },
    Lutas: {
      screen: Lutas,
    },
    Perfil: {
      screen: Perfil,
    },
    Inspecao: {
      screen: Inspecao
    },
    Contador: {
      screen: Contador
    }
  },
  {
    minSwipeDistance: 250,
    edgeWidth: 50,
  },
);

const LoginStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Cadastrar: {
      screen: Cadastrar,
    },
  },
  {headerMode: 'none'},
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: LoginStackNavigator},
  Dashboard: {screen: AppDrawerNavigator},
});

const Routes = createAppContainer(AppSwitchNavigator);

export default Routes;
