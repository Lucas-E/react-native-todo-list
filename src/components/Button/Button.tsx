import { isEmpty } from 'lodash'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { defaultButtonStyle } from './style'

interface styleProps{
    button: object,
    text: object
}

interface props{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (...args:any) => void
    style?: styleProps|null|undefined,
    disabled?: boolean,
    text: string
}

export function Button({
    onClick,
    style,
    disabled,
    text
}: props) {
    return (
        <Pressable
            style={isEmpty(style) ? defaultButtonStyle.button : style.button}
            disabled={disabled}
            onPress={onClick}
            android_ripple={defaultButtonStyle.buttonRipple}
        >
            <Text style={isEmpty(style) ? defaultButtonStyle.text : style.text}>{text}</Text>
        </Pressable>
    )
}