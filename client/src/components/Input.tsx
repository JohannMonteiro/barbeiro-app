import { TextInput, StyleSheet, StyleProp, TextStyle } from "react-native";
import { globalColors } from "../styles/global-theme";

type Props = {
  containerStyles?: StyleProp<TextStyle>;
  placeholder: string;
  onChangeValue: (text: string) => void;
  value: string;
  type?: 'default' | 'phone-pad';
};

export const InputText: React.FC<Props> = ({
  onChangeValue,
  value,
  placeholder,
  containerStyles,
  type = 'default',
}) => (
  <TextInput
    style={[styles.input, containerStyles]}
    placeholder={placeholder}
    placeholderTextColor={globalColors["gray-light"]}
    multiline={false}
    maxLength={70}
    onChangeText={onChangeValue}
    value={value}
    keyboardType={type}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: globalColors["brown-dark"],
    color: globalColors["white"],
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Inter-Regular",
    borderRadius: 10,
    padding: 12,
    width: 353,
    borderColor: globalColors["golden-light"],
    borderWidth: 1.5,
  },
});
