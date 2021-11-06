import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
          const {userId} = useParams();
          const [user, setUser] = useState({});
          useEffect(() => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => res.json())
                    .then(data => setUser(data))
          },[]);
          const {name, email, phone, website, id} = user;
          return (
                    <div style={{border: "1px solid gray"}}>
                              <h1>Name : {name}</h1>
                              <p>Id : {id}</p>
                              <p>Email : {email}</p>
                              <p>Phone : {phone}</p>
                              <p>Website : {website}</p>
                    </div>
          );
};

export default UserDetails;