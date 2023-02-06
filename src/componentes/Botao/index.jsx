import React from 'react'
import styles from './Botao.module.scss'

export default function Botao({acao, children}) {
  return <button onClick={acao}>{children}</button>
}
