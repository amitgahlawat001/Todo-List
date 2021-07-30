import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { TodoItem } from './TodoItem'


let myStyle = {
    border: '5px',
    padding: '2px'
}

// props = {a,b,c,d}

// const { a, b, c, ...props } = props

// console.log(props.d)

export const Todos = ({ todos, onDelete, ...props }) => {


    useEffect(() => {
        if (todos.length < 1) { alert("List is empty") }
    }, [todos])

    // console.log('running Todos and checking props.todos.length', props.todos.length)
    return (

        <div className="container" style={myStyle}>
            <h3 className='text-center'> Todo list </h3>

            {todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sr} onDelete={onDelete} />
            })

            }
        </div>
    )
}
