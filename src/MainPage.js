import './MainPage.css';
import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solved: false,
            teamID: null
        };
    }

    checkPlayerAnswers = () => {
        const username = document.getElementById('username-txt').value.toLowerCase();
        const q2Answer = document.getElementById('q2-txt').value.toLowerCase();
        const q3Answer = document.getElementById('q3-txt').value.toLowerCase();

        let solved = ['team1', 'team2', 'team3'].includes(username) &&
            q2Answer === 'together' &&
            q3Answer === 'creative';

        if (!solved) {
            alert('LOGIN FAILED');
        } else {
            this.setState({ solved: true, teamID: username });
        }
    }

    render() {
        if (this.state.solved) {
            return (
                <div>
                    <h1>SUMMER BOOST 2022 NAZOTOKI</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <div class="box">
                        <div id='title'>
                            <h3>SUMMER BOOST 2022</h3>
                            <h3>NAZOTOKI LOGIN</h3>
                        </div>

                        <div id='username'>
                            <input type='text' id='username-txt' placeholder='username'></input>
                        </div>

                        <div id='q2'>
                            <input type='password' id='q2-txt' placeholder='password_q2'></input>
                        </div>

                        <div id='q3'>
                            <input type='password' id='q3-txt' placeholder='password_q3'></input>
                        </div>

                        <div id='button'>
                            <button type='button' id='player-answer-btn'
                                onClick={() => this.checkPlayerAnswers()}>
                                <span>LOGIN</span>
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            );
        }
    }
}

export default MainPage;