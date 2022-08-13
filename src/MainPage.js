import './MainPage.css';
import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solved: false,
            showP2: false,
            showP3: false,
            teamID: null
        };
    }

    togglePasswordShow = (inputID) => {
        var input = document.getElementById(inputID);
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }

        switch (inputID) {
            case 'q2-txt':
                this.setState({ showP2: !this.state.showP2 });
                break;
            case 'q3-txt':
                this.setState({ showP3: !this.state.showP3 });
                break;
            default:
                break;
        }
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
                    <form class="vstack gap-2 col-11 mx-auto">

                        <div class="form-floating">
                            <input type="text" class="form-control" id="username-txt" placeholder="Username"></input>
                            <label for="username-txt">Username</label>
                        </div>

                        <div class="input-group">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="q2-txt" placeholder="Password_Q2"></input>
                                <label for="q2-txt">Password_Q2</label>
                            </div>
                            <button class="btn btn-outline-primary" type="button" id="q2-button"
                                onClick={() => this.togglePasswordShow('q2-txt')}>
                                {this.state.showP2 ?
                                    <i className="bi bi-eye-fill"></i> :
                                    <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>

                        <div class="input-group">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="q3-txt" placeholder="Password_Q3"></input>
                                <label for="q3-txt">Password_Q3</label>
                            </div>
                            <button class="btn btn-outline-primary" type="button" id="q3-button"
                                onClick={() => this.togglePasswordShow('q3-txt')}>
                                {this.state.showP3 ?
                                    <i className="bi bi-eye-fill"></i> :
                                    <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>

                        <div id='button'>
                            <button type='button' id='player-answer-btn' class="btn btn-primary"
                                onClick={() => this.checkPlayerAnswers()}>
                                <span>LOGIN</span>
                            </button>
                        </div>
                        <br />
                    </form>
                </div>

            );
        }
    }
}

export default MainPage;