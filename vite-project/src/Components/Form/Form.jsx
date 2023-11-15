import './Form.scss'
import Button from '../Button/Button';
import { useState } from 'react';

export default function Form(props) {

    console.log(props);

    return <div className="mini-cont">
        <div className={props.user.class}>
            <div className="img"></div>
            <div className="column">
                <h4>{props.user.context}</h4>
                <p>{props.user.weight}</p>
                <h4>{props.user.cost}</h4>
            </div>
            <div id={props.user.id}><Button/></div>
        </div>
    </div>
}