// CatGallery.tsx
import React from 'react';
import { FlatList, Image } from 'react-native';

type Cat = {
  url: string;
};

type Props = {
  cats: Cat[];
};

const CatGallery = ({ cats }: Props) => {
  return (
    <FlatList
      data={cats}
      renderItem={({ item }) => (
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.url }}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};


export default CatGallery;