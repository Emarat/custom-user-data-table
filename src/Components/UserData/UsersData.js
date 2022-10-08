import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';

const usersData = () => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUserData(data))



    }, [])


    const handleName = (e) => {
        setName(e.target.value);
    };


    const handleEmail = (e) => {
        setEmail(e.target.value);
    };



    useEffect(() => {
        const setData = userData.filter(user => {
            return (user.name === name && user.email === email);

        })
        setFilteredData(setData);

    }, [name && email])

    return (
        <div>
            <Form className="mb-3">
                <h2 className='my-3'>Enter Name & Email for Specific User Data</h2>
                <input className='mx-2' type="search" value={name} onChange={handleName} placeholder="Name" />
                <input type="search" value={email} onChange={handleEmail} placeholder="Email" />
            </Form>


            {
                filteredData.length < 1 ? (<>
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
                                    <tr key={data.id} data={data}>
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

                </>
                )
                    :
                    <>
                        <h2 className='my-5'>Your Searched Data:</h2>
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
                                    filteredData.map(data => <>
                                        <tr key={data.id} data={data}>
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
                    </>
            }
        </div>
    );
};

export default usersData;