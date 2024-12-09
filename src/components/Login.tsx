import React from "react";
import { Formik } from "formik";

const Login = () => (
  <div>
    <h1 className="signup">Login Form</h1>
    <Formik
      initialValues={{ email: "", password: "", check:"" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        else if(!values.password){
          errors.password="Required"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if (
            values.email === localStorage.getItem("email") &&
            values.password === localStorage.getItem("password")
          ) {
            alert("Login Successful");
          } else {
            alert("Wrong Credentials");
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="center1">
          <form onSubmit={handleSubmit}>
            <div className="space">
              <div>
                <label className="texts">Email</label>
              </div>
              <input
                className="inputs"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.check[0]==='on'?localStorage.getItem('email'):values.email}
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div className="space">
              <div>
                <label className="texts">Password</label>
              </div>
              <input
                className="inputs"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.check[0]==='on'?localStorage.getItem('password'):values.password}
              />
            </div>
            {errors.password && touched.password && errors.password}
            <div className="space"></div>
            <div>
              <div>
                <label className="texts">Remember Me</label>
              </div>
              <input
                type="checkbox"
                className="inputs"
                name="check"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button
              className="btns space"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  </div>
);

export default Login;
