// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <div className="container py-12">
//         <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Aakash Marketing</h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Your trusted partner for laptop repair and CCTV installation services in Alkapuri, Vadodara. With 25 years in business, we deliver quality and reliability.
//         </p>
//         <div className="mb-6">
//           <p className="text-xl font-semibold">4.2 ★★★★☆ (32 Ratings)</p>
//           <p className="text-gray-600">Opens at 10:00 AM tomorrow</p>
//           <p className="text-gray-600">Contact: 08401833871</p>
//         </div>
//         <div className="flex space-x-4">
//           <Link href="/services" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//             View Services
//           </Link>
//           <a href="https://wa.me/8401833871" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
//             WhatsApp Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import Link from 'next/link';
import StatusBar from '../components/StatusBar';

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="container text-center text-white bg-cover bg-center p-8 rounded-lg"
          style={{
            backgroundImage:
              "url('https://www.gamcamedicalappointment.com/images/fixed-image/21616412389.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div> {/* Overlay for text readability */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aakash Marketing: Your Tech Solutions Partner
            </h1>
            <p className="text-lg mb-6">
              25+ Years of Trusted Laptop Repair & CCTV Installation in Vadodara
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/customers"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Products
              </Link>
              <a
                href="https://wa.me/9825292471"
                className="bg-warning text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatusBar />

      {/* Our Top Services */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Top Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Year of Establishment */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Year of Establishment</h3>
            <p className="text-2xl font-bold text-primary">2000</p>
            <p className="text-gray-600 text-sm mt-2">25+ Years of Excellence</p>
          </div>

          {/* Authorised Dealer */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Authorised Dealer</h3>
            <p className="text-gray-600 text-sm">Official partner for branded products and services</p>
          </div>

          {/* CCTV Services */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">CCTV Services</h3>
            <p className="text-gray-600 text-sm">Installation, Repair & Maintenance of CCTV systems</p>
          </div>

          {/* Free Installation */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Free Installation</h3>
            <p className="text-gray-600 text-sm">Complimentary installation with product purchase</p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container py-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-2xl font-semibold text-primary">4.2 ★</p>
            <p className="text-gray-600">Based on 32 Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-primary">Certified Technicians</p>
            <p className="text-gray-600">Expert team with industry certifications</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-primary">CANON Partner</p>
            <p className="text-gray-600">Authorized dealer for CANON products</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-warning text-white py-12 mb-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Contact us for expert laptop repair and CCTV installation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9099942639"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              Call Now: 9099942639
            </a>
            <a
              href="https://wa.me/9825292471"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}