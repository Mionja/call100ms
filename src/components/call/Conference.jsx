import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import FooterConference from "./FooterConference";
import './../../assets/style/Conference.css';

function Conference() {
  const peers = useHMSStore(selectPeers);
  return (
    <div className="conference-section">
      <h2>Conference</h2>

      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
      <FooterConference/>
    </div>
  );
}

export default Conference;
