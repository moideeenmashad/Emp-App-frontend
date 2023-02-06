import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const Home = () => {

    const [employee, setEmployee] = useState([]);

    useEffect(
        () => {
            getData()
        }, []
    )


    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(
                (resp) => {
                    setEmployee(resp.data)
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <Navbar />
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <table class="table table-success table-striped-columns">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {employee.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                    </tr>

                                                }
                                            )}

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home