import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
//import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  //const [permission, askForPermission] = usePermissions(Permissions.MEDIA_LIBRARY, {ask : true });

  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    //const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
      
    </Screen>
  );
}
