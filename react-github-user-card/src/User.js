import React from 'react'

const User = ({user, error}) => {
    return (
        <>
        {user.message !==
        "Not Found" ? (
            <div>
            <p>{user.name}</p>
            <img src={user.avatar_url} alt={user.name} style={{height: '200px', width: '200px'}} />
            <p>{user.html_url}</p>
            </div>
        ) : (
          <div>no user found</div>
        )}
        <div>{error}</div>
        </>
    )
}

export default User;

