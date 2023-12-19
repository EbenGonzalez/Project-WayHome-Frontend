import './Contacto.css'

function Contacto() {
  return (
    <div id='principal2'>
        <header className='header' style={{ textAlign: 'center', fontFamily: 'monospace', letterSpacing: "5px" }}>
            <h1>CONTACTO</h1>
        </header>
        <div className='contacto' style={{ textAlign: 'center', fontFamily: 'monospace', letterSpacing: "2px" }}>
        
        <main className='left'>
            <h2>
                Si necesitas más información rellena el siguiente formulario
            </h2>
            <h4>
                Solicitar información
            </h4>
            <p>
                Selecciona esta opción si necesitas más información sobre la empresa
            </p>
            <hr className="line" />
            <h4>
                Quiero adoptar
            </h4>
            <p>
            Selecciona esta opción el motivo del contacto si deseas obtener más información sobre las distintas formas de voluntariado.
            </p>
            <hr className="line" />
            <h4>
                Quiero ser voluntario
            </h4>
            <p>
            Indica esta opción en el formulario si lo que deseas es recibir más información sobre las diferentes formas de voluntariado.
            </p>
        </main>

        <main className='right'>
            <form>
                <label htmlFor="nombre"> Nombre: </label>
                <input type="Text" id="nombre" name="nombre" required />

                <label htmlFor="apellido"> Apellido: </label>
                <input type="Text" id="apellido" name="apellido"/>

                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="telefono"> Telefono: </label>
                <input type="tel" id="telefono" name="telefono" required />

                <label for="motivo">Motivo del contacto:</label>
                <select id="motivo" name="motivo">
                    <option value=""></option>
                    <option value="voluntario">Voluntario</option>
                    <option value="acoger">Acoger</option>
                    <option value="adoptar">Adoptar</option>
                </select>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </main>
        </div>
    </div>
  )
}

export default Contacto