import React from "react"
import { Pressable } from "react-native"
import { Feather, MaterialIcons } from '@expo/vector-icons';

const AddButton = ({
    onpress,
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={{
            backgroundColor: '#F48E8E',
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Feather name="plus" size={32} color="#fff" />
    </Pressable>
)

export default AddButton