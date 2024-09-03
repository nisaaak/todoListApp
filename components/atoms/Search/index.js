import React from "react"
import Text from "../Text"
import { Pressable, View, TextInput } from "react-native"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Animated, { BounceIn, BounceOut, useAnimatedStyle, withSpring } from 'react-native-reanimated';

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
        <View style={{
            flex: 1,
            backgroundColor: '#FDCFA8',
            justifyContent: 'center',
            borderRadius: 25,
            paddingLeft: 10,
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
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
                style={{
                    flex: 1,
                    marginLeft: 10
                }}
            />
        </View>
    )
}

export default Search