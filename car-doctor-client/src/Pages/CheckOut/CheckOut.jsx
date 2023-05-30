import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const number = form.number.value;

        const order = {
            customerName: name,
            email,
            date,
            number,
            serviceName: title,
            serviceId: _id,
            servicePrice: price,
            img
        }

        fetch("https://car-doctor-server-sable-seven.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Booking Successful!',
                        'Service added to your account!',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-5">Book Service : {title}</h1>
            <div className="bg-[#F3F3F3] p-5 md:p-20 rounded-md my-9 md:my-20">
                <form onSubmit={handleCheckOut}>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <input type="text" required name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="date" required name="date" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="email" required name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="text" required name="number" placeholder="Your Phone" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="Your Message" defaultValue="" className="textarea textarea-bordered textarea-lg w-full h-60" ></textarea>
                        </div>
                        <div>
                            <input className="btn btn-error btn-block" type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;