import React from "react"
import { Pressable } from "react-native"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";

const AddButton = ({
    onpress,
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={styles.addButton}>
        <Feather name="plus" size={32} color="#fff" />
    </Pressable>
)

export default AddButton