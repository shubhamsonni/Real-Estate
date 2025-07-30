import React, {useState} from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cd140cd-6173-41ad-b799-12b8ddca4bbf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };


  return (
    <div className=' container text-center mx-auto px-6 md:px-20 lg:w-1/2 lg:py-32 w-full
    overflow-hidden' id='Contact'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2
      text-center'>Contact <span className='underline
       underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80
      mx-auto'>Ready to make a move? Let's Build Your Future Together</p>
 <form onSubmit={onSubmit}>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>Your Name
        <input className='w-full border border-gray-300 rounded 
        py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
        <input className='w-full border border-gray-300 rounded 
        py-3 px-4 mt-2' type='email' name='Email' placeholder='Your Email' required/>
        </div>
    </div>
    <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3
        px-4 mt-2 h-48 resize-none'
         name="Message" placeholder='Message' required></textarea>
    </div>
    <button className='bg-blue-600 text-white py-2 px-12 mb-10
    rounded'>{result?result:"Send Message"}</button>
 </form>
 </div>
  )
}

export default Contact
