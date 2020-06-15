import React from 'react';
import {Link} from 'react-router-dom';

import Prva from './slike/1.jpg';
import Druga from './slike/2.jpg';
import Treca from './slike/3.jpg';
import Cetvrta from './slike/4.jpg';
import Peta from './slike/5.jpg';
import Sesta from './slike/6.jpg';
import Sedma from './slike/7.jpg';
import Osma from './slike/8.jpg';
import Deveta from './slike/9.jpg';

function Loodo() {
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


        <img class="modeli" src={Druga}></img>
        <img class="modeli" src={Prva}></img>
        <img class="modeli" src={Treca}></img>

        <p class="porukica">
            Veliki izbor odjeće u veličinama od XXS do XXXL
            <br></br>
            Odjeća je izrađena od prirodnih materijala najveće kvalitete

        </p>

        <img class="modeli" src={Cetvrta}></img>
        <img class="modeli" src={Peta}></img>
        <img class="modeli" src={Sesta}></img>

        <p class="akcija">
        AKCIJA u periodu od 21.6. do 1.7.2020.
        </p>

        <p class="porukica">
            
            Za kupljena dva artikla, na treći dobivate 50% popusta
            <br></br>
            Besplatna dostava za narudžbe iznad 300 kn
        </p>

        

        <img class="modeli" src={Sedma}></img>
        <img class="modeli" src={Deveta}></img>
        <img class="modeli" src={Osma}></img>


        
      
    </div>
  );
}

export default Loodo;
