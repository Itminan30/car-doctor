import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    
    const service = useLoaderData();
    return (
        <div>
            CheckOut {service.title}
        </div>
    );
};

export default CheckOut;