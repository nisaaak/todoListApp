import { Text as TextView } from "react-native"
import React from "react"

type Props = {
    children: React.ReactNode
    color?: string;
    fontSize?: number;
    regular?: boolean;
    bold?: boolean;
    italic?: boolean;
} & React.ComponentProps<typeof TextView>

const Text: React.FC<Readonly<Props>> = ({
    children,
    color = '#101D2C',
    fontSize = 14,
    regular = true,
    bold = false,
    italic = false,
    ...props
}) => (
    <TextView
        {...props}
        style={[
            {
                color: color,
                fontSize: fontSize,
            },
            regular && { fontFamily: 'regular' },
            bold && { fontFamily: 'bold' },
            italic && { fontFamily: 'italic' },
        ]}
    >
        {children}
    </TextView>
)

export default Text