import React from 'react';
import { withStyles } from '@material-ui/core';
import randomColor from 'randomcolor';
import LanguetteComponent from './languetteComponent';

const styles = {
    container: {
        width: '7vw',
        height: '4vh',
        textAlign: 'center',
        marginBottom: '0.5%',
        // backgroundColor: randomColor(),
        // borderTopRightRadius: '40%',
        borderBottomRightRadius: '40%',
    }
};

class Languette extends React.Component{
    
    state = {
        component: '',
        style: {

        }
    }


    onOver = (e) => {
        // var background = document.querySelector('div[name="containerBody"]');
        // background.style.backgroundColor = e.target.style.backgroundColor;<
        
        this.setState({
            component: this.state.style
        });
    }
    
    componentWillMount() {
        this.setState({ 
            style: randomColor(),
        });
    }

    render(){
        const { classes } = this.props;
        const name = this.props.name;
        const {component, style} = this.state;
        return(
            <div>
            <div onClick={this.onOver} className={classes.container} style={{ backgroundColor: style}}>
                {name}
            </div>
                <LanguetteComponent color={component}></LanguetteComponent>
            </div>
        );
    }
}  

export default withStyles(styles)(Languette);
