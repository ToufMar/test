import React from 'react';
import { withStyles} from '@material-ui/core';
import CreateForm from './CreateForm';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }, 
    inputMargin:{
        margin: '5%',
    },
};

class InscriptionForm extends React.Component{


    render(){
        const { classes} = this.props;

        var inputsTab = {
            basics: [ 'First Name', 'Last Name', 'Login'],
            email: ['Email', 'Confirm Email'],
            pswd: ['Password', 'Confirm Password'],
            action: {
                method: 'post',
                url: ''
            },
        };

        return(

            <div className={ classes.container }>
                <CreateForm datas={inputsTab}></CreateForm>
            </div>
        );
    }
}

export default withStyles(styles)(InscriptionForm);