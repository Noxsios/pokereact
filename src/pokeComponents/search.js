import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// var Pokedex = require("pokedex-promise-v2");
import Pokedex from 'pokedex-promise-v2'

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            textFieldValue: '',
            pokemonTypes: '',
            pokemonID: null,
            pokemonPic: '',
            pokemonMoves: []
        }
    }

    handleChange = (event) => {
        this.setState({ ...this.state, textFieldValue: event.target.value })
        // this.setState({ ...this.state, pokemonProperties: event.target.value })
        console.log(this.state.textFieldValue)
    }

    pokeSearch = (event) => {
        if (event.key === "Enter") {

            event.preventDefault()

            var options = {
                protocol: "https",
                versionPath: "/api/v2/",
                cacheLimit: 5 * 1000, // 2s
                timeout: 5 * 1000, // 5s
            };

            var P = new Pokedex(options);

            P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) =>
                    response.types
                        .map((type) => type.type)
                        .map((inner) => inner.name)
                        .join(", ")
                )
                .then((output) => this.setState({ ...this.state, pokemonTypes: output }))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.id)
                .then((output) => this.setState({ ...this.state, pokemonID: output }))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.sprites.front_default)
                .then((output) => this.setState({ ...this.state, pokemonPic: output }))
                .catch((error) => console.log("There was an ERROR: ", error));

            P.getPokemonByName(this.state.textFieldValue.toLocaleLowerCase()) // with Promise
                .then((response) => response.moves.map(ele => ele.move.name))
                .then((output) => this.setState({ ...this.state, pokemonMoves: output }))
                .catch((error) => console.log("There was an ERROR: ", error));
        }
    }

    render() {
        return (
            <div>
                <h3>Pokemon Search</h3>
                <form /*className={classes.root}*/ noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Search" variant="filled" onKeyDown={this.pokeSearch} onChange={this.handleChange} />
                </form>
                <h2>{this.state.textFieldValue}</h2>
                <img src={this.state.pokemonPic} alt="Pokemon Front Default"></img>
                <h3>ID: {this.state.pokemonID}</h3>
                <h3>Type(s): {this.state.pokemonTypes}</h3>
                <FormControl>
                    <InputLabel htmlFor="filled-age-native-simple">Moves</InputLabel>
                    <Select
                        native
                        labelId="demo-simple-select-label"
                        id="moves-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <option aria-label="None" value="" />
                        <option>Moves Below:</option>
                        {this.state.pokemonMoves.sort().map(item => (<option value={item} >{item}</option>))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}



