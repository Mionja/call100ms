import { CallState } from '../../context/CallProvider';
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import Conference from './Conference';

export default function CallButton({ user }) {
  const { callConnecting, setCallConnecting } = CallState();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  const handleCall = async (e) => {
    e.preventDefault();
    if(!user.roomCode) return;
    setCallConnecting(true);
    const userName = "Client";
    const roomCode = user.roomCode;
    // use room code to fetch auth token
    const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });

    try {
      await hmsActions.join({ userName, authToken });
    } catch (e) {
      console.error(e);
    }
    setCallConnecting(false);
  };

  return (
    <div>
      {isConnected
      ? <Conference />
      : <button className="btn btn-dark m-3 w-50" onClick={handleCall}>
          Call
        </button>
      }
      {
        callConnecting && <p>Appel entrant...</p>
      }
    </div>
  );
}
