import React from "react"
import { Pressable } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";
const CloseButton = ({
    onpress,
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={styles.container}>
        <MaterialIcons name="close" size={32} color='#868fba' />
    </Pressable>
)

export default CloseButton