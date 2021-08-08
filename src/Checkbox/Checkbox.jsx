import React from 'react';
import './Checkbox.css';

function Checkbox({changeGender, gender}){

    function handleCheckbox(event){
        let newGenders = [...gender];
        let currentEventValue = event.target.value;
        
        if(newGenders.indexOf(currentEventValue) === -1){
            newGenders.push(currentEventValue);
        } else{
            newGenders.splice(newGenders.indexOf(currentEventValue),1)
        }
        changeGender(newGenders);
    }

    return (
    <div>
                <label htmlFor='male'>
            <input type="checkbox" id="male" value='male'  defaultChecked={true} onClick={handleCheckbox}/>
            Male</label>

                <label htmlFor='female'>
            <input type="checkbox" id="female" value='female'  defaultChecked={true} onClick={handleCheckbox} />
            Female</label>

                <label htmlFor='unknown'>
            <input type="checkbox" id="unknown" value='undefined'  defaultChecked={true} onClick={handleCheckbox} />
            Unknown</label>
    </div>
    )
}

export default Checkbox