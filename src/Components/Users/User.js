import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const User = (props) => {
          const {name, email, company , id} = props.user;
          let history = useHistory();
          const handleClick = userId => {
                    history.push(`/user/${userId}`);
          }
          const userStyle ={
                    border: '1px solid gray',
                    marginTop: '10px',
                    padding: '10px',
                    borderRadius: '5px'
          }
          return (
                    <div style={userStyle}>
                              <h1>Name : {name}</h1>
                              <p>Id : {id}</p>        
                              <p>Company : {company.name}</p>
                              <p>Email : {email}</p>
                              <Link to={`/user/${id}`}>add to card</Link>
                              <button onClick={() => handleClick(id)}>add to card</button>
                    </div>
          );
};

export default User;