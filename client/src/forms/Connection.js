import React from 'react';
import { withStyles} from '@material-ui/core';
import CreateForm from './CreateForm';

const s = {
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        formControl:{
            padding: '10px',
        }
};

class ConnectionForm extends React.Component{

    render(){
        const { classes } = this.props;
        
        const inputsTab = {
            basics: ['Login'],
            pswd: ['Password'],

            action: {
                method: 'post',
                url: ''
            }
        }
        return(
            <div className={ classes.container }>
                <CreateForm datas={inputsTab}></CreateForm>
            </div>
        );
    }
}

export default withStyles(s)(ConnectionForm);