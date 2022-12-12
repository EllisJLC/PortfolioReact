// import { useState } from 'react';
import React from 'react';


export default function Contact() {
  
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => { // handle submission form, currently no back end to send to.
  //   e.preventDefault();
  //   try {
  //     toast.success("Thank you!");
  //   } catch (error) {
  //     toast.error(error)
  //   }
  // }

  // const styles = {
  //   required: {
  //     marginLeft: "0.625rem",
  //   },
  //   form: {
  //     marginLeft: "4.5rem",
  //     marginRight: "4.5rem",
  //   }
  // }

  // return (
  //   <div>
  //     <h1 className='titleLabel2'>Contact</h1>
  //     <form className="form-group py-4" style={styles.form}>
  //       <div className='form-group p-2'>
  //         <small><label className='text-muted'>Name*</label></small>
  //         <input 
  //           value = {username}
  //           onChange = {(e) => setUsername(e.target.value)}
  //           type='text'
  //           className='form-control' 
  //           placeholder='Enter name'
  //         />
  //       </div>
  //       <div className='form-group p-2'>
  //           <small><label className='text-muted'>Email address*</label></small>
  //           <input 
  //           value = {email}
  //           onChange = {(e) => setEmail(e.target.value)}
  //           type='email'
  //           className='form-control' 
  //           placeholder='Enter email'
  //           />
  //       </div>
  //       <div className='form-group p-2'>
  //           <small><label className='text-muted' id='msgbox'>Message*</label></small>
  //           <input 
  //           value = {message}
  //           onChange = {(e) => setMessage(e.target.value)}
  //           type='text'
  //           className='form-control' 
  //           placeholder='Enter message'
  //           />
  //       </div>
  //       <small><label className='text-muted' style={styles.required}>*Required fields</label></small>
  //       <br/>
  //       {(<button disabled={!email||!username||!message} className="btn btn-primary col-12" onSubmit={handleSubmit}>
  //         Submit!
  //       </button>)}
  //     </form>
  //   </div>
  // );
  const styles = {
      body: {
        paddingTop: "1rem",
        paddingLeft: "0.625rem"
      },
      content: {
        marginTop: "3rem",
        marginLeft: "5rem"
      },
      title: {
        paddingLeft: "4rem"
      }
    }
  return (
    <section style={styles.body}>
      <h1 style={styles.title}>Contact</h1>
      <section style={styles.content}>
        <p>Email: <a href='mailto:jia.liang.chen@ryerson.ca'>jia.liang.chen@ryerson.ca</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/jia-liang-ellison-chen/">https://www.linkedin.com/in/jia-liang-ellison-chen/</a></p>
        <p>Github: <a href='https://github.com/EllisJLC'>https://github.com/EllisJLC</a></p>
      </section>
    </section>
  )
}
