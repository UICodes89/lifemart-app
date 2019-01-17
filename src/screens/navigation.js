

import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



export const gotoOTP = () => Navigation.setRoot({
    root: {
        component: {
            name: 'otpScreen',
        }
    }
});

export const goAllDealScreen = () =>{

  Promise.all([
    Icon.getImageSource("ios-square-outline", 30),
    Icon.getImageSource("ios-pin", 30),
    Icon.getImageSource("ios-star", 30),
    Icon.getImageSource("ios-settings", 30),
]).then(sources => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                component: {
                  name: 'AllDeals',
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      icon: sources[0]
                    }
                  }
                },
              },
              {
                component: {
                  name: 'LocalDeals',
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      icon: sources[1]
                    }
                  }
                },
              },
              {
                component: {
                  name: 'Favourite',
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      icon: sources[2]
                    }
                  }
                },
              },
              {
                component: {
                  name: 'Setting',
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      icon: sources[3]
                    }
                  }
                },
              },
            ],
          }
        }
        
      })
    });
}

