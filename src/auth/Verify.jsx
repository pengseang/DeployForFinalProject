import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation } from 'react-router-dom';
export default function Verify() {
    const location = useLocation()
    console.log("Location",location);
  return (
    <Formik>
        <header>
            hello
        </header>
        
    </Formik>
  )
}
