import { withFormik, Formik } from "formik";
import * as React from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import {
  Button,
  Divider,
  Form,
  Input,
  Label,
  Progress,
} from "semantic-ui-react";
import * as Yup from "yup";

import * as S from "./styles";

const Login = props => {
  const {

    // handleLogin
  } = props; 

  const handleLogin = async ({email, password}) => {
    try {
      const signInData = await Auth.signIn(email, password)
    //   if (signInData) {
    //     this.setState({isLoggedIn: true})
    //   }
      props.history.push('/app')
    } catch (error) {
      console.log(error)
      return error
    }
  }
  
  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <h2>Log in to get access to your board</h2>
        <Formik
          initialValues={{ email: "testdrive@react-trello.com", password: "testdrive" }}
          onSubmit={async ({ email, password }, { setSubmitting }) => {
            setSubmitting(true);
            const error = await handleLogin({ email, password });
            if (error) {
              console.warn("error", error);
            }
            setSubmitting(false);
          }}

          // {
          //   handleSubmit: myHandleSubmit,
          //   mapPropsToValues: () => ({ email: 'testdrive@react-trello.com', password: 'testdrive' }),
          //   validationSchema: Yup.object().shape({
          //     email: Yup.string()
          //       .email()
          //       .required(),
          //     password: Yup.string().required(),
          //   }),
          // }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleReset,
            handleSubmit,
            isSubmitting,
            dirty,
          }) => {
            if (isSubmitting) {
              return (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                  }}>
                  <div style={{ width: "50%" }}>
                    <Progress percent={100} indicating />
                  </div>
                  <h2>Looking for the keys ...</h2>
                </div>
              );
            }

            return (<Form onSubmit={handleSubmit}>
              <Form.Field>
                <Label pointing="below" htmlFor="email">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Your email..."
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <S.Warning>A valid email is required</S.Warning>
                )}
              </Form.Field>
              <Divider />
              <Form.Field>
                <Label pointing="below" htmlFor="password">
                  Your Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password..."
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <S.Warning>Enter your password</S.Warning>
                )}
              </Form.Field>
              <Button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}>
                Reset
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              {errors && (
                <h2>
                  No such user found. Maybe try{" "}
                  <Link to="/signup">signing up</Link>
                </h2>
              )}
            </Form>)
          }}
        </Formik>
        <br />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

// const myHandleSubmit = async (
//   { email, password },
//   { setSubmitting, props, setError },
// ) => {
//   setSubmitting(true)
//   const error = await props.handleLogin({ email, password })
//   if (error) {
//     setError('failed to login')
//   }
//   setSubmitting(false)
// }

export default Login;
