import { useDisconnect, shortenAddress, useAccount } from '@puzzlehq/sdk';
import Button from './Button';
import { useGameStore } from '@state/gameStore';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const { account } = useAccount();
  const { disconnect, loading } = useDisconnect();
  const navigate = useNavigate();

  const svgContent = `
  <svg viewBox="103.67 34.863 242.201 97.247" xmlns="http://www.w3.org/2000/svg">
    <text style="fill: rgb(255, 255, 255); fill-rule: evenodd; font-family: Arial, sans-serif; font-size: 49px; font-weight: 700; stroke-width: 5px; white-space: pre;" transform="matrix(1, 0, 0, 1, -103.66972351074219, 8.256880760192871)"><tspan style="letter-spacing: 12px;" x="212.844" y="66.972">WHERE</tspan><tspan x="212.844" dy="1em">​</tspan><tspan>IS ADAM?</tspan></text>
  </svg>
`;

const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

  return (
    <div className='flex w-full items-stretch justify-between gap-5  p-4'>
      {account && account.address ? (
        <>
          <button
            onClick={() => {
              useGameStore.getState().clearFlowStores();
              navigate('/');
            }}
          >
            <img
              loading='lazy'
              src={svgDataUri}
              className='aspect-[2.95] w-[161px] max-w-full self-stretch overflow-hidden fill-white object-cover object-center'
            />
          </button>
          <Button
            size='sm'
            color='white'
            className='w-fit'
            onClick={disconnect}
            disabled={loading}
          >
            {shortenAddress(account.address)}
          </Button>
        </>
      ) : (
        <div className='w-full self-stretch' />
      )}
    </div>
  );
};
