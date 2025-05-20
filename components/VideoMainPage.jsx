'use client';

function VideoMainPage() {
  return (
    <section className="w-full flex justify-center mt-24 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Video */}
        <div className="w-full lg:w-1/2 aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/ec_fXMrD7Ow?autoplay=1&mute=1&loop=1&playlist=ec_fXMrD7Ow"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-4 leading-snug">
            Your Architect for Luxurious, Modern, and Atmospheric Designs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            CLNA is a dynamic and passionate architecture studio with a
            dedicated team of experienced and enthusiastic architects. Based in
            Amsterdam, the firm specializes in exclusive residential design,
            always placing the client at the center of the process. By actively
            involving the end user throughout the design journey, CLNA creates
            personal, surprising, and one-of-a-kind dream homes. Each design
            reflects the client’s vision and bears the unmistakable signature of
            CLNA Architects. Our goal is not only to create stunning
            architecture, but to shape spaces that truly feel like home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoMainPage;
