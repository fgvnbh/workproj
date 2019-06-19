import React from "react";

const singleUser = props => {
    const {picture, fullName, department} = props;
    let pushList=props.listt;
    return (
        <div className='singleuser' >
            <img src={picture} className='useravatar' alt='img'/>
            <div className='userdescription'>
                <div className='username'>{fullName}</div>
                <div className='userdepartment'>{department}</div>
            </div>
            <div className='adduser' onClick={()=>pushList({picture, fullName, department})}>
                <img src={require('../img/ic-plus.svg')} className='plusimage' alt='img'/>
            </div>
        </div>
    );
};
export default singleUser;