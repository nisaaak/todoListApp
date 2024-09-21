import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"
import styles from "./styles"

type Props = {
    title: string;
    onpress: () => void;
    backgroundColor?: string;
} & React.ComponentProps<typeof Pressable>

const Button: React.FC<Readonly<Props>> = ({
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