export default function ServiceCard({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="https://wa.me/9825292471"
          className="text-secondary hover:underline"
        >
          Enquire Now
        </a>
      </div>
    );
  }