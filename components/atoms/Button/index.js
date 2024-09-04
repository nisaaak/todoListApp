import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"

const Button = ({
    title,
    onpress,
    backgroundColor
}) => (
    <Pressable
        onPress={() => { onpress() }}
        style={{
            marginTop: 20,
            backgroundColor: backgroundColor,
            borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Text>
            {title}
        </Text>
    </Pressable>
)

export default Button