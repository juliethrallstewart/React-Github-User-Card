import React from 'react'
import Followers from './Followers.js';

const User = ({user, followers, error}) => {
    return (
        <>
        {user.message !==
        "Not Found" ? (
            <div>
            <p>{user.name}</p>
            <img src={user.avatar_url} alt={user.name} style={{height: '200px', width: '200px', border: "1px solid black", borderRadius: '50px'}} />
            <p>{user.html_url}</p>
            <p>Followers:</p>
            {followers.map((follower) => <Followers key={follower.id} follower={follower} />)}
            </div>
        ) : (
          <div>no user found</div>
        )}
        <div>{error}</div>
        </>
    )
}

export default User;

