import React from 'react';
import {Link} from 'react-router-dom';

import Crna from './slike/crna.jpg';
import Crvena from './slike/crvena.jpg';
import Cvice from './slike/cvice.jpg';
import Cvjetna from './slike/cvjetna.jpg';
import Jeans from './slike/jeans.jpg';
import Kolet from './slike/kolet.jpg';
import Kratkav from './slike/kratkav.jpg';
import Metal from './slike/metal.jpg';
import Noga from './slike/noga.jpg';
import Patent from './slike/patent.jpg';
import Plava from './slike/plava.jpg';
import Plavapojas from './slike/plavapojas.jpg';
import Prsten from './slike/prsten.jpg';
import Ramenapuf from './slike/ramenapuf.jpg';
import Rupa from './slike/rupa.jpg';
import Svjetlucava from './slike/svjetlucava.jpg';

function Haljine() {
  return (
    <div>
        
        <Link to = "/" class = "loodo">LOODO</Link>
        
        <table class = "naslovna">
            <tr>
                <td>
                    <Link to = "/Majice" class = "povratak">Majice</Link>
                </td>
                <td>
                    <Link to = "/Hlače" class = "povratak">Hlače</Link>
                </td>
                <td>
                    <Link to = "/Haljine" class = "povratak">Haljine</Link>
                </td>
                <td>
                    <Link to = "/Narudžba" class = "povratak">Narudžba</Link>
                </td>
            </tr>
        </table>

    <br></br>

    <table class="tablica">

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Crna}></img></td>
                <td class="stupci"><img class="roba" src={Crvena}></img></td>
                <td class="stupci"><img class="roba" src={Cvice}></img></td>
                <td class="stupci"><img class="roba" src={Cvjetna}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Jeans}></img></td>
                <td class="stupci"><img class="roba" src={Kolet}></img></td>
                <td class="stupci"><img class="roba" src={Kratkav}></img></td>
                <td class="stupci"><img class="roba" src={Metal}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Noga}></img></td>
                <td class="stupci"><img class="roba" src={Patent}></img></td>
                <td class="stupci"><img class="roba" src={Plava}></img></td>
                <td class="stupci"><img class="roba" src={Plavapojas}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Prsten}></img></td>
                <td class="stupci"><img class="roba" src={Ramenapuf}></img></td>
                <td class="stupci"><img class="roba" src={Rupa}></img></td>
                <td class="stupci"><img class="roba" src={Svjetlucava}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>
            
        </table>
      
    </div>
  );
}

function kosarica(){
    alert("Dodali ste u košaricu!");
}

export default Haljine;