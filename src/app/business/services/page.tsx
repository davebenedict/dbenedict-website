import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Consulting Services',
      description: 'Strategic consulting to help your business grow and succeed in today\'s competitive market.',
      features: ['Business Strategy', 'Market Analysis', 'Growth Planning', 'Performance Optimization'],
      price: 'Starting at $150/hour',
    },
    {
      id: 2,
      title: 'Technical Solutions',
      description: 'Custom technical solutions tailored to your specific business needs and requirements.',
      features: ['Software Development', 'System Integration', 'Technical Architecture', 'Code Review'],
      price: 'Starting at $200/hour',
    },
    {
      id: 3,
      title: 'Project Management',
      description: 'End-to-end project management services to ensure successful delivery of your initiatives.',
      features: ['Project Planning', 'Team Coordination', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $175/hour',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/business">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Benedict Business</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/business" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/business/services" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/business/products" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </Link>
                <Link href="/business/booking" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Book Now
                </Link>
                <Link href="/business/contact" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional services designed to help your business thrive. Choose the service that best fits your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What's Included:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-emerald-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {service.price}
                  </p>
                </div>

                <Link
                  href="/business/booking"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Custom Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need something specific? We offer custom packages tailored to your unique requirements.
              Contact us to discuss your project and get a personalized quote.
            </p>
            <Link
              href="/business/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; 2026 Benedict Business. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
