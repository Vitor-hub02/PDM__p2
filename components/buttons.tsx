// components/Button.tsx
import React from 'react';
import { View, Button } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const ButtonComponent = ({ title, onPress }: Props) => {
  return (
    <View>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default ButtonComponent;