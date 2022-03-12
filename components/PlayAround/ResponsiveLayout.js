import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  inputStyle: {
    fontSize: '18rem',
    height: '40rem',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  button: { fontSize: '24rem', fontWeight: 'bold' },
});

export function Input({ placeholder }) {
  return <TextInput style={styles.inputStyle} placeholder={placeholder} />;
}
const { width } = Dimensions.get('window');

export function SignUpScreen() {
  const [realTimeWidth, setWidth] = useState(width);

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window }) => {
      setWidth(window.width);
    });

    return () => {
      Dimensions.removeEventListener('change');
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
      }}
    >
      <Input placeholder='Email' />
      <View style={realTimeWidth > 500 ? { flexDirection: 'row' } : null}>
        <View style={realTimeWidth > 500 ? { flex: 1, marginEnd: 10 } : null}>
          <Input placeholder='Password' />
        </View>
        <View style={realTimeWidth > 500 ? { flex: 1, marginStart: 10 } : null}>
          <Input placeholder='Confirm' />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.button}>Sign Up</Text>
      </View>
    </View>
  );
}
