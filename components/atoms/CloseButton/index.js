import React from "react"
import { Pressable } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const CloseButton = ({
    onpress,
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={{ alignItems: 'flex-end', marginTop: 20 }}>
        <MaterialIcons name="close" size={32} color='#868fba' />
    </Pressable>
)

export default CloseButton