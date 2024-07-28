import React, { PropsWithChildren } from 'react'
import { Row } from '../Row/Row';
import Button from '../Button';
import { ListItemDefaultStyle } from './style';

interface props extends PropsWithChildren{
    removeListItem: (index:number) => void;
}

export function ListItem({
    children,
    removeListItem
}: props){
    return (
        <Row style={ListItemDefaultStyle.container}>
            {children}
            <Button onClick={removeListItem} text='Remove' style={{
                button: ListItemDefaultStyle.button,
                text: ListItemDefaultStyle.text
            }}/>
        </Row>
    )
}