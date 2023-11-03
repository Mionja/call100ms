import React, { useEffect, useState } from 'react'
import CallButton from '../call/CallButton';
import instance from '../../constant/axiosConfig';

export default function UserList() {
    const [friendliis, setFriendliis] = useState([]);
    const fetchFriendliis = async () => {
        try {
            const res = await instance.get(`/user/friendlii`);
            setFriendliis(res.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchFriendliis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {friendliis.map((friendlii, index) => (
        <div key={index} style={{ flex: "0 0 300px", margin: "10px" }}>
          <div style={{ border: "1px solid #ccc", padding: "15px" }}>
            <p>{friendlii.name}</p>
            <CallButton user={friendlii} />
          </div>
        </div>
      ))}
    </div>
  );
}
