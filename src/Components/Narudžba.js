import React, {Component} from "react";
import {Link} from 'react-router-dom';

export class Narudžba extends Component{ 
    state={
        ime: '',
        prezime: '',
        adresa: '',
        broj_kartice: '',
    }
    onSubmit=e =>{alert("Vaša narudžba je uspješno zaprimljena!")}
    render()
    {

        return(
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

                <h2>Moje ime je {this.state.ime}, prezime {this.state.prezime}.</h2>
                
                <form>
                    <input class="forme" placeholder = 'Ime' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
                    <br></br>
                    <input class="forme" placeholder = 'Prezime' value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}/>
                    <br></br>
                    <input class="forme" placeholder = 'Adresa' value={this.state.adresa} onChange={e=>this.setState({adresa: e.target.value})}/>
                    <br></br>
                    <input class="forme" type="password" placeholder = 'Broj kartice' value={this.state.broj_kartice} onChange={e=>this.setState({broj_kartice: e.target.value})}/>
                    <br></br>
                    <button class="potvrdi" onClick={()=>this.onSubmit()}>Potvrdi</button>
                </form>

            </div>
        );

    }
}



export default Narudžba;
