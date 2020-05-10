import React from 'react';

const Contact = () => {
   return(
      <main class="container">
      <section class="row">
         <div class="col-md-10">
            <form class="block form-horizontal">
               <h1 class="block-header">Contact</h1>
               <hr />
               <div class="form-group">
                  <label for="email" class="col-sm-2 control-label">Email:</label>
                  <div class="col-sm-10">
                     <a class="contact-link" href="mailto: brentedwards512@gmail.com">brentedwards512@gmail.com</a>
                  </div>
               </div>
               <div class="form-group">
                  <label class="col-sm-2 control-label" for="msg">LinkedIn:</label>
                  <div class="col-sm-10">
                     <a class="contact-link" href="https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/</a>
                  </div>
               </div>
               <div class="form-group">
                  <label class="col-sm-2 control-label" for="msg">GitHub:</label>
                  <div class="col-sm-10">
                     <a class="contact-link" href="https://github.com/zirris512" target="_blank" rel="noopener noreferrer">https://github.com/zirris512</a>
                  </div>
               </div>

            </form>
         </div>
      </section>
   </main>
   )
};

export default Contact;