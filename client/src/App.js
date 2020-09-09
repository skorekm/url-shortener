import React from 'react';
import * as yup from 'yup';
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Project,
  Words,
  Paragraph,
  Blockquote,
  Button
} from 'arwes';
import { Formik, Form, Field } from 'formik';

const schema = yup.object().shape({
  url: yup.string().url().required('This is required field'),
  slug: yup.string()
});

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate show>
        <Project
          animate
          header="Create short urls"
        >
          {anim => (
            <>
              <Paragraph>
                <Words
                  animate
                  show={anim.entered}
                >
                  Welcome traveler.
                  You have come a long way to create short urls
                  to the site of your choosing.
                  Be wise, with great power comes great
                  responsibility. Do not use links for
                  malicious sites and/or programs.
                  May the force be with you.
              </Words>
              </Paragraph>
              <Formik
                initialValues={{
                  url: '',
                  slug: ''
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  console.log(values)
                }}
              >

                <Form>
                  <Field type="url" name="url">
                    {({
                      field,
                      meta,
                    }) => (
                        <div>
                          <input type="text" placeholder="Url" {...field} />
                          {meta.touched && meta.error && (
                            <Blockquote data-layer='alert'>{meta.error}</Blockquote>
                          )}
                        </div>
                      )}
                  </Field>
                  <Field type="text" name="slug" />
                  <Button animate layer='success' type="submit">
                    Submit
                  </Button>
                </Form>

              </Formik>
            </>
          )}
        </Project>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
