import "./Contact.css";
import {useForm} from "react-hook-form";

export function Contact() {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    type FormData = {
        email: string;
        subject: string;
        message: string;
    }

    const clearForm = () => {
        window.location.reload();
    }
    const onSubmit = (data: FormData)=>{
        console.log('Form submitted:', data);
        alert(`Submitted your case : ${data.subject}`);
        clearForm();
    }

    return (
        <div className="form-container">
            <h2> Contact Us</h2>
            <p className="subtext">We’d love to hear from you! Please fill out the form below.</p>

            <form className="contact-form"  onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Input your email address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email ? <span>{errors.email.message}</span> : null}

                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text"
                           placeholder="What's this about?"
                           {...register("subject", {required : "Subject is required",
                           pattern:{
                               value : /^.{1,30}$/,
                               message : "Subject must be in between 1 and 30 characters"
                           }
                           })}
                    />
                    {errors.subject ? <span>{errors.subject.message}</span> : null}
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Write your message..."
                        rows={5}
                        {...register("message", {required : "Message is required",
                        })}
                    />
                    {errors.message ? <span>{errors.message.message}</span> : null}
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
