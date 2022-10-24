import React,{useState, Component} from 'react'
import { Input } from './Input'

export class Formy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            palavra: '',
            email: '',
            senha: '',
        }
        this.setNome = this.setNome.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setSenha = this.setSenha.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    setNome(palavra) {
        this.setState({palavra})
    }
    setEmail(email) {
        this.setState({email})
    }
    setSenha(senha) {
        this.setState({senha})
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.setNome('')
        this.setEmail('')
        this.setSenha('')
    }
    render(){
  return (
    <div>
        <form>
        <Input setNome={this.setNome} type="Text" name="name" label="Nome:" placeholder="Digite seu nome..." ></Input>
        <Input setEmail={this.setEmail} type="email" name="email" label="Email:" placeholder="Digite seu email..." ></Input>
        <Input setSenha={this.setSenha} type="password" name="password" label="Senha:" placeholder="Digite sua senha..." ></Input>
        <button type='submit' onClick={e => {
            this.handleSubmit(e)
        }}>Enviar!</button>
        </form>
    </div>
  )
}
}