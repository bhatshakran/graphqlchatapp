import React, { useRef, useState } from 'react';
import uncle from '../img/svgs/uncle.svg';
import blackgirl from '../img/svgs/blackgirl.svg';
import blackspecs from '../img/svgs/blackspecs.svg';
import child from '../img/svgs/child.svg';
import brownkid from '../img/svgs/brownkid.svg';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../graphql/mutations';
import { useLoggedContext } from '../utils/hooks';

const imgsArr = [blackgirl, blackspecs, child, brownkid];

const getRandomImg = () => {
  return imgsArr[Math.floor(Math.random() * imgsArr.length)];
};

const AuthScreen = () => {
  const { loggedIn, setLoggedIn } = useLoggedContext();

  const [formData, setFormData] = useState({});
  const [showLogin, setShowLogin] = useState(true);
  const authForm = useRef(null);
  const [signupUser, { data: signupData, loading: l1, error: e1 }] =
    useMutation(SIGNUP_USER);
  const [loginUser, { data: loginData, loading: l2, error: e2 }] = useMutation(
    LOGIN_USER,
    {
      onCompleted(data) {
        localStorage.setItem('jwt', data.signinUser.token);
        setLoggedIn(true);
      },
    }
  );

  if (l1 || l2) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading....
        <h6>Authenticating...</h6>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin) {
      // signinuser
      loginUser({
        variables: {
          signinInfo: formData,
        },
      });
    } else {
      signupUser({
        variables: {
          details: formData,
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={authForm}
      className='bg-black h-screen text-white'
    >
      <div className='flex justify-center w-full items-center h-full'>
        <div className='flex flex-col bg-black gap-8 w-72'>
          {signupData && (
            <div severity='success'>
              {signupData.signupUser.firstName} Signed Up
            </div>
          )}
          {e1 && <div severity='error'>{e1.message}</div>}
          {e2 && <div severity='error'>{e2.message}</div>}
          <div className='font-acworth text-3xl flex flex-col justify-center gap-6 items-center'>
            <img
              src={getRandomImg()}
              alt='avatar'
              width='70px'
              height='70px'
              className='rounded-full'
            />
            <h5>{showLogin ? ' Login' : ' Signup'}</h5>
          </div>
          {!showLogin && (
            <>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange}
                required
                className='bg-transparent border-b border-gray-500 focus:outline-none focus:border-secondary'
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange}
                required
                className='bg-transparent border-b border-gray-500 focus:outline-none focus:border-secondary'
              />
            </>
          )}

          <input
            type='email'
            name='email'
            label='email'
            placeholder='Email'
            variant='standard'
            onChange={handleChange}
            required
            className='bg-transparent border-b border-gray-500 focus:outline-none focus:border-secondary'
          />
          <input
            type='password'
            name='password'
            label='password'
            variant='standard'
            placeholder='Password'
            onChange={handleChange}
            required
            className='bg-transparent border-b border-gray-500 focus:outline-none focus:border-secondary'
          />
          <div className='w-full'>
            <h3
              className='font-acworth text-secondary w-auto cursor-pointer hover:text-white'
              onClick={() => {
                setShowLogin(!showLogin);
                setFormData({});
                authForm.current.reset();
              }}
            >
              {showLogin ? ' Signup' : 'Login'}
            </h3>
          </div>
          <button
            className='bg-secondary text-primary p-2 rounded-full hover:bg-white hover:text-black ease-in-out '
            type='submit'
          >
            {showLogin ? 'Login' : 'Signup'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthScreen;
