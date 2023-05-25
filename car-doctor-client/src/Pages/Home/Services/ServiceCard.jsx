import { BsArrowRight } from 'react-icons/bs';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service = {} }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="border py-4 rounded-lg space-y-3">
            <div className="w-11/12 mx-auto">
                <img className="w-full h-56 object-cover rounded-lg" src={img} alt="" />
            </div>
            <h3 className="text-2xl font-bold w-11/12 mx-auto">
                {title}
            </h3>
            <div className="w-11/12 mx-auto text-lg text-[#FF3811] font-semibold flex items-center justify-between">
                <h4 className="">
                    Price: ${price}
                </h4>
                <Link to={`/checkout/${_id}`}>
                    <button>
                        <BsArrowRight></BsArrowRight>
                    </button>
                </Link>
            </div>
        </div>
    );
};

ServiceCard.defaultProps = {
    title: "Standerd Service",
    img: "No Image Found",
    service: {}
}

ServiceCard.propTypes = {
    service: PropTypes.object,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.oneOf([PropTypes.number, PropTypes.string])
}

export default ServiceCard;