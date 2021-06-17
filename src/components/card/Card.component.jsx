import React from 'react';
import {CardWrapper, ScoreWrapper, Icon } from './Card.styles';

const Card = ({title, color, score, icon}) => {
    return (
        <CardWrapper color={color}>
            <Icon>{icon}</Icon>
            <h3>{title}</h3>
            <ScoreWrapper >{score}</ScoreWrapper>
        </CardWrapper>
    )
}

export default Card;