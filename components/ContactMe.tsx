import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form'
import sanityCli from '../sanity/sanity.cli'

// type Inputs = { 

//     field: {
//         name: string;
//         email: string;
//         subject: string;
//         message: string;
//     }
 

// }

type Props = {};

const ContactMe = (props: Props) => {

    //SendGrid email form

    // async function handleOnSubmit(e) {
    //     e.preventDefault();
    //     const formData = {}
    //     Array.from(e.currentTarget.elements).forEach(field => {
    //       if ( !field.name ) return
    //          formData[field.name] = field.value
    //     })
    //     fetch('/api/mail', {
    //       method: 'post',
    //       body: JSON.stringify(formData)
    //     })
    //   console.log(formData);
      
      
    // }

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            contact
        </h3>

        <div className='flex flex-col space-y-10' >
            <h4 className='text-4xl font-semibold text-center'>
                Need a Developer?{" "}
                <span className='underline decoration-[#F7AB0A]/80'>Lets chat!</span>
                
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+1 403 951 0547</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>T1L 1H1</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>gus.hawke@gmail.com</p>
                </div>
            </div>

            <form 
                // onSubmit={handleOnSubmit} 
                className='flex flex-col space-y-2 w-fit mx-auto'
                method='post'
                >
                    

                <div className='flex space-x-2'>
                    <input placeholder='Name' className='contactInput' type="text" />
                    <input placeholder='Email' className='contactInput' type="email " />
                </div>

                <input placeholder='Subject' className='contactInput' type="text" />   

                <textarea placeholder='Message' className='contactInput' />

                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>

            </form>

        </div>

    </div>
  )
}

export default ContactMe