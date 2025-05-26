import Link from 'next/link';
import blogs from '@/data/blogs.json';
import Image from 'next/image';

function page() {
  return (
    <div className="mt-52 px-4">
      <div className="max-w-6xl mx-auto grid gap-12">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/studio/blog/${blog.id}`}
            className="group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 ">
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src={blog.image}
                  fill
                  className="object-cover rounded-xl"
                  alt={blog.title}
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-cyan-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-700 line-clamp-4">{blog.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
