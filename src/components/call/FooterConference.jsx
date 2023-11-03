import { useAVToggle } from "@100mslive/react-sdk";
import { useHMSActions } from "@100mslive/react-sdk";
import { CallState } from "../../context/CallProvider";
import {
  PhoneOutlined,
  AudioMutedOutlined,
  AudioOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";

function FooterConference() {
  const hmsActions = useHMSActions();
  const { setCallOngoing, setCallType, callType } = CallState();
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();

  const leaveRoom = () => {
    hmsActions.leave();
    setCallOngoing(false);
  };

  const handleVideo = () => {
    toggleVideo();
    if (isLocalVideoEnabled) {
      setCallType("audio");
    } else {
      setCallType("video");
    }
  };

  useEffect(() => {
    if (isLocalVideoEnabled && callType === "audio") {
      toggleVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callType]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {isLocalAudioEnabled ? (
        <AudioOutlined
          onClick={toggleAudio}
          className="btn-control"
          style={{ backgroundColor: "rgb(56, 178, 172)" }}
        />
      ) : (
        <AudioMutedOutlined
          onClick={toggleAudio}
          className="btn-control"
          style={{ backgroundColor: "gray" }}
        />
      )}
      {isLocalVideoEnabled ? (
        <VideoCameraOutlined
          onClick={handleVideo}
          className="btn-control"
          style={{ backgroundColor: "rgb(56, 178, 172)" }}
        />
      ) : (
        <VideoCameraOutlined
          onClick={handleVideo}
          className="btn-control"
          style={{ backgroundColor: "gray" }}
        />
      )}
      <PhoneOutlined
        onClick={leaveRoom}
        className="btn-control"
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
}

export default FooterConference;
