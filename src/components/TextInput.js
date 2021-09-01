import React from 'react'
import { useField } from 'formik'

export default function TextInput({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name} >{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
