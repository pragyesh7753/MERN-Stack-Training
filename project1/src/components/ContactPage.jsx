import React, { useState } from 'react';
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane, faHeadset, faComments, faInfoCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUsPage = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <header className="max-w-5xl mx-auto mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </header>

            {/* Contact Information Cards */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <FontAwesomeIcon icon={faHeadset} size="2x" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Talk to Sales</h3>
                    <p className="text-gray-600 mb-4">Interested in our products? Reach out to our sales team.</p>
                    <a href="tel:+1234567890" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        (123) 456-7890
                    </a>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <FontAwesomeIcon icon={faComments} size="2x" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h3>
                    <p className="text-gray-600 mb-4">Need assistance with an existing product? We're here to help.</p>
                    <a href="mailto:support@example.com" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        support@example.com
                    </a>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                        <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">General Inquiries</h3>
                    <p className="text-gray-600 mb-4">For general questions or partnership opportunities.</p>
                    <a href="mailto:info@example.com" className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        info@example.com
                    </a>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-3 text-indigo-500" />
                            Send Us a Message
                        </h2>

                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                <span>Your message has been sent successfully. We'll get back to you soon!</span>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map and Address */}
                    <div className="bg-gray-100">
                        <div className="h-64 bg-gray-300 w-full">
                            {/* Placeholder for map - in a real app, you would embed Google Maps or similar here */}
                            <div className="h-full w-full flex items-center justify-center bg-indigo-600 bg-opacity-10">
                                <span className="text-gray-500">Interactive Map Goes Here</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-indigo-500 mt-1" />
                                    <div>
                                        <p className="text-gray-700">123 Innovation Way</p>
                                        <p className="text-gray-700">San Francisco, CA 94107</p>
                                        <p className="text-gray-700">United States</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-3 text-indigo-500" />
                                    <p className="text-gray-700">(123) 456-7890</p>
                                </div>

                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-indigo-500" />
                                    <p className="text-gray-700">hello@example.com</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="https://x.com/SethPragyesh" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/geeky_pks/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pragyesh-kumar-seth-29572b253/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-12 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">What are your business hours?</h3>
                        <p className="text-gray-700">We're open Monday through Friday from 9:00 AM to 6:00 PM Pacific Time. Our support team is available 24/7 for urgent inquiries.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly do you respond to inquiries?</h3>
                        <p className="text-gray-700">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer product demonstrations?</h3>
                        <p className="text-gray-700">Yes! We offer free product demonstrations for interested clients. You can schedule a demo by contacting our sales team.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-5xl mx-auto bg-indigo-600 rounded-lg shadow-lg overflow-hidden mb-12">
                <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have transformed their business with our solutions.
                    </p>
                    <button className="bg-white text-indigo-600 font-medium py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                        Request a Free Consultation
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-5xl mx-auto text-center text-gray-600">
                <p>© 2025 Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUsPage;