import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  color: string;
}

export const Divider: React.FC<Props> = ({ color, containerStyles }) => (
  <View
    style={[
      {
        borderColor: color,
        borderWidth: 1,
        width: "100%",
      },
      containerStyles,
    ]}
  />
);

const styles = StyleSheet.create({});
