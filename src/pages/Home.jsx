import { Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

const Home = () => {
  // use state for push my todo value in variable
  const [todo, settodo] = useState([])
  let inputRef = useRef()

  // add todo function 
  function addTodo(event) {
    event.preventDefault()
    if (inputRef.current.value === '') {
      alert('please enter todo value')
    } else {
      todo.push(inputRef.current.value.toUpperCase())
      settodo([...todo])
      inputRef.current.value = ''
    }
  }

  // todo delete button
  function deleteBtn(index) {
    todo.splice(index, 1)
    settodo([...todo])
  }

  // todo edit button 
  function editBtn(index) {
    let getNewVal = prompt('Enter New todo!', todo[index])
    if (getNewVal) {
      todo.splice(index, 1, getNewVal.toUpperCase())
      settodo([...todo])
    }
  }

  // here is component retrun
  return (
    <>
      <div className='container mx-auto'>
        <Typography variant='h4' className='text-center'>React Todo App</Typography>
        <form onSubmit={addTodo} className='flex gap-3 mt-4 items-center justify-center'>
          <input id='inputTodo' type="text" placeholder='Enter Todo' ref={inputRef} />
          <Button type='submit' color='success' variant='contained'>Add</Button>
        </form>
        <div>
          <ul className='flex flex-col gap-2 mt-5'>{todo.map((item, index) => (
            <div>
              <li className='w-[100%] p-4 bg-slate-100'>{index + 1} {item}</li>
              <div className='flex gap-3 mt-3'>
                <Button onClick={() => deleteBtn(index)} variant='contained' color='error'>Delete</Button>
                <Button variant='contained' onClick={() => editBtn(index)}>Edit</Button>
              </div>
            </div>
          ))}</ul>
        </div>
      </div>
    </>
  )
}

export default Home
