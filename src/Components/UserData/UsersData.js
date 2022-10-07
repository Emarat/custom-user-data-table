import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const usersData = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    return (
        <div>
            <h2 className='my-5'>Users Custom Table:</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map(data => <>
                            <tr key={data.id} user={data}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.company.name}</td>
                                <td>{data.address.zipcode}</td>
                            </tr>
                        </>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default usersData;