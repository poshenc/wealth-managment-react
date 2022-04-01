import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import SignupForm from "../components/users/SignupForm";

function SignupPage() {
  const navigate = useNavigate()

  function onAddUser(userData) {
    const { password, passwordCheck } = userData

    if (password !== passwordCheck) throw new Error('Passwords do not match!')
    
    axios.post('http://localhost:8000/signup', { userData })
      .then((response) => {
        navigate('/') //redirect to sign in
      })
      .catch((error) => console.log(error))
  }

  return <section>
    <h1>Sign up</h1>
    <SignupForm onAddUser={onAddUser} />
  </section>
}

export default SignupPage;