import React, { useEffect, useState } from 'react';

const usersData = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div>


        </div>
    );
};

export default usersData;