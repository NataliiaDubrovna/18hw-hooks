import React from 'react';
import './User.css';

function User({ firstName,lastName,phone,gender}){
    return(
        <div className="user">
            {firstName},{lastName},{phone},{gender}
        </div>
    )
}

export default User;