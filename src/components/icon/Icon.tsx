import React from 'react';
import iconSprite from '../../assets/images/sprite.svg'

type IconPropsType ={
    iconId:string
    widht?: string
    height?: string
    viewBox?: string

}

 export const Icon = (props: IconPropsType) => {
    return (
        <svg width= {props.widht || "64" }  height={props.height|| "64" }   viewBox={props.height|| "0 0 64 64" }  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconSprite}#${props.iconId}` }/>
        </svg>



        );
};

