import React from 'react';
import {Link} from 'react-router-dom';

import Bambi from './slike/bambi.jpg';
import Kinesko from './slike/kinesko.jpg';
import Kosarka from './slike/kosarka.jpg';
import Lola from './slike/lola.jpg';
import Magic from './slike/magic.jpg';
import Mega from './slike/mega.jpg';
import Orao from './slike/orao.jpg';
import Princeze from './slike/princeze.jpg';
import Scar from './slike/scar.jpg';
import Zmajj from './slike/zmajj.jpg';
import Tigar from './slike/tigar.jpg';
import Yoda from './slike/yoda.jpg';
import Zmaj from './slike/zmaj.jpg';
import Trisnje from './slike/trisnje.jpg';
import Zebra from './slike/zebra.jpg';
import Cvor from './slike/cvor.jpg'; 

function Majice() {
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
                <td class="stupci"><img class="roba" src={Bambi}></img></td>
                <td class="stupci"><img class="roba" src={Kinesko}></img></td>
                <td class="stupci"><img class="roba" src={Kosarka}></img></td>
                <td class="stupci"><img class="roba" src={Lola}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Magic}></img></td>
                <td class="stupci"><img class="roba" src={Mega}></img></td>
                <td class="stupci"><img class="roba" src={Orao}></img></td>
                <td class="stupci"><img class="roba" src={Princeze}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Scar}></img></td>
                <td class="stupci"><img class="roba" src={Zmajj}></img></td>
                <td class="stupci"><img class="roba" src={Tigar}></img></td>
                <td class="stupci"><img class="roba" src={Yoda}></img></td>
            </tr>

            <tr>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
                <td><button onClick={kosarica} class="kosarica">Dodaj u košaricu</button></td>
            </tr>

            <tr class="redovi">
                <td class="stupci"><img class="roba" src={Zmaj}></img></td>
                <td class="stupci"><img class="roba" src={Trisnje}></img></td>
                <td class="stupci"><img class="roba" src={Zebra}></img></td>
                <td class="stupci"><img class="roba" src={Cvor}></img></td>
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


export default Majice;
