import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto my-16 md:my-28 gap-3">
            <div className="relative">
                <img className="w-2/3 rounded-lg" src={person} alt="" />
                <img className="w-1/2 absolute top-1/2 right-5 rounded-lg border-8 border-white" src={parts} alt="" />
            </div>
            <div className="space-y-5">
                <h4 className="text-[#FF3811] font-bold md:font-extrabold text-2xl">
                    About Us
                </h4>
                <h2 className="w-4/5 font-bold text-4xl md:text-5xl">
                    We are qualified & of experienced in this field
                </h2>
                <p className="text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                </p>
                <button className="btn bg-[#FF3811] text-white rounded-md border-none">
                    Get More Info
                </button>
            </div>
        </div>
    );
};

export default About;