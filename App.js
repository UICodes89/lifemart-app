

import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
// components
import welcomeEmailAuthScreen from "./src/screens/welcomeEmailAuthScreen"
import otpScreen from "./src/screens/otpScreen";
import AllDeals from "./src/screens/AllDealScreen";
import LocalDeals from "./src/screens/LocalDealScreen";
import Favourite from "./src/screens/FavouriteScreen";
import Setting from "./src/screens/SettingScreen";


Navigation.registerComponent('welcomeEmailAuthScreen', () => welcomeEmailAuthScreen);
Navigation.registerComponent('otpScreen', () => otpScreen);
Navigation.registerComponent('AllDeals', () => AllDeals);
Navigation.registerComponent('LocalDeals', () => LocalDeals);
Navigation.registerComponent('Favourite', () => Favourite);
Navigation.registerComponent('Setting', () => Setting);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component:{
        name:'welcomeEmailAuthScreen',
      }
    }
  });
});



