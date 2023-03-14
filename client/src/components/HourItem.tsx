import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
  } from "react-native";
  import { globalColors } from "../styles/global-theme";
  
  interface Props {
    containerStyles?: StyleProp<ViewStyle>;
    hour: string;
    onPress: () => void;
  }
  
  export const HourItem: React.FC<Props> = ({
    hour,
    containerStyles,
    onPress,
  }) => (
    <TouchableOpacity
      style={[containerStyles]}
      onPress={onPress}
    >
      <Text style={[styles.label]}>{hour}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    label: {
      fontSize: 28,
      color: globalColors["golden-light"],
      fontFamily: "Inter-Bold",
      fontWeight: "600",
    },
  });
  