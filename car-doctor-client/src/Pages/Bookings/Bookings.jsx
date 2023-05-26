import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    console.log(user?.email);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [user?.email])

    console.log(booking);

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
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
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
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
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
                                    <button className="btn btn-error btn-sm">details</button>
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