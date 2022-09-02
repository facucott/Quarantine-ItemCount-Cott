import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App (){
  return (
        <div className="App">
          <NavBar/>
          <div className="titulo">
            <br />
          <h2>¡Bienvenidos al sitio oficial de The Three Of Quarantine!</h2>
          <br />
          <p>
            <i>
                "... rock crudo y de alma góspel: interpretaciones minimalistas que dejan entreoír un lejano traqueteo, crujen en estrépito y se silencian..."
            </i>
          </p>
          <br />
          <hr />
          {/* <br />
          <p>
            <h5>
            The Three of Quarantine nace durante la - ya conocida - pandemia, como la puesta en marcha de un viejo proyecto de tres amigos: 
            </h5>
            <br />
          </p> */}
          </div>
            <ItemListContainer/>
            {/* <ItemListContainer name ="Gabriel Casiraghi" instrument= "Voz/Guiarra Acústica"/>
            <ItemListContainer name ="Juan Comi" instrument= "CigarBox/Guitarra Eléctrica/Coros"/>
            <ItemListContainer name ="Facundo Cott" instrument= "Washboard/Batería/Coros"/> */}
        </div>
  )
}

export default App;
