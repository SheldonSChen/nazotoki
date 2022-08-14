import './MapPage.scss';
import React from 'react';

import map2F from './img/2F.png';
import map3F from './img/3F.png';
import map4F from './img/4F.png';

class MapPage extends React.Component {

    getColor = (teamID) => {
        switch (teamID) {
            case 'team1':
                return (<span className='blue'>blue</span>);
            case 'team2':
                return (<span className='green'>green</span>);
            case 'team3':
                return (<span className='red'>red</span>);
            default:
                return 'ERROR';
        }
    }

    getImgClass = (img, teamID) => {
        let classHidden = false;

        switch (img) {
            case '2F':
                classHidden = teamID === 'team2';
                break;
            case '3F':
                classHidden = teamID === 'team3';
                break;
            case '4F':
                classHidden = teamID === 'team1';
                break;
            default:
        }

        if (classHidden) {
            return 'col-sm-4 ignore';
        } else {
            return 'col-sm-4';
        }
    }

    render() {
        const teamID = this.props.teamID;
        return (
            <div className='map-page'>
                <h1 className='mp fade-in'>Welcome {teamID}.</h1>
                <h1 className='mp fade-in'> Here is your next mission.</h1>
                <h1 className='mp fade-in'>Go to the {this.getColor(teamID)} icons.</h1>
                <div className="row mp fade-in">
                    <img src={map2F} className={this.getImgClass('2F', teamID)} alt="2F 地図"></img>
                    <img src={map3F} className={this.getImgClass('3F', teamID)} alt="3F 地図"></img>
                    <img src={map4F} className={this.getImgClass('4F', teamID)} alt="4F 地図"></img>
                </div>

            </div>
        );
    }
}

export default MapPage;