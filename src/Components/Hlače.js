import React from 'react';
import {Link} from 'react-router-dom';

import Bike from './slike/bike.jpg';
import Pokidane from './slike/pokidane.jpg';
import Cvjetne from './slike/cvjetne.jpg';
import Kosarkaa from './slike/kosarkaa.jpg';
import Kratke from './slike/kratke.jpg';
import Lanac from './slike/lanac.jpg';
import Mickey from './slike/mickey.jpg';
import Mrizaste from './slike/mrizaste.jpg';
import Paperbag from './slike/paperbag.jpg';
import Pojas from './slike/pojas.jpg';
import Prugaste from './slike/prugaste.jpg';
import Rebe from './slike/rebe.jpg';
import Slikee from './slike/slikee.jpg';
import Svitlece from './slike/svitlece.jpg';
import Pola from './slike/pola.jpg';
import Tuta from './slike/tuta.jpg';

function Hlače() {
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
                <td class="stupci"><img class="roba" src={Bike}></img></td>
                <td class="stupci"><img class="roba" src={Pokidane}></img></td>
                <td class="stupci"><img class="roba" src={Cvjetne}></img></td>
                <td class="stupci"><img class="roba" src={Kosarkaa}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Kratke}></img></td>
                <td class="stupci"><img class="roba" src={Lanac}></img></td>
                <td class="stupci"><img class="roba" src={Mickey}></img></td>
                <td class="stupci"><img class="roba" src={Mrizaste}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Paperbag}></img></td>
                <td class="stupci"><img class="roba" src={Pojas}></img></td>
                <td class="stupci"><img class="roba" src={Prugaste}></img></td>
                <td class="stupci"><img class="roba" src={Rebe}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Slikee}></img></td>
                <td class="stupci"><img class="roba" src={Svitlece}></img></td>
                <td class="stupci"><img class="roba" src={Pola}></img></td>
                <td class="stupci"><img class="roba" src={Tuta}></img></td>
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

export default Hlače;