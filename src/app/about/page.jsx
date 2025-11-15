export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aakash Marketing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Total Computer & Networking Solutions Since 2002
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Aakash Marketing is a company started by technically qualified, young, experienced, and energetic group of persons in the field of computer hardware and networking with almost 15 man-years of experience in providing total computer solutions, Annual Maintenance Contracts (AMC), and networking solutions with Novell-NT Technology.
            </p>
            <p className="text-lg">
              Our dedication towards the job and focus on <strong className="text-primary">Quality (Q)</strong> in our performance has been awarded by our customers from places like Baroda, Anand, Halol, Kalol, and Bharuch.
            </p>
            <p className="text-lg">
              We have the privilege to serve individuals, business houses, corporate bodies, banks, government, and semi-government organizations.
            </p>
            <p className="text-lg">
              Under Aakash Marketing, we provide <strong>maintenance of PCs</strong> and related items including third-party, comprehensive, and non-comprehensive maintenance of PCs. We also offer software solutions and networking solutions, along with trading of peripherals and branded PCs.
            </p>
          </div>
        </div>

        {/* Our Aim */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Our Aim
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-secondary text-2xl">✓</span>
              <span>To reach the heights of providing <strong>"Total Computers & Networking Solutions"</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary text-2xl">✓</span>
              <span>To supply branded and assembled computer systems, servers, and laptops from HP, Compaq & IBM</span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary text-2xl">✓</span>
              <span>Build positive, long-term relationships with customers characterized by mutual respect, courtesy, and integrity</span>
            </li>
          </ul>
        </div>

        {/* Customer Base */}
        <div className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Trusted by Leading Organizations</h2>
          <p className="text-center text-lg mb-6">
            Our list of satisfied customers includes multinationals, public & private companies, banks, government branches, and educational institutes across Gujarat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold">25+</p>
              <p className="text-sm">Years in Business</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm">Cities Covered</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold">4.2★</p>
              <p className="text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}