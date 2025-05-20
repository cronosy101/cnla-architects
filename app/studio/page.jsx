function page() {
  return (
    <div className="flex flex-col w-full items-center mt-52">
      <iframe
        width="1080"
        height="720"
        src="https://www.youtube.com/embed/CtLy8PXiL58?autoplay=1&mute=1&loop=1&playlist=CtLy8PXiL58"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className=" rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
}
export default page;
