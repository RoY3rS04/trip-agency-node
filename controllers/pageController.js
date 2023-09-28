import { trip } from "../models/trip.js"
import { Testimonial } from "../models/testimonial.js"

const homePage = async (req, res) => { //req lo que enviamos, res lo que express responde

    //Querying three trips
    try {

        const [trips, testimonials] = await Promise.all([
            trip.findAll({
                limit: 3
            }),
            Testimonial.findAll({
                limit: 3
            })
        ])

        res.render('home', {
            page: 'Home',
            className: 'home',
            trips,
            testimonials
        })
    } catch (error) {
        console.log(error)
    }
}

const aboutPage = (req,res) => { //req lo que enviamos, res lo que express responde
    res.render('about', {
        page: 'About'
    })
}

const tripsPage = async (req, res) => { //req lo que enviamos, res lo que express responde
    
    //Query to db
    const trips = await trip.findAll();

    console.log(trips);


    res.render('trips', {
        page: 'Trips',
        trips
    })
}

//Show trip by its slug

const tripDetailsPage = async (req, res, next) => {
    
    const { tripSlug } = req.params;

    try {
        const actualTrip = await trip.findOne({
            where: {
                slug: tripSlug
            }
        })

        res.render('trip', {
            page: 'Trip Info',
            actualTrip
        })
    } catch (error) {
        console.log(error);
    }

    next()
}

const testimonialsPage = async (req, res) => { //req lo que enviamos, res lo que express responde
    
    try {
        
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', {
            page: 'Testimonials',
            testimonials
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    homePage,
    aboutPage,
    tripsPage,
    tripDetailsPage,
    testimonialsPage,
}