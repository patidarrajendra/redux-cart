import React from 'react'

function User(props) {
    console.warn(props.data.name)
    const {data} = props;
  return (
    <div>
        <h4>{data.name}</h4>
    </div>
  )
}

export default User
