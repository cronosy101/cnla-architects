import reviews from '@/data/reviews.json';
import Image from 'next/image';

function page() {
  console.log(reviews);

  return (
    <div className="mt-52 px-4">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-80 w-full">
              <Image
                src={review.image}
                fill
                alt={`Photo of ${review.names}`}
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {review.names}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default page;
