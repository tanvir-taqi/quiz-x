import { faBox, faCircle, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Option = ({option,handleAnswer,answer}) => {
    
    return (
        <div className={`text-center cursor-pointer `} onClick={()=>handleAnswer(option)}>
            <h1 className=''><span className={` ${answer}`}><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon></span> {option}</h1>
        </div>
    );
};

export default Option;