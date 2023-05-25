// import { useLoaderData } from "react-router-dom";

const CheckOut = () => {

    // const service = useLoaderData();
    return (
        <div className="w-4/5 mx-auto">
            <div className="bg-[#F3F3F3] p-5 md:p-20 rounded-md my-9 md:my-20">
                <form>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control w-full">
                                <input type="text" required name="firstName" placeholder="First Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="text" required name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="text" required name="number" placeholder="Your Phone" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <input type="email" required name="email" placeholder="Your Email" className="input input-bordered w-full" />
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