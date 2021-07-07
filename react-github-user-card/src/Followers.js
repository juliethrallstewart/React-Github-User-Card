import React from 'react'

const Followers = ({follower}) => {
    return (
        <>
        <ul>
         <li>{follower.login}</li>
         </ul>
         {/* <ul>
         {Object.entries(follower).map(([field, value], idx) => (
             <li key={idx}>
             <strong>{field}:</strong>{value}</li>
         ))}
         </ul> */}
        </>
    )
}

export default Followers;

