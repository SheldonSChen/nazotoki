import './MainPage.scss';
import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solved: false,
            showMap: false,
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
                document.getElementById('q2-btn').classList.toggle('clicked');
                break;
            case 'q3-txt':
                this.setState({ showP3: !this.state.showP3 });
                document.getElementById('q3-btn').classList.toggle('clicked');
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
        if (this.state.showMap) {
            return (
                <div>
                    <h1>SUMMER BOOST 2022 NAZOTOKI</h1>
                </div>
            );
        } else {
            return (
                <div className={`all-items ${this.state.solved ? 'fade-out' : 'fade-in'}`}>
                    <div className='text-center'>
                        <i className="bi bi-lock-fill logo"></i>
                    </div>


                    <div className="vstack gap-4 col-11 col-md-5 mx-auto my-auto">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="username-txt" placeholder="Username"></input>
                            <label htmlFor="username-txt">Username</label>
                        </div>

                        <div className="input-group">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="q2-txt" placeholder="Password_Q2"></input>
                                <label htmlFor="q2-txt">Password_Q2</label>
                            </div>
                            <button className="btn btn-outline-primary" type="button" id="q2-btn"
                                onClick={() => this.togglePasswordShow('q2-txt')}>
                                {this.state.showP2 ?
                                    <i className="bi bi-eye-fill"></i> :
                                    <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>

                        <div className="input-group">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="q3-txt" placeholder="Password_Q3"></input>
                                <label htmlFor="q3-txt">Password_Q3</label>
                            </div>
                            <button className="btn btn-outline-primary" type="button" id="q3-btn"
                                onClick={() => this.togglePasswordShow('q3-txt')}>
                                {this.state.showP3 ?
                                    <i className="bi bi-eye-fill"></i> :
                                    <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>

                        <button type='button' id='player-answer-btn' className="btn btn-primary"
                            onClick={() => this.checkPlayerAnswers()}>
                            LOGIN
                        </button>
                    </div>
                </div>

            );
        }
    }
}

export default MainPage;