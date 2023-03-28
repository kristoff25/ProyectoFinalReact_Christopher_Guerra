import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import MenuScreen from './MenuScreen';
import SCREENS from './Routes';
import Calculador from './Caclulador';

function ScreenRoutes() {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Routes>
          <Route exact path={SCREENS.MENU} Component={MenuScreen} />
          <Route path={SCREENS.SCREEN1} Component={Calculador} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}
export default ScreenRoutes;
