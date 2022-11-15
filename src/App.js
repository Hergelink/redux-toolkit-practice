import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
  deleteUser,
  updateName,
  updateUserName,
  updateEmail,
} from './features/Users';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            setNewName(null);
            setNewUserName(null);
            setNewEmail(null);

            dispatch(
              addUser({
                // id: userList[userList.length - 1].id + 1,
                id: uuidv4(),
                name,
                username,
                email,
              })
            );
          }}
        >
          Add User
        </button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <h1>{user.email}</h1>
              <input
                type='text'
                placeholder='Name'
                onChange={(e) => setNewName(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(updateName({ id: user.id, name: newName }));
                }}
              >
                Update Name
              </button>
              <input
                type='text'
                placeholder='Username'
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUserName({ id: user.id, username: newUserName })
                  );
                }}
              >
                Update Username
              </button>
              <input type="email" placeholder='email'onChange={(e) => setNewEmail(e.target.value)}/>
              <button onClick={() => {
                dispatch(updateEmail({id: user.id, email: newEmail}))
              }}>Update Email</button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
                className='deleteBtn'
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
