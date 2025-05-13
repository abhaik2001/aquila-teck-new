import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content:
      "Aquila Teck transformed our business with a stunning website that perfectly captures our brand. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CEO, Innovate Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    content:
      "Working with Aquila Teck on our mobile app was a game-changer. Their attention to detail and technical expertise resulted in an app that our customers love using.",
    author: "Michael Chen",
    position: "CTO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    content:
      "The team at Aquila Teck redesigned our e-commerce platform, resulting in a 40% increase in conversions. Their strategic approach and technical skills are unmatched.",
    author: "Emily Rodriguez",
    position: "Marketing Director, ShopEase",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    content:
      "Aquila Teck's ongoing maintenance and support have been invaluable to our business. They respond quickly to issues and proactively suggest improvements to our platform.",
    author: "David Wilson",
    position: "Operations Manager, Global Connect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-secondary-600 to-secondary-800 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-white/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Slider ref={sliderRef} {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.author}</h3>
                      <p className="text-white/70">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 text-white/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg leading-relaxed">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;