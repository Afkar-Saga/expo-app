import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [count, setCount] = useState(0);
  const [button, setButton] = useState({
    x: (windowWidth / 2), 
    y: (windowHeight / 2), 
  })

  const increment = () => {
    setCount(count + 1)
  }
  const teleport = () => {
    let newX = Math.floor(Math.random() * windowWidth)
    let newY = Math.floor(Math.random() * windowHeight)
    setButton({x: newX, y: newY})
  }
  const handleTap = () => {
    increment()
    teleport()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.buttonContainer(button)}>
        <Button 
          onPress={handleTap}
          title='MORE!'
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 60,
  },
  buttonContainer: (btn) => {
    const posX = btn.x
    const posY = btn.y
    return {
      position: 'absolute',
      top: posY,
      left: posX,
      width: 100,
    }
  }
});
 