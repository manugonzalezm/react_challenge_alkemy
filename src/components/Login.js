import React, { useState } from 'react'
import TextInput from './TextInput'
import { Card, Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

// Formulario de autenticación. Validado con la librería Formik
// Authentication form. Validation using Formik(library).
export default function Login(props) {
    const URL = "http://challenge-react.alkemy.org/";
    const [isLoading, setLoading] = useState(false);
    const handleClickLoad = () => setLoading(true);

    return (
        <div id="login">
            <Card id="loginCard">
                <Card.Img id="loginImg" variant="top" src="https://p4.wallpaperbetter.com/wallpaper/36/277/215/marvel-comics-dc-comics-batman-iron-man-wallpaper-preview.jpg" />
                <Card.Body>
                    <Card.Title id="loginTitle">Login</Card.Title>
                    <Card.Text className="my-2" id="loginText">
                    Ingresá para crear tu equipo de superhéroes
                    </Card.Text>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email(<span className="validations ">Dirección inválida</span>)
                                .required(<span className="validations ">Requerido</span>),
                            password: Yup.string()
                                .min(4, <span className="validations ">La contraseña debe tener más de 4 caracteres</span>)
                                .required(<span className="validations ">Requerido</span>)
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                handleClickLoad();
                                console.log(JSON.stringify(values, null, 2));
                                /* axios.post(URL, {
                                        email: values.email,
                                        password: values.password
                                    }, {
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    })
                                    .then((response) => {
                                        console.log(response);
                                        localStorage.setItem('hero_token', response.data.token);
                                        props.setLogged(true);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        alert("Los datos ingresados son incorrectos.")
                                    }); */ 

                                    //Código comentado por que Firebase no permite peticiones a URLs no seguras
                                    if(values.email==="challenge@alkemy.org" & values.password==="react"){
                                        localStorage.setItem('hero_token', "token");
                                        props.setLogged(true);
                                    } else {
                                        alert("Los datos ingresados son incorrectos.")
                                    }
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form id="formContainer">
                            <div className="my-2 inputs_login">
                                <TextInput 
                                    label="Email: "
                                    name="email"
                                    type="text"
                                    placeholder="challenge@alkemy.org"
                                />
                            </div>
                            <div className="my-2 inputs_login">
                                <TextInput 
                                    label="Contraseña: "
                                    name="password"
                                    type="password"
                                    placeholder="react"
                                />
                            </div>
                            <Button 
                                id="loginSubmit" 
                                variant="primary" 
                                bg="primary" 
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading…' : 'Ingresar'}
                            </Button>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    )
}
