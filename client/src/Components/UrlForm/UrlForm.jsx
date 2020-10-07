import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Heading, Blockquote, Link } from 'arwes';
import { Formik, Field } from 'formik';
import { FormContainer, SubmitButton } from './UrlForm.styles';


const schema = yup.object().shape({
  url: yup.string().url().required('This is required field'),
  slug: yup.string()
});

export const UrlForm = () => {
  const [createdLink, setCreatedLink] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <Formik
      initialValues={{
        url: '',
        slug: ''
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        //TODO: Defo need refactoring
        setCreatedLink('');
        setErrorMessage('')
        axios.post('/api/url/', { ...values })
          .then(res => {
            setCreatedLink(`${window.location.origin}/api/${res.data.slug}`);
          })
          .catch(err => {
            setErrorMessage('Something went wrong, slug seems to be in use');
          })
      }}
    >
      <>
        <FormContainer>
          <Heading node="h2">Submit url</Heading>
          <Field type="url" name="url">
            {({
              field,
              meta,
            }) => (
                <div>
                  <input type="text" placeholder="URL (Required)" {...field} />
                  {meta.touched && meta.error && (
                    <Blockquote data-layer='alert'>{meta.error}</Blockquote>
                  )}
                </div>
              )}
          </Field>
          <Field type="url" name="slug">
            {({
              field,
            }) => (
                <div>
                  <input type="text" placeholder="SLUG" {...field} />
                </div>
              )}
          </Field>
          <SubmitButton animate layer='success' type="submit">
            Submit
        </SubmitButton>
        </FormContainer>
        {createdLink && (
          <Blockquote data-layer="success">
            This is your short url <Link href={createdLink}>{createdLink}</Link>
          </Blockquote>
        )}
        {errorMessage && <Blockquote data-layer="alert">{errorMessage}</Blockquote>}
      </>
    </Formik>
  )
}