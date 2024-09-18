import { Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

const Layout = () => {
  const [todo, settodo] = useState([])
  let inputRef = useRef()

  function addTodo(event) {
    event.preventDefault()
    if (inputRef.current.value === '') {
      alert('please enter todo value')
    } else {
      todo.push(inputRef.current.value)
      settodo([...todo])
      inputRef.current.value = ''
    }
  }


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
            <li className='w-[100%] p-4 bg-slate-100'>{item}</li>
          ))}</ul>
        </div>
      </div>
    </>
  )
}

export default Layout
