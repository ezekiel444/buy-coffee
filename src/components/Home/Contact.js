import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className='contact py-5'>
       <Title title='contact us' />
       <div className="row">
           <div className="col-10 col-sm-8 col-md-6 mx-auto">
               <form action="https://formspree.io/f/xeqvjrra"
  method="POST">
                   {/* name */}
                 <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input className='form-control' type="text" id='name' name='name' placeholder='matomi ezekiel' />
                     </div>
                       {/* email */}
                 <div className="form-group">
                     <label htmlFor="email">Email</label>
                     
                     <input className='form-control' type="text" id='email' email='email' placeholder='email@gmail.com' />
                     </div>  
             
               {/* Message */}
               <div className="form-group">
                   <label htmlFor="message">Message</label>
        <textarea className='form-control' name="message" id="message" style={{resize:'none'}} placeholder='Your message...'/>
               </div>
               {/* button */}
               <button className='btn  btn-yellow btn-block text-capitalize mt-5 text-secondary'>submit your message</button>
               </form>
           </div>
       </div>
        </section>
    )
}
