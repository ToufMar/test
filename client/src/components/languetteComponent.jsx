import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {

};

class LanguetteComponent extends React.Component{
    
    render(){
        const { color} = this.props;
        
        // var datas = this.props.datas;
        // console.log(this.props.datas)
        return(
            // <div>{datas}</div>
            <div style={{backgroundColor: color}}>lol</div>

        );
    }
}

export default withStyles(styles)(LanguetteComponent);
