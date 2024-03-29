import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://car-doctor-server-sable-seven.vercel.app/bookings?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBooking(data)
                }
                else{
                    navigate("/login");
                }
            })
    }, [user?.email, navigate])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-sable-seven.vercel.app/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remainingBooking = booking.filter(book => book._id !== _id);
                        setBooking(remainingBooking);
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const handleBookingConfirm = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-sable-seven.vercel.app/bookings/${_id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ status: "confirmed" })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            const updatedBooking = booking.find(book => book._id === _id);
                            const remainingBooking = booking.filter(book => book._id !== _id);
                            updatedBooking.status = "confirmed";
                            const newBooking = [updatedBooking, ...remainingBooking];
                            setBooking(newBooking);
                        }
                    })
                Swal.fire(
                    'Confirmed!',
                    'Your Service has been Confirmed.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Your Bookings: {booking.length}</h2>

            {/* table */}
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service Name</th>
                            <th>Service Id</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map((book, id) => <tr key={id}>
                                <th>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-circle btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.serviceName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book.serviceId}
                                </td>
                                <td>
                                    ${book.servicePrice}
                                </td>
                                <td>{book.date}</td>
                                <th>
                                    {
                                        book.status === "confirmed" ?
                                            <div>
                                                Service Confirmed
                                            </div> :
                                            <button onClick={() => handleBookingConfirm(book._id)} className="btn btn-success btn-sm">Confirm</button>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;