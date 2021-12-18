import { TextField, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";


import { AppContext } from "../../Provider"
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
    modal: {
        [theme.breakpoints.up('sm')]: {

            marginLeft: 100,
        },
        position: 'absolute',

        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    textfield: {
        width: '100%',
        marginBottom: '10px',
    },
    Red: {
        color: 'red',
    },
    buttonSend: {
        backgroundColor: '#117CC3',
        border: '1px solid #117CC3',
        color: 'white',
        margin: 8,
    },
    buttonCancel: {
        border: '1px solid #117CC3',
        margin: 5,
    },
    wp: {
        padding: '0.5vw',
        backgroundColor: '#25D366',
        color: 'white',
    },
    wpCenter: {
        marginRight: '3px',
    }
}))


function Biografy() {
    const [Name, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [AvatarImg, setAvatar] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillLevel, setSkillLevel] = useState('');
    const [skillName, setSkillName] = useState('');
    const [user, setUser] = useState();
    const styles = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    setTimeout(
        function () {
            //document.getElementById('username').innerHTML = '';
        }
            .bind(this),
        5
    );
    const Singleskill = (props) => {

        setSkillName(props.name)
        setSkillLevel(props.proficiency)




    }
    const UserBiografy = (prop) => {


        if (AvatarImg != '') {



            return (<div>
                <Grid >
                    <Grid>
                        <Box>
                            <h3>{Name}</h3>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box>
                            <Avatar alt="Remy Sharp" src={AvatarImg} className={classes.large} />
                        </Box>
                    </Grid>
                    <Grid>
                        <Box>
                            <span>{title}</span>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid container xs={6}>
                        {skills.map((data, index) => {
                            if (data.proficiency != 'no-experience-interested') {
                                return (

                                    <div className={classes.activity_block}>
                                        <div className={classes.text} >

                                            <Grid item xs={12} sm={11} lg={10}>
                                                <Link to={{
                                                    pathname: '',
                                                    Activity: {
                                                        activityProps: data.name,
                                                        id: data.id

                                                    }
                                                }
                                                }
                                                    className={classes.link_style} >
                                                    <Button className="button-Skills" onClick={() => Singleskill(data)}>
                                                        {data.name}
                                                    </Button>


                                                </Link>
                                            </Grid>

                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Grid>
                    <Grid container xs={6}>
                        <Box><b>Skill name:{skillName}</b>
                            <br></br>
                            <span>Skill Level:{skillLevel}</span>
                        </Box>

                    </Grid>
                </Grid>
            </div>)
        } else {

            https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_7a6b70c22522c788caa0afcc210710d9faaf746c.jpg
            return (<div></div>)
        }

    }

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        style: { width: '5rem', height: '5rem' },
        borderColor: 'text.primary',
    };

    const onSubmit = async data => {

        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://bio.torre.co/api/bios/' + data.usuario,
            headers: {
                'Cookie': 'trackingId=rB8mf2G9xJQHBgxsKUHaAg=='
            }
        };

        axios(config)
            .then(function (response) {

                setAvatar(response.data.person.picture)
                setUserName(response.data.person.name)
                setTitle(response.data.person.professionalHeadline)
                setSkills(response.data.strengths)
                UserBiografy(response);
            })
            .catch(function (error) {
                console.log(error);
            });



    }
    const classes = useStyles();
    return (
        <div className="App">
            <Grid container className={classes.Container}>
                <Grid container xs={12}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid xs={12}>

                            <Box>
                                <div align="center">
                                    <h2>Buscar Usuario</h2>

                                </div>
                            </Box>
                            <Grid xs={12}>
                                <Box>
                                    <TextField ref={user} type="text" {...register("usuario")} label="Usuario" className={styles.textfield} variant="outlined" autoComplete="off" />
                                    {errors.usuario && <span className={styles.Red}>*Introduzca un Usuario</span>}

                                    <Button type="submit" className={styles.buttonSend}>Buscar</Button>
                                    <br /></Box>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>
                <Grid>
                    <div>

                        <Box className={classes.datePicker_Box} xs={12}>

                            {UserBiografy}
                        </Box>

                    </div>
                </Grid>

            </Grid>


        </div>
    );
}


export default Biografy;
