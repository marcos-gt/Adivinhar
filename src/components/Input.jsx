import React from 'react'

export const Input = (props) => {
  return (
    <label>{props.label}
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={
           e => {
            if(props.setNome)
            props.setNome(e.target.value)
            if(props.setEmail)
            props.setEmail(e.target.value)
            if(props.setSenha)
            props.setSenha(e.target.value)
        }
        } />
    </label>
  )
}