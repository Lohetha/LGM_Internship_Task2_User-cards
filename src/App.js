import React, {useState} from 'react';
import './styles.css';

const App=()=>{

  const [users,setUsers] = useState([]);
  
  const loadUsers= async()=>
  {
    const response= await fetch ("https://reqres.in/api/users?page=1");
    const jsonResponse= await response.json();
    setUsers(jsonResponse.data);
  }
  
  return(
    <div className="App">
      <div class='navbar'>
      <h1>React-App</h1>
      <button onClick={loadUsers}>Get Users</button>
      </div>
      <ul>
        {users.map(({id, email , avatar,first_name,last_name})=>(
          <li key={id}>
            <div class="box">
              <p>{first_name} {last_name}</p>
              <p>{email}</p>
              
              <img src={avatar}></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
