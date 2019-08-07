import React from 'react'

const Followers = ({follower}) => {
    return (
        <>
        <ul>
         <li>{follower.login}</li>
         </ul>
        </>
    )
}

export default Followers;

