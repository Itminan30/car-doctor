import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://car-doctor-server-sable-seven.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="w-11/12 md:w-4/5 mx-auto my-10">
            <div className="text-center space-y-3">
                <h4 className="text-[#FF3811] text-xl font-bold">
                    Service
                </h4>
                <h2 className="text-4xl font-bold">
                    Our Service Area
                </h2>
                <p className="text-sm text-[#737373] w-3/4 md:w-1/2 mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;