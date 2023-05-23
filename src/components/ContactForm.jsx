import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'

export const ContactForm = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        emailjs.sendForm('service_t1pk129', 'template_oltxyl8', ref.current, 'Y8h2xOyeP4_WkzBgD')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });  
    };

    return (
        <div className='my-32'>  
            <h2 className='font-bold text-8xl w-full text-center text-dark dark:text-light md:mb-16 md:text-6xl xs:text-4xl'>Stay In Touch</h2> 
            
            <div className="relative flex flex-col justify-center mt-32 md:mt-2 overflow-hidden text-dark dark:text-light">
                <form className='px-[35%] xs:px-[10%] md:px-[20%] xl:px-[28%] items-center' onSubmit={handleSubmit} ref={ref}>
                    <div className="mb-6">
                        <label>
                            <span className="">Full Name</span>
                            <input type="text" name="name" required
                                placeholder="John Smith"
                                className="w-full block px-2 py-2 mt-2 rounded-md shadow-md focus:border-black/30 focus:ring
                                            focus:ring-gray focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label>
                            <span className="text-gray-700">Email address</span>
                            <input name="email" type="email" required
                                placeholder="sjohn@example.com" 
                                className="block w-full mt-2 px-2 py-2 border-gray-300 rounded-md shadow-md
                                            focus:border-black/30 focus:ring
                                            focus:ring-gray focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label>
                            <span className="text-gray-700">Message</span>
                        <textarea name="message" rows="3"
                                className="block w-full mt-2 px-2 py-3 rounded-md shadow-md
                                        focus:border-black/30 focus:ring
                                        focus:ring-gray focus:ring-opacity-50"
                        >
                        </textarea>
                        </label>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full h-10 px-5 text-light bg-dark rounded-lg transition-colors duration-150
                                    focus:shadow-outline hover:bg-lightDark dark:bg-lightDark items-center"
                        >
                            Send Message
                        </button>
                    </div>
                    {/* create a nicer components for email feedback */}
                    {success && "sent successfuly"}
                </form>
            </div>
        </div>
    )
}
