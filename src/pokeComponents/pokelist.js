import React from 'react';
import Pokedex from 'pokedex-promise-v2'

class PokeList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    componentDidMount () {
        var options = {
            protocol: "https",
            versionPath: "/api/v2/",
            cacheLimit: 5 * 1000, // 2s
            timeout: 5 * 1000, // 5s
        };

        var P = new Pokedex(options);

        var interval = {
            limit: 100000,
            offset: 0
        }
        let out = []
        P.getPokemonsList(interval).then((response) => {})
        out.push(response.results)
        this.setState({results: out})
    }

    render() {
        return (
            <div className="PokeList">
                {/* {this.state.results[0].name} NO WORKEY*/}
                <ul>
                    {this.state.results.map(item => (
                        <li key={item.name}>
                            {item.name} ({item.url})
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PokeList;