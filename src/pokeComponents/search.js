import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
// var Pokedex = require("pokedex-promise-v2");
import Pokedex from 'pokedex-promise-v2'
import PokeCard from './pokeCard'

// export default class Search extends Component {

//     constructor() {
//         super()
//         this.state = {
//             textFieldValue: '',
//             name: "",
//             pokemonTypes: '',
//             pokemonID: null,
//             pokemonPic: '',
//             pokemonMoves: [],
//             renderSearch: false
//         }
//     }

//     handleChange = (event) => {
//         this.setState({ ...this.state, textFieldValue: event.target.value })
//         // this.setState({ ...this.state, pokemonProperties: event.target.value })
//         console.log(this.state.textFieldValue)
//     }

//     pokeSearch = (event) => {
//         if (event.key === "Enter") {

//             event.preventDefault()

//             let capLine = this.state.textFieldValue[0].toUpperCase() + this.state.textFieldValue.slice(1);

//             this.setState({ ...this.state, name: capLine, renderSearch : true })

//             var options = {
//                 protocol: "https",
//                 versionPath: "/api/v2/",
//                 cacheLimit: 5 * 1000, // 2s
//                 timeout: 5 * 1000, // 5s
//             };

//             var P = new Pokedex(options);

//             P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
//                 .then((response) =>
//                     response.types
//                         .map((type) => type.type)
//                         .map((inner) => inner.name)
//                         .join(", ")
//                 )
//                 .then((output) => this.setState({ ...this.state, pokemonTypes: output }))
//                 .catch((error) => console.log("There was an ERROR: ", error));

//             P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
//                 .then((response) => response.id)
//                 .then((output) => this.setState({ ...this.state, pokemonID: output }))
//                 .catch((error) => console.log("There was an ERROR: ", error));

//             P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
//                 .then((response) => response.sprites.front_default)
//                 .then((output) => this.setState({ ...this.state, pokemonPic: output }))
//                 .catch((error) => console.log("There was an ERROR: ", error));

//             P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
//                 .then((response) => response.moves.map(ele => ele.move.name))
//                 .then((output) => this.setState({ ...this.state, pokemonMoves: output }))
//                 .catch((error) => console.log("There was an ERROR: ", error));
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Pokemon Search</h3>
//                 <form /*className={classes.root}*/ noValidate autoComplete="off">
//                     <TextField id="filled-basic" color="secondary" label="Search" variant="filled" onKeyDown={this.pokeSearch} onChange={this.handleChange} />
//                 </form>
//                 {this.state.renderSearch && <PokeCard name={this.state.name} id={this.state.pokemonID} type={this.state.pokemonTypes} moves={this.state.pokemonMoves} pic={this.state.pokemonPic} />}
//             </div>
//         )
//     }
// }

const Search = () => {

    const [textFieldValue, setText] = useState('')
    const [name, setname] = useState('')
    const [pokemonTypes, setpokemonTypes] = useState('')
    const [pokemonID, setpokemonID] = useState(null)
    const [pokemonPic, setpokemonPic] = useState('')
    const [pokemonMoves, setpokemonMoves] = useState([])
    const [renderSearch, setrenderSearch] = useState(false)
    const [stats, setstats] = useState([])

    let handleChange = (event) => {
        setText(event.target.value)
        // this.setState({ ...this.state, pokemonProperties: event.target.value })
        // console.log(this.state.textFieldValue)
        console.log(textFieldValue)
    }

    let pokeSearch = (event) => {
        if (event.key === "Enter") {

            event.preventDefault()

            let capLine = textFieldValue[0].toUpperCase() + textFieldValue.slice(1);

            setname(capLine)
            setrenderSearch(true)

            var options = {
                protocol: "https",
                versionPath: "/api/v2/",
                cacheLimit: 5 * 1000, // 2s
                timeout: 5 * 1000, // 5s
            };

            var P = new Pokedex(options);

            P.getPokemonByName(textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) =>
                    response.types
                        .map((type) => type.type)
                        .map((inner) => inner.name)
                        .join(", ")
                )
                .then((output) => setpokemonTypes(output))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.id)
                .then((output) => setpokemonID(output))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.sprites.front_default)
                .then((output) => setpokemonPic(output))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.moves.map(ele => ele.move.name))
                .then((output) => setpokemonMoves(output))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.stats.map((type) => type.base_stat))
                .then((output) => setstats(output))
                .catch((error) => console.log("There was an ERROR: ", error));

        }
    }

    return (
        <div>
            <h3>Pokemon Search</h3>
            <form /*className={classes.root}*/ noValidate autoComplete="off">
                <TextField id="filled-basic" color="secondary" label="Search" variant="filled" onKeyDown={pokeSearch} onChange={handleChange} />
            </form>
            {renderSearch && <PokeCard name={name} id={pokemonID} type={pokemonTypes} moves={pokemonMoves} pic={pokemonPic} stats={stats} />}
        </div>
    )
}

export default Search

