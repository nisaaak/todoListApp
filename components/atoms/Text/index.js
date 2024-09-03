import { Text as TextView } from "react-native"
import React from "react"

const Text = ({
    children,
    color = '#101D2C',
    fontSize = 14,
    regular = true,
    bold = false,
    italic = false,
    ...props
}) => (
    <TextView
        style={[
            {
                color: color,
                fontSize: fontSize,
            },
            regular && { fontFamily: 'regular' },
            bold && { fontFamily: 'bold' },
            italic && { fontFamily: 'italic' },
            props
        ]}
    >
        {children}
    </TextView>
)

export default Text