import React from "react";
import { Formik } from "formik";
const SignUp = () => (
  <div>
    <h1 className="signup">SignUp Form</h1>
    <Formik
      initialValues={{ email: "", password: "", cpassword: "", score: 0 }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        let checknum = "1234567890";
        let checkstr = "!@#$%^&*()`_+";
        let checklower = "abcdefghijklmnopqrstuvwxyz";
        let checkhigher = checklower.toUpperCase();
        let text = values.password
        let low=0
        let high=0
        let str=0
        let num=0
        for (let char of text) {
          let st = "";
          st += char;
          if (checknum.includes(st)) {
            num=1
          } else if (checkstr.includes(st)) {
            str=1
          } else if (checklower.includes(st)) {
            low=1
          } else if (checkhigher.includes(st)) {
            high=1
          }
          values.score=num+str+low+high
        }
        if (values.score === 1) {
          errors.password = "Weak Password";
        } else if (values.score === 2) {
          errors.password = "Medium Password";
        } else if (values.score === 3) {
          errors.password = "Strong Password";
          console.log(values.score);
        } if (values.password !== values.cpassword) {
          errors.cpassword = "Passwords do not match";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          if(localStorage.getItem('email')!==values.email && localStorage.getItem('password')!==values.password){
            localStorage.setItem('email',values.email)
            localStorage.setItem('password',values.password)
          }else{
            alert("Already an User")
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
                value={values.email}
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
                value={values.password}
              />
            </div>
            {errors.password && touched.password && errors.password}
            <div className="space">
              <div>
                <label className="texts">Confirm Password</label>
              </div>
              <input
                className="inputs"
                type="password"
                name="cpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpassword}
              />
            </div>
            {errors.cpassword && touched.cpassword && errors.cpassword}
            <div>
              <button
                className="btns space"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  </div>
);

export default SignUp;
