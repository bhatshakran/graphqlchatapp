import React, { useRef, useState } from 'react';
import spanishguy from '../img/svgs/spanishguy.svg';
import blackgirl from '../img/svgs/blackgirl.svg';
import blackspecs from '../img/svgs/blackspecs.svg';
import child from '../img/svgs/child.svg';
import brownkid from '../img/svgs/brownkid.svg';
import floating from '../img/webp/floating.webp';
import signupsaly from '../img/webp/signupsaly.webp';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../graphql/mutations';
import { useLoggedContext } from '../utils/hooks';
import RiseLoader from 'react-spinners/RiseLoader';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const imgsArr = [blackgirl, blackspecs, child, brownkid, spanishguy];

const getRandomImg = () => {
  return imgsArr[Math.floor(Math.random() * imgsArr.length)];
};
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const AuthScreen = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useLoggedContext();
  const [avatarImg] = React.useState(() => getRandomImg());
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
        navigate('/chat');
      },
    }
  );

  if (l1 || l2) {
    return (
      <div className='flex justify-center flex-col items-center h-screen gap-12'>
        <RiseLoader
          color='#36d7b7'
          loading={true}
          cssOverride={override}
          size={30}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
        <h6 className='text-2xl font-mustica'>Authenticating...</h6>
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
    <div className=' h-auto md:h-screen  flex flex-wrap w-full gap-y-8  font-vistol overflow-hidden'>
      <form
        onSubmit={handleSubmit}
        ref={authForm}
        className='w-full md:w-1/2 bg-white flex items-center flex-col '
      >
        <div className='p-8 text-left w-full '>
          <Link to='/' className='text-secondary font-acworth hover:text-black'>
            Go back{' '}
          </Link>
        </div>
        <div className='flex justify-center w-full items-center h-full'>
          <div className='flex flex-col bg-white gap-8 w-72'>
            {signupData && (
              <div className='text-green-500 flex flex-col gap-1'>
                <div className='flex gap-1'>
                  <h6 className='capitalize'>
                    {signupData.signupUser.firstName}
                  </h6>
                  <span>signed up</span>
                  <CheckCircleIcon />
                </div>
                <div>
                  <Link to='/login' className='text-secondary font-acworth'>
                    You can now Login
                  </Link>
                </div>
              </div>
            )}
            {e1 && <div severity='error'>{e1.message}</div>}
            {e2 && <div severity='error'>{e2.message}</div>}
            <div className='font-acworth text-3xl flex flex-col justify-center gap-6 items-center'>
              <img
                src={avatarImg}
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
                className='font-acworth text-secondary w-auto cursor-pointer hover:text-black'
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
              className='bg-secondary text-white p-2 rounded-full hover:border-secondary hover:border hover:bg-white hover:text-secondary ease-in-out '
              type='submit'
            >
              {showLogin ? 'Login' : 'Signup'}
            </button>
          </div>
        </div>
      </form>
      <div className='w-full bg-black md:w-1/2  login-page flex items-center justify-center relative '>
        <div>
          {showLogin ? (
            <img src={floating} alt='loginimg' width={500} height={800} />
          ) : (
            <img src={signupsaly} alt='loginimg' width={500} height={800} />
          )}
        </div>
        <div className='text-white absolute bottom-20 text-center'>
          <h2 className='text-6xl font-acworth'>Chatter</h2>
          <p className='font-mustica opacity-80'>Connect with your gang!</p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
