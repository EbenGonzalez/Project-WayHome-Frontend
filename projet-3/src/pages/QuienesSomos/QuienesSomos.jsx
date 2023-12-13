import './QuienesSomos.css'

function QuienesSomos() {
  return (
    <div className='quienes-somos-container'>
        <header className='header'>
            <h2>Bienvenido a WAY-HOME</h2>
        </header>

        <section className='sectionQuienesSomos'>
            <h3>Historia de la Empresa</h3>
            <p>En WAY-HOME, nos apasiona conectar a animales necesitados con hogares amorosos. Fundada en 2023, nuestra plataforma ha sido un lugar de encuentro para dueños de mascotas que buscan el mejor cuidado para sus amigos peludos.</p>
        </section>

        <section className='sectionQuienesSomos'>
            <h3>Misión y Visión</h3>
            <p><strong>Misión:</strong> Facilitar la adopción y acogida temporal de perros y gatos, creando un espacio donde los dueños encuentren soluciones amorosas y temporales para sus mascotas.</p>
            <p><strong>Visión:</strong> Ser el puente que une a los amantes de los animales, proporcionando un ambiente de confianza y apoyo para todas las criaturas peludas.</p>
        </section>

        <section className='sectionQuienesSomos'>
            <h3>Equipo</h3>
            <span className='perfil'>
                ROBER
                <img src="" alt="" />
            </span>
            <span className='perfil'>
                EBEN
                <img src="" alt="" />
            </span>
            <span className='perfil'>
                CHRISTIAN
                <img src="" alt="" />
            </span>
        </section>
    </div>

  )
}

export default QuienesSomos