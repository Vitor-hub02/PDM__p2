// App.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import CatGallery from './components/CatGallery';
import ButtonComponent from './components/buttons';
import axios from 'axios';

type Cat = {
  url: string;
};

const App = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search')
     .then(response => {
        setCats(response.data);
        setLoading(false);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleButtonPress = () => {
    axios.get('https://api.thecatapi.com/v1/images/search')
     .then(response => {
        setCats(cats => [...cats,...response.data]);
      })
     .catch(error => {
        console.error(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
      <CatGallery cats={cats} />
      <ButtonComponent title="Obter novas fotos" onPress={handleButtonPress} />
    </ScrollView>
  );
};

export default App;