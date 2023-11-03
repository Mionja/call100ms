import React from 'react'
import ReactDOM from 'react-dom/client'
import { HMSRoomProvider } from "@100mslive/react-sdk";
import CallProvider from './context/CallProvider.jsx';
import App from './App.jsx'
import './assets/style/index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallProvider>
      <HMSRoomProvider>
        <App />
      </HMSRoomProvider>
    </CallProvider>
  </React.StrictMode>
);
