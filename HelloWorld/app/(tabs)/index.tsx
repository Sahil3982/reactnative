import { Image, StyleSheet, Platform, SafeAreaView, Button, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
   
    <>
     <SafeAreaView>
      <TextInput style={{styles.btn}} title='my-btn okjnb' placeholder-shown="ok">

      </TextInput>
     </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 908,
  },
  btn{
font
  },
  stepContainer: {
    gap: 98,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
