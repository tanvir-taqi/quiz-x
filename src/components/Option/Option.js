import {  faCircle,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Option = ({option,handleAnswer}) => {
    
    return (
        <div className={`cursor-pointer `} onClick={()=>handleAnswer(option)}>
            
            <h1 className=''><span ><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> {option}</h1>
        </div>
    );
};

export default Option;