import React from 'react';
import { withStyles, Tab } from '@material-ui/core';
import InscriptionForm from './InscriptionForm';
import Tabs from '@material-ui/core/Tabs';
import ConnectionForm from './Connection';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    container: {
        marginTop: '10%',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};


class MenuForm extends React.Component {


    state = { menu: 0 };

    handleHover = (e, value) => {
        const form = this.state.menu === 0 ? 1 : 0;

        this.setState({
            menu: form
        });
    }

    render() {

        const { classes, theme } = this.props;
        const { menu } = this.state;

        return (
            <div className={classes.container}>
                <Tabs
                    value={ menu }
                    onChange={this.handleHover}
                >
                    <Tab label='Inscription' />
                    <Tab label='Connection' />
                </Tabs>
                <SwipeableViews axis={theme.direction = 'x'}>
                    <div className={classes.formContainer}>
                        {menu === 0 && <InscriptionForm />}
                        {menu === 1 && <ConnectionForm />}
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MenuForm);