import React from 'react';
import {CardGroupWrapperContainer} from './CardGroup.styles';
import Card from '../card/Card.component'

const CardGroup = ({cardList}) => {
    const card = cardList.map((item, index)=>{
        return(
        <Card color={item.bcolor} title={item.title} score={item.score} icon={item.icon} key={index}/>
    )})
    return (
        <CardGroupWrapperContainer>{card}</CardGroupWrapperContainer>
    )
}

export default CardGroup;