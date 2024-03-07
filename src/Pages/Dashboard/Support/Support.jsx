import { useRef } from "react";


const Support = () => {
    const videoRef = useRef(null);

    const toggleFullScreen = () => {
        const player = videoRef.current;
        if (player) {
            player.requestFullscreen();
        }
    };
    return (
        <div className=" min-h-screen ">
            <div className="banner-container mb-2 relative">
                <img className="w-full h-[300px] md:h-[500px]" src="https://i.postimg.cc/9FrVcxcq/222.jpg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold">Watch the video below to use the website</h1>
                </div>
            </div>
            <div className="video-container flex justify-center md:my-10 m-2">
                <iframe
                    ref={videoRef}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cgQqIUclZGU?si=2wOBDBjrHMQRbERK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex justify-center">
                <button onClick={toggleFullScreen}>Toggle Fullscreen</button>
            </div>
        </div>
    );
};

export default Support;
