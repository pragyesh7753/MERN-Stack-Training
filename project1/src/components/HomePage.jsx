import React from 'react';
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket, faLaptopCode, faChartLine, faShieldAlt, faArrowRight, faCog, faUsers, faCheck, faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle, faMicrosoft, faAmazon, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Digital Experience</h1>
                            <p className="text-xl mb-8 text-indigo-100">
                                Cutting-edge solutions designed to boost your business growth and streamline operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                               <Link to="/about"> <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300">
                                    About Us
                                </button></Link>
                               <Link to="/contact"> <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 hover:bg-opacity-10 transition-colors duration-300">
                                    Contact Us
                                </button></Link>
                            </div>
                        </div>
                        <div className="hidden md:block relative">
                            {/* Placeholder for hero image */}
                            <div className="bg-indigo-400 bg-opacity-30 rounded-lg h-96 w-full flex items-center justify-center">
                                <span className="text-white opacity-75"><img src="https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></span>
                            </div>
                            {/* Floating decorative elements */}
                            <div className="absolute -top-6 -right-6 bg-purple-500 rounded-lg w-24 h-24 opacity-50"></div>
                            <div className="absolute -bottom-6 -left-6 bg-indigo-500 rounded-lg w-32 h-32 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 font-medium mb-6">TRUSTED BY INDUSTRY LEADERS</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <FontAwesomeIcon icon={faApple} className="text-gray-400 text-3xl" />
                        <FontAwesomeIcon icon={faGoogle} className="text-gray-400 text-3xl" />
                        <FontAwesomeIcon icon={faMicrosoft} className="text-gray-400 text-3xl" />
                        <FontAwesomeIcon icon={faAmazon} className="text-gray-400 text-3xl" />
                        <FontAwesomeIcon icon={faSpotify} className="text-gray-400 text-3xl" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Powerful Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how our platform can transform your business with these innovative features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                <FontAwesomeIcon icon={faRocket} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast Performance</h3>
                            <p className="text-gray-600 mb-4">
                                Experience blazing speeds with our optimized platform, ensuring your users enjoy a seamless experience every time.
                            </p>
                            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                                Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </a>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Enterprise-grade Security</h3>
                            <p className="text-gray-600 mb-4">
                                Rest easy knowing your data is protected by the latest security standards and encryption technologies.
                            </p>
                            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                                Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </a>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                <FontAwesomeIcon icon={faChartLine} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Analytics</h3>
                            <p className="text-gray-600 mb-4">
                                Make data-driven decisions with our comprehensive analytics dashboard and insightful reports.
                            </p>
                            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                                Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our simple three-step process makes implementation quick and hassle-free
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-lg shadow p-8 text-center relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6 mx-auto">
                                <FontAwesomeIcon icon={faCog} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Setup Your Account</h3>
                            <p className="text-gray-600">
                                Create your account, define your preferences, and configure your dashboard to match your needs.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-lg shadow p-8 text-center relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6 mx-auto">
                                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrate Our API</h3>
                            <p className="text-gray-600">
                                Seamlessly connect our platform with your existing tools using our powerful and flexible API.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-lg shadow p-8 text-center relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6 mx-auto">
                                <FontAwesomeIcon icon={faRocket} size="2x" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Launch & Scale</h3>
                            <p className="text-gray-600">
                                Go live with your enhanced solution and easily scale as your business grows and evolves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it – here's what our customers have to say
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                                    <p className="text-gray-600 text-sm">CEO, TechCorp</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Implementing this solution has transformed our business processes. We've seen a 40% increase in productivity and significant cost savings."
                            </p>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faCheck} />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold">JS</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                                    <p className="text-gray-600 text-sm">CTO, Innovate Inc.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "The customer support team is exceptional. They've been responsive to our needs and helped us customize the platform to our specific requirements."
                            </p>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faCheck} />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-indigo-600 font-bold">RJ</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Robert Johnson</h4>
                                    <p className="text-gray-600 text-sm">Marketing Director, Growth Co.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "The analytics capabilities have given us insights we never had before. We're now able to make data-driven decisions that have measurably improved our ROI."
                            </p>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faCheck} />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                                <FontAwesomeIcon icon={faCheck} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services/Solutions Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive services tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Solution 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-indigo-600 h-3"></div>
                            <div className="p-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                    <FontAwesomeIcon icon={faBriefcase} size="2x" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Intelligence</h3>
                                <p className="text-gray-600 mb-4">
                                    Transform raw data into actionable insights with our powerful business intelligence tools. Monitor key metrics, generate reports, and visualize trends.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Interactive dashboards
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Customizable reports
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Real-time data analysis
                                    </li>
                                </ul>
                                <a href="#" className="inline-block bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-indigo-600 h-3"></div>
                            <div className="p-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                    <FontAwesomeIcon icon={faUsers} size="2x" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Relationship Management</h3>
                                <p className="text-gray-600 mb-4">
                                    Build stronger customer relationships with our integrated CRM system. Track interactions, manage leads, and optimize your sales pipeline.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Contact management
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Sales automation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                                        Customer support integration
                                    </li>
                                </ul>
                                <a href="#" className="inline-block bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                        Join thousands of companies that trust us to power their digital transformation. Get started today with a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300">
                            Get Started
                        </button>
                        <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Partners</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">News</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Solutions</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Business Intelligence</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">CRM</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Analytics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Enterprise Solutions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Case Studies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-300">Partners</a></li>
                                <li>
                                    <div className="flex space-x-4 mt-4">
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            <FontAwesomeIcon icon={faApple} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            <FontAwesomeIcon icon={faMicrosoft} />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p>© 2025 Company Name. All rights reserved.</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;