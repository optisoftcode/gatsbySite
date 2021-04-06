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
      <div className="col-md-6">
         <div className="form-group"><input placeholder="NAME" type="name" id="formBasicEmail" className="form-control" /><i className="fa fa-user"></i></div>
      </div>
      <div className="col-md-6">
         <div className="form-group"><input placeholder="Telefon nummer" type="number" id="formBasicEmail" className="form-control" /><i className="fa fa-phone"></i></div>
      </div>
      <div className="col-md-12">
         <div className="form-group"><input placeholder="Email" type="email" id="formBasicEmail" className="form-control" /><i className="fa fa-envelope"></i></div>
      </div>
 
      <div className="col-md-6">
         <label className="text-uppercase form-label">Ønskede teetid</label>
         <div className="form-group"><input placeholder="hh : mm" type="name" id="formBasicEmail" className="form-control" /><i className="fa fa-pencil"></i></div>
      </div>
      <div className="col-md-12">
         <div className="form-group row">
            <label className="text-uppercase form-label col-form-label col-6">Inklusiv transport?</label>
            <div className="col-6">
               <div className="radio-custom">
                  <div className="form-check"><input name="formHorizontalRadios" type="radio" id="formHorizontalRadios1" className="form-check-input" /><label title="" for="formHorizontalRadios1" className="form-check-label">Ja tak</label></div>
                  <div className="form-check"><input name="formHorizontalRadios" type="radio" id="formHorizontalRadios2" className="form-check-input" /><label title="" for="formHorizontalRadios2" className="form-check-label">Nej tak</label></div>
               </div>
            </div>
         </div>
      </div>
      <div className="col-md-12">
         <div className="form-group"><textarea rows="4" placeholder="Evt yderligere info?" id="formBasicEmail" className="form-control"></textarea><i className="fa fa-pencil"></i></div>
         <button type="button" className="btn-orange-sendmg mr-auto ml-auto btn btn-primary">Send</button>
      </div>
	  
	  
	  
    </form>


    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
