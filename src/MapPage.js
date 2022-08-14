import './MapPage.scss';
import React from 'react';

import map2F from './img/2F.png';
import map3F from './img/3F.png';
import map4F from './img/4F.png';

class MapPage extends React.Component {

    getColor = (teamID) => {
        switch (teamID) {
            case 'team1':
                return 'blue';
            case 'team2':
                return 'green';
            case 'team3':
                return 'red';
            default:
                return 'ERROR';
        }
    }

    render() {
        const teamID = this.props.teamID;
        return (
            <div className='map-page'>
                <h1>
                    Welcome {teamID}. <br />
                    Here is your next mission. <br />
                    Go to the {this.getColor(teamID)} icons.
                </h1>
                <div className="row">
                    <img src={map2F} alt="2F 地図"></img>
                    <img src={map3F} alt="3F 地図"></img>
                    <img src={map4F} alt="4F 地図"></img>
                </div>

            </div>
        );
    }
}

export default MapPage;