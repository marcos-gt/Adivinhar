import React, { Component, useState } from 'react'
import './Game.css'
import { Restart } from './Restart'
import {palavras} from '../App'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            palavra: this.props.palavra,
            acertos: [],
            indices: [],
            erros: [],
            point: 50,
            tentativa: '',
            soma: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTentativa = this.handleTentativa.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }
    handleSubmit = (letra) => {
        if (this.state.palavra.includes(letra)) {
            this.setState({ point: this.state.point + 10 })

            // Array é a palavra que o usuário deve adivinhar
            var array = this.props.palavra.split('')
            
            // Indices é um array que armazena os indices das letras que o usuário acertou
            var idx = array.indexOf(letra)
            // while para o caso de haver mais de uma letra igual na palavra
            while( idx != -1){
            this.state.indices.push(idx)
            idx = array.indexOf(letra, idx + 1)
            }
            // .map para percorrer o array e preencher o array acertos com as letras que o usuário acertou
            array.map((elemento,i)=>{
                this.state.indices.map((index)=>{
                    this.state.acertos[index] = letra
                })
            })
            let sum = 0
            array.forEach((elemento,i)=>{
            array[i] == this.state.acertos[i]? sum++: sum
            sum == array.length? this.setState({soma: 100}): null
            })
        } else {
            this.setState({ point: this.state.point - 5 })
            this.setState({ erros: [...this.state.erros, letra] })
        
        }
        HandleAcertos()
        this.setState({ tentativa: '' })
    }
    handleTentativa = (e) => {
        this.setState({ tentativa: e })
    }
    componentWillUnmount = ()=>{}

    render() {
        return (
            <div>
                <p>Regras: Jogo inicia com 50 pontos. Você ganha 10 por acerto e perde 5 ao errar</p>
                <p>Pontuação: {this.state.point <= 0? 'GAME OVER!!!': this.state.point }</p>
                <h1>Adivinhe a Palavra: </h1>
                <p>Letras erradas: {this.state.erros}</p>
                <p>Dica sobre a palavra: { }</p>
                <div className='container'>
                    {this.props.palavra.split('').map((letra, index) => 
                            <box className="box">
                                {this.state.indices.includes(index)? letra: ''}
                                {this.state.soma == 100 ? 'Parabéns, você ganhou!': ''}
                            </box>)}
                </div>
                <div>{ }</div>
                <input type="text" name="tentativa" onChange={e => this.handleTentativa(e.target.value)} />

                <button onClick={e => {
                    e.preventDefault()
                    this.state.tentativa? this.handleSubmit(this.state.tentativa) : alert('Digite uma letra')  
                }}  
                >Tentar!</button>
            
                <button onClick={this.props.setCount}>Reiniciar?</button>
            </div>
        )
    }
}
