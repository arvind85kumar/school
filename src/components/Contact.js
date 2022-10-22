function Contact() {
    return (<>
        <div className="container">
            <div className="row offset-2 mt-20">
                <div className="col-md-10">
                    <h2 className="align-center text-center">Contact Us</h2>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter Name" className="form-control" id="staticEmail"  />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter email address" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter mobile number" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Message</label>
                        <div className="col-sm-10">
                           <textarea className="form-control" name="msg"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                       
                        <div className="col-sm-10">
                           <button className="btn btn-info pull-left">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Contact;