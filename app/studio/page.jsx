import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

function Page() {
  return (
    <div className="flex flex-col items-center mt-52 px-4">
      <div className="max-w-6xl w-full space-y-20">
        {/* YouTube video */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/CtLy8PXiL58?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=CtLy8PXiL58"
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Meet the team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="relative h-64 md:col-span-2 rounded-xl overflow-hidden">
            <Image
              src="/studio/theteam.jpg"
              alt="The team"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl font-semibold">
              The Team at CNLA Architects
            </h2>
            <p className="text-gray-700">
              CNLA Architects is a small, dedicated, and diverse design team.
              Each designer brings unique strengths, ensuring that every project
              is executed with care and intention. The team embraces the many
              roles of an architect while maintaining a client-focused,
              thoughtful, and advisory approach throughout the process.
            </p>
          </div>
        </div>

        {/* Inquiry section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-xl items-center">
          <div className="relative h-60 rounded-xl overflow-hidden">
            <Image
              src="/studio/villa1.jpg"
              alt="Architecture example"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">
              Looking for an architecture firm?
            </h2>
            <p className="text-gray-700">
              We understand that finding, choosing, and comparing architects can
              be challenging. That’s why we’re happy to share more about how we
              work and what you can expect from us.
            </p>
            <Link
              className="text-cyan-600 flex items-center ml-[75%]"
              href="/projects"
            >
              <p> go to projects </p>
              <FaAngleRight className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
        </div>
        {/* vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-20">
          {/* Vision */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
            <p className="text-lg font-semibold text-cyan-600">
              Exclusive Living, Inclusive Character
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since its founding in 2004, CNLA Architects has grown into an
              experienced, skilled, and creative architecture firm. Residential
              architecture is at the heart of our portfolio and has been key to
              both the success and evolution of our studio. CNLA stands for
              living. CNLA stands for beauty and individuality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These core values—combined with refined materials and generous
              gestures—make each CNLA design truly distinctive and exclusive.
              But to us, exclusivity alone is not enough. Even exclusivity can
              fall into repetition and predictable patterns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At CNLA, we believe that the foundation of a well-designed home
              lies in the lifestyle of its residents. That’s why we focus first
              and foremost on the client—every project begins with a personal
              vision. By introducing design choices that are unique, individual,
              and—when desired—bold, we create character. No repetition, no
              off-the-shelf solutions, but a bespoke, exclusive design infused
              with authenticity and unmistakably shaped by CNLA’s architectural
              signature.
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Philosophy</h2>
            <p className="text-lg font-semibold text-cyan-600">
              Personality, Passion, and Precision
            </p>
            <p className="text-gray-700 leading-relaxed">
              At CNLA Architects, every strong design begins with context. This
              context is shaped not only by the personal desires and lifestyle
              of the client, but also by the unique conditions of the
              surrounding environment. We treat this foundation as an essential
              source of inspiration—one from which thoughtful, creative, and
              original architecture can emerge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our work is driven by a deep passion for natural light, compelling
              sightlines, and the thoughtful use of contemporary and organic
              materials. The blend of crisp white plaster, warm wood elements,
              natural stone, and slender steel framing gives CNLA’s designs a
              clean yet inviting character—recognizable and refined without
              becoming repetitive or formulaic.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Each project is crafted with a strong focus on proportion and the
              seamless relationship between interior and exterior spaces. The
              result is architecture that feels intuitive and balanced. Yet
              behind this clarity lies a highly detailed design process.
              Stripping a concept back to its essence is no easy task—it demands
              both rigor and restraint. Through this pursuit of perfection, we
              develop strong concepts and deliberate choices that serve as a
              clear guide throughout the entire design journey.
            </p>
          </div>
        </div>

        {/* Inquiry section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-xl items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">
              Interested in the work of CNLA Architects?
            </h2>
            <p className="text-gray-700">
              Explore our recent projects to see what we’ve been working on.
              Curious to learn more or discuss your own ideas? We’d be happy to
              meet—feel free to contact us for a no-obligation consultation.
            </p>
            <Link
              className="text-cyan-600 flex items-center ml-[75%]"
              href="/contact"
            >
              <p> Contact </p>
              <FaAngleRight className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
          <div className="relative h-60 rounded-xl overflow-hidden">
            <Image
              src="/studio/villa2.jpg"
              alt="Architecture example"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p>
            At CNLA Architects, our designers pursue perfection and push
            creative boundaries to deliver architecture that is both innovative
            and appealing. However, at the core of every design lies our
            commitment to fulfilling the unique desires and needs of each
            client. Through open and transparent dialogue, we align the
            sometimes diverse ambitions of client and architect into a shared
            vision. Our strength lies in blending practical, purposeful
            solutions with distinctive, personalized designs.
          </p>
          <p>
            Rather than sticking to predetermined ideas, we explore a variety of
            design options to uncover valuable possibilities. By visualizing
            different concepts, we empower clients to make informed decisions.
            This advisory and inspiring role creates clarity in areas such as
            spatial integration, materials, and budget.
          </p>
          <p>
            Our studio is defined by a transparent, skilled, and personal
            approach. We strive to engage our clients with a careful, clear, and
            efficient process. With many years of experience, CNLA is a
            dependable partner, managing every stage of the architectural
            journey—from initial concept to final realization.
          </p>
          <p>
            We also prioritize sustainability by incorporating modern,
            energy-efficient solutions and selecting durable materials with long
            lifespans. Environmental consciousness is a natural and essential
            element of both our design philosophy and studio operations.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Page;
