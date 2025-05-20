import CustomCarousel from '@/components/CustomCarousel';
import LatestProjects from '@/components/LatestProjects';
import VideoMainPage from '@/components/VideoMainPage';
import customers from '@/data/customerReviews.json';
import Image from 'next/image';

function page() {
  const customer = customers[0];

  return (
    <div>
      <CustomCarousel />
      <VideoMainPage />
      <div className="w-full flex justify-center mt-24">
        <div className="relative rounded-xl grid grid-cols-[2fr_1fr] p-6 max-w-6xl w-full h-[15rem] bg-gray-300">
          <div className="w-[75%]">
            <h2 className="text-3xl mb-4">What customers say</h2>
            <p className="text-xl text-gray-600">{customer.review}</p>
            <p className=" absolute bottom-6">-{customer.customer}-</p>
          </div>

          <div className="relative w-full h-full ">
            <Image
              src={customer.image}
              fill
              className="object-cover rounded-xl"
              alt="image"
            />
          </div>
        </div>
      </div>
      <LatestProjects />
    </div>
  );
}
export default page;
