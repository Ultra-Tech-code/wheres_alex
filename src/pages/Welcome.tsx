import { useConnect, useAccount } from '@puzzlehq/sdk';
import rightImageSrc from '../assets/alex_mic_left_tilt.png';
import leftImageSrc from '../assets/alex_mic_right_tilt.png';
import bottomImageSrc from '../assets/alexbottom.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@components/Button.js';
import adam_head from '../assets/adam_head.png';
import backgroundImage from '../assets/background-image.jpg';

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { loading, connect } = useConnect();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);

  return (
    <div className="flex  w-full items-stretch justify-between ">
      <div className='relative flex h-full w-full flex-col items-center justify-center'>

        <h1 className='text-24xl z-10 max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white'>
          WHERE'S
          <br />
          ADAM?
        </h1>
        <p className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'>
          A thrilling game showcasing the power of Aleo and the Puzzle
          multiparty privacy stack through a wager between friends!
        </p>
        <Button
          className='max-w-[250px] z-20'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        {/* <img
          src={adam_head}
          alt='Bottom Alex'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-3/5 max-w-[35%] transform object-contain'
        /> */}
      </div>
    </div>
  );
};