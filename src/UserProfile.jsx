import React from 'react'
import CustomeButton from './CustomeButton'

function UserProfile(props) {
    return (
        <>
            <div className='user-card'>
                <div className='user-item'>
                    <img src={props.data.img} alt='usr1' />
                    {/*<h5>User Id: {props.data.id}</h5>*/}
                    <em>Name:{props.data.name}</em>
                    <em>Address: {props.data.address}</em>
                    {/*<button onClick={()=>{console.log("clicked")}}>View {props.data.name}</button>*/}
                    <CustomeButton width={120} height={30} backgroundColor={props.data.backgroundColor} color={props.data.color} border="none" fontSize={props.data.fontSize} buttonText={"View "+ props.data.name} />
                </div>
            </div>
        </>
    )
}

export default UserProfile
