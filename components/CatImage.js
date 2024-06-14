import React from 'eact';
import { Image, View, Text } from 'eact-native';

const CatImage = ({ url, breed }) => {
  return (
    <View>
      <Image source={{ uri: url }} style={{ width: 300, height: 300 }} />
      <Text>{breed}</Text>
    </View>
  );
};

export default CatImage;