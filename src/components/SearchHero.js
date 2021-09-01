import React from 'react'
import TextInput from './TextInput'
import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

export default function SearchHero() {
    let history = useHistory();

    return (
            <Formik
                initialValues={{
                    heroName: '',
                }}
                validationSchema={Yup.object({
                    heroName: Yup.string()
                    .max(15, <span className="form_alert">Debe tener 15 caracteres o menos</span>)
                    .required(<span className="form_alert">Requerido</span>)
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        history.push(`/search/${values.heroName}`)
                    }, 400);
                }}
            >
                <Form id="searchBox">
                    <TextInput 
                        label=""
                        name="heroName"
                        type="text"
                        placeholder="Buscá tu héroe"
                    />
                    <Button variant="info" bg="info" type="submit" id="searchIcon">
                        <span className="material-icons xs-18">search</span>
                    </Button>
                </Form>
            </Formik>
    )
}
