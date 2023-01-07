import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const cancelModal = () => {
        setDeletingDoctor(null)
    }


    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })

                const data = await res.json();
                return data;
            } catch (error) {

            }

        }
    });

    const handleDelteDoctor = doctor => {
        console.log(doctor);
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`doctor ${doctor.name} is deleted successfully`)
                    refetch();
                }
            })
            .catch(error => console.log(error.name, error.message))
    }

    return (
        <div>
            <h3>Available  doctors are {doctors.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.special}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfirmationModal
                    title={`are sure want to delete`}
                    message={`if you delete you cannot cover the ${deletingDoctor.name}`}
                    successAction={handleDelteDoctor}
                    modalData={deletingDoctor}
                    cancelModal={cancelModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctor;