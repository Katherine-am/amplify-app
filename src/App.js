import React, {useState, useEffect} from 'react';

import './scss/styles.scss';

import Button from './components/Atoms/Button';
import Input from './components/Atoms/Input';
// import Header from './components/Organisms/Header';
// import Main from './components/Organisms/Main';
// import Footer from './components/Organisms/Footer';
// import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import { createUser } from './graphql/mutations';
// import { createTodo } from './graphql/mutations'
// import { listTodos } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// const initialState = { name: '', description: '' }

const initialState = {
  firstName: '',
  lastName: '',
  age: null
}

function App() {
  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState([]);

  //  useEffect(() => {
  //   fetchUsers()
  // }, [])

    async function addUser() {
    try {
      if (!formState.firstName || !formState.lastName || !formState.age) return
      const user = { ...formState }
      setUsers([...users, user])
      setFormState(initialState)
      // await API.graphql(graphqlOperation(createUser, {input: user}))
    } catch (err) {
      console.log('error creating user:', err)
    }
  }

    return (
    <div>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Age" />
      <Button label="Submit" onClick={addUser} />
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </nav> */}
      {/* <Header />
      <Main />
      <Footer />  */}
    </div>
  );
}
  // const [formState, setFormState] = useState(initialState)
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  // function setInput(key, value) {
  //   setFormState({ ...formState, [key]: value })
  // }

  // async function fetchTodos() {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listTodos))
  //     const todos = todoData.data.listTodos.items
  //     setTodos(todos)
  //   } catch (err) { console.log('error fetching todos') }
  // }

  // async function addTodo() {
  //   try {
  //     if (!formState.name || !formState.description) return
  //     const todo = { ...formState }
  //     setTodos([...todos, todo])
  //     setFormState(initialState)
  //     await API.graphql(graphqlOperation(createTodo, {input: todo}))
  //   } catch (err) {
  //     console.log('error creating todo:', err)
  //   }
  // }

  // async function deleteTodo(todo) {
  //   try {
  //     const {id} = todo;
  //     todos.splice(id, 1);
  //     setTodos([...(todos)]);
  //   } catch (err) {console.log('err deleting todo:', err)}
  // }

  // return (
  //   <div style={styles.container}>
  //     <h2>Amplify Todos</h2>
  //     <input
  //       onChange={event => setInput('name', event.target.value)}
  //       style={styles.input}
  //       value={formState.name}
  //       placeholder="Name"
  //     />
  //     <input
  //       onChange={event => setInput('description', event.target.value)}
  //       style={styles.input}
  //       value={formState.description}
  //       placeholder="Description"
  //     />
  //     <button style={styles.button} onClick={addTodo}>Create Todo</button>
  //     {
  //       todos.map((todo, index) => (
  //         <div key={todo.id ? todo.id : index} style={styles.todo}>
  //           <p style={styles.todoName}>{todo.name}</p>
  //           <p style={styles.todoDescription}>{todo.description}</p>
  //           <button onClick={() => {
  //             deleteTodo(todo.id);
  //           }}>X</button>
  //         </div>
  //       ))
  //     }
  //   </div>
  // )

// const styles = {
//   container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
//   todo: {  marginBottom: 15 },
//   input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
// }

export default App;
