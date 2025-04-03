
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1995, Gusto has been serving authentic Italian cuisine made with love and passion. 
                Our recipes have been passed down through generations, bringing the true taste of Italy to your table.
              </p>
              <p className="text-gray-600">
                We believe in using only the finest ingredients, sourced locally whenever possible, 
                to create dishes that delight and inspire our guests.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation threshold={0.4}>
            <div className="relative h-96 transform transition-transform duration-700 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;