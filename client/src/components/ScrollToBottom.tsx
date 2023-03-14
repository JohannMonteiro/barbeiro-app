import React, {useEffect, useRef} from 'react';
import {Keyboard, ScrollView, StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const ScrollToBottom: React.FC<Props> = ({children, containerStyles}) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      (scrollViewRef.current as any).scrollToEnd({animated: true});
    });

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={[styles.container, containerStyles]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default ScrollToBottom;
