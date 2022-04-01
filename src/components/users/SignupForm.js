import { useRef } from 'react'

import Card from "../ui/Card"
import classes from './SignupForm.module.css'

function SignupForm(props) {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const passwordCheckInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const enteredPasswordCheck = passwordCheckInputRef.current.value

    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      passwordCheck: enteredPasswordCheck
    }

    // console.log(userData)
    props.onAddUser(userData)

  }
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>User Name</label>
        <input type='text' required id='name' ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' required id='email' ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type='text' required id='password' ref={passwordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='passwordCheck'>Password Check</label>
        <input type='text' required id='passwordCheck' ref={passwordCheckInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Sign Up</button>
      </div>
    </form>
  </Card>
}

export default SignupForm