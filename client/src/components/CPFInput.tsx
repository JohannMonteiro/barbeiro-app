import { TextInput, StyleSheet, StyleProp, TextStyle } from "react-native";
import { globalColors } from "../styles/global-theme";
import { TextInputMask } from "react-native-masked-text";

type Props = {
  containerStyles?: StyleProp<TextStyle>;
  placeholder: string;
  onChangeValue: (text: string) => void;
  value: string;
};

export const CPFInputText: React.FC<Props> = ({
  onChangeValue,
  value,
  placeholder,
  containerStyles,
}) => {
  const mask = "XXX.XXX.XXX-XX";
  return (
    <TextInputMask
      type="cpf"
      style={[styles.input, containerStyles]}
      placeholder={placeholder}
      placeholderTextColor={globalColors["gray-light"]}
      multiline={false}
      maxLength={70}
      onChangeText={onChangeValue}
      value={value}
    />
  );
};

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
    borderWidth: 1,
  },
});
