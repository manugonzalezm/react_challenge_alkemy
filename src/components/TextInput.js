import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function TextInputForm({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name} >(label)</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
