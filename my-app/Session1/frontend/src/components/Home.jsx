import React, { Component } from 'react';

class Home extends Component {
    state = {
        players: ["", "", "", ""],
    }

    handleChange = (index, value) =>{
        // const noPlayer = this.state.players.map((name, index) => pIndex == index ? );
    }
    
    render() {
        const nameInput = this.state.players.map((name, index) =>{
            <input
                type="text"
                placeholder={`Player ${index+1} `}
                value={name}
                // as
            />
        })
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="title">
                            <h2>ScoreKeeper</h2>
                        </div>
                        <div class="main">
                            <form class="main-form">
                                
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
        );
    }

    onSubmit = e => {
        e.preventDefault();

    }
}

export default Home;