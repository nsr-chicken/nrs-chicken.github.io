// import './banner.scss'

import React from "react";
import SimpleReactValidator from 'simple-react-validator';
import { Toast } from "../../../../service/toast";
export class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: {
                name: '',
                toId: '',
                phone: '',
                body: ''

            },
            isSendLoder: false

        }
        this.validator = new SimpleReactValidator({
            element: message => (
                <span className="error-message text-danger validNo fs14">{message}</span>
            ),
            autoForceUpdate: this,
        });
    }



    // componentDidMount() {
    //     this.validator = new SimpleReactValidator({
    //         element: message => (
    //             <span className="error-message text-danger validNo fs14">{message}</span>
    //         ),
    //         autoForceUpdate: this,
    //     });

    // }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            email: {
                ...this.state.email,
                [name]: value
            }
        })
    }





    sendEmail = () => {
        let { email } = this.state;

        if (this.validator.allValid()) {
            this.setState({ isSendLoder: true })
            console.log(JSON.stringify(email),email.body)
            this.validator.hideMessages();
            Email.send({
                Host: "smtp.gmail.com",
                Username: "nsrchicken2020@gmail.com",
                Password: "nsr2020@123",
                To: email.toId,
                From: "nsrchicken2020@gmail.com",
                Subject: "Customer number: " + email.phone,
                Body: email.body,
            }).then((message) => {
                let email = {
                    name: '',
                    toId: '',
                    phone: '',
                    body: ''

                }
                Toast({ type: 'success', message: 'mail sent successfully', title: 'success' })
                this.setState({ isSendLoder: false, email })
            }).catch((error) => {
                Toast({ type: 'danger', message: 'mail server error', title: 'Error' })
                this.setState({ isSendLoder: false })
            })
        } else {
            this.validator.showMessages();

        }

    }




    render() {
        let { email, isSendLoder } = this.state;

        return (
            // <!-- Contact Section-->
            <section className="page-section" id="contact">
                <div className="container">
                    {/* <!-- Contact Section Heading--> */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">CONTACT US</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Contact Section Form--> */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control" type="text" placeholder="Name" value={email.name} name="name" onChange={this.handleInputChange} />
                                </div>
                                {this.validator.message('Name', email.name, 'required|max:15')}
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" id="email" type="email" value={email.toId} name="toId" onChange={this.handleInputChange} placeholder="Email Address" required="required" />
                                </div>
                                {this.validator.message('Email', email.toId, 'required|email')}
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="text" value={email.phone} name="phone" onChange={this.handleInputChange} placeholder="Phone Number" />

                                </div>
                                {this.validator.message('Phone', email.phone, 'required')}
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5"
                                        placeholder="Message" value={email.body} onChange={this.handleInputChange} name="body"
                                    ></textarea>


                                </div>
                                {this.validator.message('body', email.body, 'required|max:3000')}
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group"><button onClick={this.sendEmail} className="btn btn-primary btn-xl" id="sendMessageButton"
                                type="submit">{isSendLoder ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ""} Send</button></div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

