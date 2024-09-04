import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';

const Base = ({
    children
}) => (
    <SafeAreaView style={{ backgroundColor: '#FDE6BD', flex: 1, }}>
        {children}
    </SafeAreaView>
)

export default Base