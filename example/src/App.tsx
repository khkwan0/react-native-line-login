import * as React from 'react';

import { Button, StyleSheet, View } from 'react-native';
import Line from 'react-native-line-login';

export default function App() {
  async function HandleLogin() {
    try {
      const res = await Line.Multiply(3, 7);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="login" onPress={() => HandleLogin()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
