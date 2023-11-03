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
    <div>
    {friendliis.map((friendlii, index) =>(
        <div className='card m-2 border' key={index}>
            <p>{friendlii.name}</p>
            <CallButton user={friendlii} />
        </div>
    ))}
    </div>
  )
}
