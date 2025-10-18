import React from 'react'
import Header from '../../components/header/Header'
import "./home.css"

export default function Home() {
  return (
    <>
    <Header />
    <main className="home">
      <section className="hero">
        <div className="overlay">
          <h1>Bienvenido a <span>Moon</span></h1>
          <p>Conecta, comparte y brilla con la comunidad lunar.</p>
          <button className="btn-hero">Explorar</button>
        </div>
      </section>
    </main>
    </>
  )
}
