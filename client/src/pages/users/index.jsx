import axios from "axios"
import { Link } from "react-router-dom"
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import '../../styles/user/index.scss';
import { useState } from 'react';
import { createModal, destroyModal, useModals } from '../../utils/modal';
import Modal from "../../modals"
import useFetch from "../../hooks/useFetch";
import { UserHead, UserTable } from "../../components";


export const Users = () => {

    const modals = useModals()


    const [role, setRole] = useState('');
    const [isActive, setIsActive] = useState('');

    const handleFilterApply = (selectedRole, selectedIsActive) => {
        setRole(selectedRole);
        setIsActive(selectedIsActive);
        destroyModal()
    };

    const { data, loading, error, reFetch } = useFetch(`http://localhost:5000/api/user?role=${role}&isActive=${isActive}`)


    if (loading) return "loading"
    if (error) return "there is a problem"

    return (
        <div className="users">
            <div className="container">
                <div className="responsive">
                    <div className="content">
                        <table className="table">

                            {/* thead */}
                            <UserHead />

                            {/* user table */}
                            <tbody className="body">
                                {data.users && data.users.map(user => (
                                    <UserTable key={user.id} user={user} reFetch={reFetch} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='buttonContainer'>
                        <button className='refresh' onClick={reFetch}>Refresh Data</button>
                        <button className='filter' onClick={() => {
                            createModal("dataFilter")
                        }}>Filter Data</button>
                    </div>
                </div>
            </div>
            {modals.length > 0 && <Modal data={handleFilterApply} />}
        </div>
    );
};
