import React from 'react'
import styles from "./Rodape.module.scss"
import {ReactComponent as Facebook} from './facebook.svg'
import {ReactComponent as Twitter} from './twitter.svg'
import {ReactComponent as Instagram} from './instagram.svg'


export default function Rodape() {
  return (
    <footer className={styles.footer}>
        <nav className={styles.footer__social}>
            <ul>
                <li>
                    <a href="https://facebook.com">
                        <Facebook />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <Instagram />
                    </a>
                </li>
            </ul>
        </nav>
        <p className={styles.footer__creditos}>Desenvolvido por <a href="https://stsmuniz.tech">@stsmuniz</a></p>
    </footer>
  )
}
