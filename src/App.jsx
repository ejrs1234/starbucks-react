// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='menu'>
          <button>Coffee</button>
          <button>Menu</button>
          <button>Experiencia</button>
          <button>Admin</button>
        </div>
        <div className='user-section'>
        <button>
          Cambiar Tema
        </button>
        </div>
      </header>
      <main className='main-content'>
        <section className='starbucks-info'>
          <h1>¡Bienvenido a Starbucks!</h1>
          <p>Descubre nuestras deliciosas opciones de cafe, facturas, pasteleria, jugos y mucho mas</p>
        </section>
        <section className="content">
          <div className='img1'>
            <img src="/public/images/istockphoto-1177900338-612x612.jpg" alt="Coffe Machine" />
          </div>
          <div className='texto1'>
            <h2>Unite a algo más grande</h2>
            <p>Revisa las oportunidades que tenemos para vos</p>
            <p><a href="https://www.starbucks.com.ar/" target='_blank'>Ver mas</a></p>
          </div>
        </section>
        <section className='content2'>
          <div className='texto2'>
            <h2>¡PUMPKINLICIOUS!</h2>
            <p>Una temporada con tu favorito de siempre. Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!</p>
            <p>D cambiar teme 10 00</p>
          </div>
          <div className='img2'>
           <img src="/public/images/tienda.jpg" alt="Coffe Machine" />
          </div>
        </section>
      </main>

      <footer>

        <div className='footer'>
          
        </div>
      </footer>
    </div>
  )
}

export default App
