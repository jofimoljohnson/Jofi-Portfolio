import styles from "./ContactStyles.module.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form=useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sple3op', 'template_57znx8r', form.current, {
        publicKey: 'UOOgzwtlaTY7mlG3i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 


    return (
        <>
            <section id="contact" className={styles.container}>
                <h1 className="sectionTitle">
                    <b>Contact</b>
                </h1>
                <form  ref={form} onSubmit={sendEmail}>
                    <div className="formGroup">

                        <label htmlFor="name" hidden>
                            Name
                        </label>

                        <input 
                        type="text"
                         name="user_name"
                          id="name"
                           placeholder="Name"
                            required 
                            />
                    </div>



                    <div className="formGroup">
                        <label htmlFor="email" hidden>
                            Email
                        </label>

                        <input 
                        type="email" 
                        name="user_email" 
                        id="email"
                         placeholder="Email"
                          required />

                    </div>

                    <div className="formGroup">
                        <label htmlFor="message" hidden>
                            Message
                        </label>
                        <textarea 
                        name="message"
                         id="message"
                          placeholder="Message"
                           required></textarea>
                    </div>
                    <input type="submit" className="hover btn" value="Send" />
                </form>
            </section>
        </>
    );
};

export default Contact;
