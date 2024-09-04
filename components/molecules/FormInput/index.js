import React from "react"
import Text from "../../atoms/Text"
import { Pressable, TextInput } from "react-native"

const FormInput = ({
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
            style={{
                borderWidth: 1,
                borderColor: '#868fba',
                backgroundColor: '#fff',
                borderRadius: 8,
                height: height,
                padding: 10
            }}
        />
    </>
)

export default FormInput