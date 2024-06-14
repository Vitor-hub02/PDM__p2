import React from 'react';
import { Image, View, Text } from 'react-native';

interface CatImageProps {
  url: string;
  breed: string;
}

const CatImage: React.FC<CatImageProps> = ({ url, breed }) => {
  return (
    <View>
      <Image source={{ uri: url }} style={{ width: 300, height: 300 }} />
      <Text>{breed}</Text>
    </View>
  );
};

export default CatImage;