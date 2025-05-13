import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Planning',
      description:
        'We start by understanding your business goals, target audience, and project requirements to create a comprehensive plan.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Our designers create wireframes and visual designs that align with your brand identity and provide an exceptional user experience.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Our developers bring the designs to life, writing clean, efficient code that ensures your product is fast, secure, and scalable.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Deployment',
      description:
        'We thoroughly test and deploy your product, ensuring it works flawlessly across all devices and platforms.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We follow a structured approach to deliver high-quality digital solutions that meet your
            business objectives.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 md:items-center ${
                  index % 2 === 0 ? 'md:rtl' : ''
                }`}
              >
                <div className={`md:ltr ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white rounded-xl p-8 shadow-soft relative">
                    <div className="absolute top-8 -right-4 md:hidden w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Timeline point */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center shadow-lg z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Empty div for layout in alternating pattern */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'order-first' : ''}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;