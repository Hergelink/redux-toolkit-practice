import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
  deleteUser,
  updateName,
  updateUserName,
} from './features/Users';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newName, setNewName] = useState('');
  const [newUserName, setNewUserName] = useState('');

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
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
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
