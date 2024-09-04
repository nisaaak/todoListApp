import React from "react"
import { View, TextInput } from "react-native"
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styles from "./styles";

const Search = ({
    press,
    search,
    onChange,
    onPressIn,
    onPressOut
}) => {
    const iconstyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scaleY: withSpring(press ? -1 : 1, {
                        damping: 20,
                        stiffness: 100
                    })
                }
            ]
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View style={iconstyle}>
                <Feather name="search" size={32} color="#fff" />
            </Animated.View>
            <TextInput
                placeholder={'Search'}
                placeholderTextColor={'#F48E8E'}
                value={search}
                onChangeText={(input) => {
                    onChange(input)
                }}
                onPressIn={() => {
                    onPressIn()
                }}
                onPressOut={() => {
                    onPressOut()
                }}
                style={styles.input}
            />
        </View>
    )
}

export default Search