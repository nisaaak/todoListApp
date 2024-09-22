import React from "react"
import Text from "../../atoms/Text"
import { Pressable, TextInput } from "react-native"
import styles from "./styles"

type Props = {
    title: string;
    placeholder: string;
    value: string;
    maxLength: number;
    onChangeText: (input: string) => void;
    height: number;
}

const FormInput: React.FC<Props> = ({
    title,
    placeholder,
    value,
    maxLength,
    onChangeText,
    height,
}) => (
    <>
        <Text fontSize={30} color={'#F48E8E'}>
            {title}
        </Text>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#868fba'}
            value={value}
            maxLength={maxLength}
            onChangeText={(input) => {
                onChangeText(input)
            }}
            style={[
                styles.input,
                { height: height }
            ]}
        />
    </>
)

export default FormInput