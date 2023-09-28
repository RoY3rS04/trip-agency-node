import { Testimonial } from "../models/testimonial.js";

const testimonialsPost = async (req, res) => {

    //Validate data 
    const { name, email, message } = req.body;

    const errors = {};

    if (!name.trim()) {
        errors.nameError = 'Name field most be filled'
    }

    if (!email.trim()) {
        errors.emailError = 'Email field most be filled'
    }

    if (!message.trim()) {
        errors.messageError = 'Message field most be filled'
    }

    if (Object.keys(errors).length > 0) {
        //get all Testimonials

        const testimonials = await Testimonial.findAll();

        res.render('testimonials', {
            page: 'Testimonials',
            errors,
            name,
            email,
            message,
            testimonials
        })
    } else {
        //Add testimonial to db
        try {
            
            await Testimonial.create({
                name,
                email,
                message
            });

            res.redirect('testimonials');

        } catch (error) {
            console.log(error);
        }

    }
}

export {
    testimonialsPost
}