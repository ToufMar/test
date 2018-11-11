import React from 'react';
import { withStyles, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import axios from 'axios';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    inputMargin: {
        margin: '5%',
    },
    button: {
        marginTop: '10%'
    },
    cssLabel: {
        '&$cssFocused': {
            color: green[500],
        }
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: green[500],
        }
    }
};

class CreateForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        confirmEmail: '',
        pswd: '',
        confirmPassword: '',
    };

    displayBasic(datasBasic, classes) {

        const inputs = datasBasic.map((input, i) => {
            return (
                <FormControl className={classes.inputMargin} key={i}>
                    <InputLabel
                        FormLabelClasses={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}
                    >
                        {input}
                    </InputLabel>
                    <Input onChange={this.onChange.bind(this)} name={this.camelize(input)} classes={{ underline: classes.cssUnderline }}></Input>
                </FormControl>
            );
        });
        return inputs;
    }

    displayEmail(datasEmail, classes) {

        if (datasEmail) {
            return (datasEmail.map((input, i) => {
                return (
                    <FormControl type='email' className={classes.inputMargin} key={i}>
                        <InputLabel
                            FormLabelClasses={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                        >
                            {input}
                        </InputLabel>
                        <Input onChange={this.onChange.bind(this)} name={this.camelize(input)} classes={{ underline: classes.cssUnderline }}></Input>
                    </FormControl>
                );
            }))
        } else {
            return null;
        }
    }

    displayPswd(datasPswd, classes) {
        const inputs = datasPswd.map((input, i) => {
            return (
                <FormControl className={classes.inputMargin} key={i}>
                    <InputLabel
                        FormLabelClasses={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}
                    >
                        {input}
                    </InputLabel>
                    <Input onChange={this.onChange.bind(this)} type='password' name={this.camelize(input)} classes={{ underline: classes.cssUnderline }}></Input>
                </FormControl>
            );
        });
        return inputs;
    }


    sendDatas() {
        // const inputs = props;
        console.log("prout");
        // console.log('tamere');

        axios.post(
            'http://localhost:5000/inscription', {
                // lol: "lol",
                // lol2: "lol2"
                name: this.state.firstName
            }
        ).then(
            function (res) {
                console.log('client res:' + res.data.express.lol);
            }
        ).catch(
            function (err) {
                console.log(err);
            }
        );
    }

    camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    onChange({ target: { value, name } }) {
        // if (value.length < 8){
        //     console.log(e.target);
        // }

        this.setState({ [name]: value });

    }

    render() {

        const { classes } = this.props;

        const datasBasic = this.displayBasic(this.props.datas.basics, classes);
        const datasEmail = this.displayEmail(this.props.datas.email, classes);
        const datasPswd = this.displayPswd(this.props.datas.pswd, classes);

        const datasAction = this.props.datas.actions;
        return (
            <div className={classes.container}>
                {datasBasic}
                {datasPswd}
                {datasEmail}
                <Button onClick={() => this.sendDatas()} className={classes.button} variant="outlined" color="secondary">Submit</Button>
            </div>
        );
    }
}

export default withStyles(styles)(CreateForm);