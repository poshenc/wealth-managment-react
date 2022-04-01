import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

import SignupForm from "../components/users/SignupForm";

function SignupPage() {
  const navigate = useNavigate()

  function onAddUser(userData) {
    const { name, email, password, passwordCheck } = userData

    if (!name || !email || !password || !passwordCheck) {
      return toast.error('All fields are required!')
    }

    if (password !== passwordCheck) {
      return toast.error('Current password do not match!')
    }

    axios.post('http://localhost:8000/signup', { userData })
      .then((response) => {
        const { data, statusText } = response
        if (statusText !== 'OK') {
          return toast.error(data.message)
        }
        toast.success(data.message)
        navigate('/signin') //redirect to sign in
      })
      .catch((error) => console.log(error))
  }

  return <section>
    <h1>Sign up</h1>
    <SignupForm onAddUser={onAddUser} />
  </section>
}

export default SignupPage;