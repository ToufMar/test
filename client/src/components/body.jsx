import React from 'react';
import { withStyles } from '@material-ui/core';
import Languette from './languette.jsx';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
    },
};


class Body extends React.Component {

    displayLanguettes() {
        var myArray = [
            "Resto",
            "Bar",
            "Museum"
        ];
        var randomPlaces = [];
        for (var i = 0; i < 20; i++) {
            var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
            randomPlaces.push(
                <Languette name={randomItem} key={randomItem + i}></Languette>
                );
        }
        // console.log(randomPlaces);
        return (
            <div>
                {randomPlaces}
            </div>

        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div name='containerBody'>
                <form className={classes.container}>
                    <input type='textarea'></input>
                </form>
                <div>
                    {this.displayLanguettes()}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Body);