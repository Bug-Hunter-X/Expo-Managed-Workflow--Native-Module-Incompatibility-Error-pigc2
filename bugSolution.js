The solution depends on the library. If a direct Expo alternative exists, use that. If not, consider these:

**1. Expo Bare Workflow:**

This is the most flexible solution, granting complete control.  It involves ejecting from Expo's managed workflow, increasing setup complexity.

```javascript
//This code will illustrate a potential error with a hypothetical library 'react-native-nfc'
import React from 'react';
import { View, Text } from 'react-native';
import NFC from 'react-native-nfc'; //Hypothetical native module requiring Bare workflow 

const App = () => {
  // const nfc = new NFC(); // Error with managed workflow
  return (
    <View>
      <Text>No NFC access available</Text>
    </View>
  );
};

export default App;
```

**2. Expo Compatible Alternatives:**

Search for packages specifically stated as being Expo compatible.  Most packages that need native modules will have an Expo counterpart to avoid such errors.

```javascript
// Example using an Expo-compatible library for camera
import React from 'react';
import { View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; //Expo Camera

const App = () => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
  };
  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
    </View>
  );
};

export default App;
```
