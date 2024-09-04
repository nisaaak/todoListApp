import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"
import styles from "./styles"

const Button = ({
    title,
    onpress,
    backgroundColor
}) => (
    <Pressable
        onPress={() => { onpress() }}
        style={[
            styles.button,
            { backgroundColor: backgroundColor }
        ]}>
        <Text>
            {title}
        </Text>
    </Pressable>
)

export default Button