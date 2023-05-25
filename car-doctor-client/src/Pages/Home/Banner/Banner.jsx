import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    const textWithGradient = <>
        <div className="absolute flex items-center w-full h-full gap-5 bg-gradient-to-r from-[#151515]">
            <div className="text-white absolute left-3 md:left-20">
                <h1 className="text-3xl md:text-6xl w-3/5 md:w-2/5 font-bold mb-6">
                    Affordable Price For Car Servicing
                </h1>
                <p className="w-9/12 md:w-3/5 mb-6">
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                    <button className="btn text-white bg-[#FF3811] rounded-md border-none">Discover More</button>
                    <button className="btn btn-outline border-white text-white rounded-md">Latest Project</button>
                </div>
            </div>
        </div>
    </>
    return (
        <div className="carousel md:w-4/5 h-[450px] md:h-[600px] mx-auto rounded-lg my-5 md:my-10">
            <div id="slide1" className="carousel-item relative w-full  ">
                <img src={img1} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full object-cover" />
                {textWithGradient}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;