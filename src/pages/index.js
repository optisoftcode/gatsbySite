import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="col-md-6">
         <div class="form-group"><input placeholder="NAME" type="name" id="formBasicEmail" class="form-control"><i class="fa fa-user"></i></div>
      </div>
      <div class="col-md-6">
         <div class="form-group"><input placeholder="Telefon nummer" type="number" id="formBasicEmail" class="form-control"><i class="fa fa-phone"></i></div>
      </div>
      <div class="col-md-12">
         <div class="form-group"><input placeholder="Email" type="email" id="formBasicEmail" class="form-control"><i class="fa fa-envelope"></i></div>
      </div>
 
      <div class="col-md-6">
         <label class="text-uppercase form-label">Ønskede teetid</label>
         <div class="form-group"><input placeholder="hh : mm" type="name" id="formBasicEmail" class="form-control"><i class="fa fa-pencil"></i></div>
      </div>
      <div class="col-md-12">
         <div class="form-group row">
            <label class="text-uppercase form-label col-form-label col-6">Inklusiv transport?</label>
            <div class="col-6">
               <div class="radio-custom">
                  <div class="form-check"><input name="formHorizontalRadios" type="radio" id="formHorizontalRadios1" class="form-check-input"><label title="" for="formHorizontalRadios1" class="form-check-label">Ja tak</label></div>
                  <div class="form-check"><input name="formHorizontalRadios" type="radio" id="formHorizontalRadios2" class="form-check-input"><label title="" for="formHorizontalRadios2" class="form-check-label">Nej tak</label></div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-md-12">
         <div class="form-group"><textarea rows="4" placeholder="Evt yderligere info?" id="formBasicEmail" class="form-control"></textarea><i class="fa fa-pencil"></i></div>
         <button type="button" class="btn-orange-sendmg mr-auto ml-auto btn btn-primary">Send</button>
      </div>
	  
	  
	  
 </form>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
