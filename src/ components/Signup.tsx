import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import close from '../images/close.png'
import facebook from '../images/facebook.png';
import google from '../images/google.png';
import apple from '../images/apple.png';
import mail from '../images/mail.png';
import mobile from '../images/mobile.png';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/setup';

interface SignProps {
  setSign?: any;
}

const Signup = (props: SignProps) => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState('');

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                <button onClick={() => props.setSign(false)} className="cursor-pointer">
                  <img className='w-5 h-5' src={close}/>
                </button>
                <h3 className="ml-28 text-base font-bold leading-6 text-gray-900" id="modal-title">
                  {phone ? "Confirm your phone number" : "Log in or sign up"}
                </h3>
              </div>
              <hr className="mt-4" />
              <h1 className="mt-4 font-semibold text-2xl ml-5">{!phone && 'Welcome to Airbnb.'}</h1>
              {email ? (
                <input
                  type="text"
                  className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Email"
                  required
                />
              ) : (
                <PhoneInput
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  placeholder="Phone number"
                  inputStyle={{ width: '453px', height: '50px', fontSize: '17px' }}
                  containerStyle={{ marginTop: '15px', marginLeft: '20px' }}
                />
              )}
              {email && (
                <input
                  type="text"
                  className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Password"
                  required
                />
              )}
              <div id="recaptcha" className='mt-3 ml-5'></div>
              {phone && (
                <button
                  onClick={sendOtp}
                  className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12"
                >
                  Send OTP
                </button>
              )}
              {user && (
                <input
                  type="text"
                  onChange={(e) => setOtp(e.target.value)}
                  className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Otp"
                  required
                />
              )}
              {otp && (
                <button
                  onClick={verifyOtp}
                  className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12"
                >
                  Verify OTP
                </button>
              )}
              <h1 className="text-xs ml-5 mt-3">
                We will confirm your phone number by phone or text. Regular text messaging and data rates apply. privacy
                policy
              </h1>
              <button className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded mt-3 w-11/12">
                {email ? 'Agree and Continue' : 'Continue'}
              </button>
              <h1 className="text-center mt-3">or</h1>
              {!phone && <div className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-lg border-black">
                <img src={facebook} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with Facebook</h1>
              </div>}
              {!phone && <div
                onClick={googleSignin}
                className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black"
              >
                <img src={google} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with Google</h1>
              </div>}
              {!phone && <div className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black">
                <img src={apple} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with Apple</h1>
              </div>}
              {!email ? (
                <div
                  onClick={() => setEmail(true)}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black"
                >
                  <img src={mail} className="w-4 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Email</h1>
                </div>
              ) : (
                <div
                  onClick={() => setEmail(false)}
                  className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-lg border-black"
                >
                  <img src={mobile} className="w-4 h-6 ml-3" />
                  <h1 className="ml-24">Continue with Phone</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


