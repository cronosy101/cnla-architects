import blogs from '@/data/blogs.json';
import Image from 'next/image';
import { notFound } from 'next/navigation'; // Optional for 404 fallback
import { format } from 'date-fns';
import Link from 'next/link';

async function page({ params }) {
  const { id } = await params;
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return notFound();

  return (
    <div className="mt-40 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">
        {format(new Date(blog.date), 'MMMM d, yyyy')}
      </p>

      <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={blog.image}
          fill
          className="object-cover"
          alt={blog.title}
          priority
        />
      </div>

      <div className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {blog.content}
      </div>
      <Link
        href="/studio/blog"
        className="mt-8 inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors group mb-8"
      >
        <svg
          className="w-4 h-4 mr-2  group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blogs
      </Link>
    </div>
  );
}

export default page;
