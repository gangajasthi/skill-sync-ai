// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import '../styles/Auth.css'

// function Login() {
//   const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false)
//   const [form, setForm] = useState({ email: '', password: '', remember: false })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     navigate('/dashboard')
//   }

//   return (
//     <div className="auth">
//       <div className="auth__glow auth__glow--one" aria-hidden="true"></div>
//       <div className="auth__glow auth__glow--two" aria-hidden="true"></div>

//       <Link to="/" className="auth__logo">
//         <span className="auth__logo-mark">S</span>
//         <span>SkillSync<span className="auth__logo-accent">AI</span></span>
//       </Link>

//       <div className="auth__card">
//         <div className="auth__header">
//           <h1>Welcome back</h1>
//           <p>Log in to continue building your career roadmap.</p>
//         </div>

//         <button className="btn btn--outline auth__google">
//           <span className="auth__google-icon">G</span> Continue with Google
//         </button>

//         <div className="auth__divider"><span>or log in with email</span></div>

//         <form className="auth__form" onSubmit={handleSubmit}>
//           <label className="auth__field">
//             <span>Email</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="you@example.com"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label className="auth__field">
//             <span>Password</span>
//             <div className="auth__password">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="button"
//                 className="auth__password-toggle"
//                 onClick={() => setShowPassword((v) => !v)}
//                 aria-label="Toggle password visibility"
//               >
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//             </div>
//           </label>

//           <div className="auth__row">
//             <label className="auth__checkbox">
//               <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
//               <span>Remember me</span>
//             </label>
//             <a href="#forgot" className="auth__link">Forgot password?</a>
//           </div>

//           <button type="submit" className="btn btn--primary auth__submit">Login</button>
//         </form>

//         <p className="auth__footer-text">
//           Don't have an account? <Link to="/register" className="auth__link auth__link--strong">Create Account</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Auth.css'


function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false
  })

  const [error, setError] = useState('')


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? checked
        : value
    }))

  }



  const handleSubmit = async (e) => {

    e.preventDefault()

    setError('')


    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        {
          email: form.email,
          password: form.password
        }
      )


      // console.log("Login Success:", response.data)


      // // Save JWT token
      // localStorage.setItem(
      //   "token",
      //   response.data.access_token
      // )


      // navigate('/dashboard')

      alert("Login successful!")

localStorage.setItem(
 "token",
 response.data.access_token
)

navigate('/dashboard')


    } catch (error) {

      console.log(error)

      setError(
        error.response?.data?.detail ||
        "Invalid email or password"
      )

    }

  }



  return (

    <div className="auth">

      <div className="auth__glow auth__glow--one"></div>
      <div className="auth__glow auth__glow--two"></div>


      <Link to="/" className="auth__logo">

        <span className="auth__logo-mark">
          S
        </span>

        <span>
          SkillSync
          <span className="auth__logo-accent">
            AI
          </span>
        </span>

      </Link>



      <div className="auth__card">


        <div className="auth__header">

          <h1>
            Welcome back
          </h1>

          <p>
            Log in to continue building your career roadmap.
          </p>

        </div>



        <button className="btn btn--outline auth__google">

          <span className="auth__google-icon">
            G
          </span>

          Continue with Google

        </button>



        <div className="auth__divider">

          <span>
            or log in with email
          </span>

        </div>



        <form
          className="auth__form"
          onSubmit={handleSubmit}
        >


          <label className="auth__field">

            <span>
              Email
            </span>


            <input

              type="email"

              name="email"

              placeholder="you@example.com"

              value={form.email}

              onChange={handleChange}

              required

            />

          </label>




          <label className="auth__field">

            <span>
              Password
            </span>


            <div className="auth__password">


              <input

                type={
                  showPassword
                  ? 'text'
                  : 'password'
                }

                name="password"

                placeholder="Enter your password"

                value={form.password}

                onChange={handleChange}

                required

              />



              <button

                type="button"

                className="auth__password-toggle"

                onClick={() =>
                  setShowPassword(!showPassword)
                }

              >

                {
                  showPassword
                  ? '🙈'
                  : '👁️'
                }

              </button>


            </div>


          </label>




          <div className="auth__row">


            <label className="auth__checkbox">


              <input

                type="checkbox"

                name="remember"

                checked={form.remember}

                onChange={handleChange}

              />


              <span>
                Remember me
              </span>


            </label>



            <a href="#forgot" className="auth__link">

              Forgot password?

            </a>


          </div>




          {
            error && (

              <p className="auth__error">

                {error}

              </p>

            )
          }




          <button

            type="submit"

            className="btn btn--primary auth__submit"

          >

            Login

          </button>



        </form>




        <p className="auth__footer-text">

          Don't have an account?

          <Link
            to="/register"
            className="auth__link auth__link--strong"
          >

            Create Account

          </Link>


        </p>



      </div>


    </div>

  )

}


export default Login