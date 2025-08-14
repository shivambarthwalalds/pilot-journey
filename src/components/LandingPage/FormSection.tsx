"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormSection() {

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
            .required("Mobile Number is required"),
        city: Yup.string().required("City is required"),
        age: Yup.number()
            .typeError("Age must be a number")
            .positive("Age must be positive")
            .integer("Age must be an integer")
            .required("Age is required"),
    });


    const initialValues = {
        fullName: "",
        email: "",
        mobile: "",
        city: "",
        age: "",
    };


    const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
        console.log("Form data:", values);
        resetForm();
        alert("Form submitted successfully!");
    };

    return (
        <section className="relative overflow-hidden">

            <div className="relative w-full mx-auto ">
                {/*  Premium glass-morphism card design */}
                <div className="bg-white/80 border border-black/20 shadow-2xl md:rounded-2xl px-4 py-8 md:py-4">
                    {/*  Enhanced typography with gradient text */}
                    <h2 className="text-xl lg:text-2xl font-semibold text-center mb-2 bg-gradient-to-r from-black via-amber-800 to-amber-500 bg-clip-text text-transparent">
                        Start Your Pilot Journey Today!
                    </h2>
                    <p className="text-center text-slate-800 mb-8 text-sm leading-relaxed">
                        Fill the form below and our team will contact you.
                    </p>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-3">
                                {/*  Premium input field styling */}
                                <div>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        className="w-full md:bg-white/10 backdrop-blur-sm border border-black/50 rounded-xl px-5 py-4 text-black placeholder-slate-500  focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-lightBrown transition-all duration-300 hover:bg-white/15"
                                    />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-red-500 text-sm mt-2 ml-1"
                                    />
                                </div>

                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email ID"
                                        className="w-full md:bg-white/10 backdrop-blur-sm border border-black/50 rounded-xl px-5 py-4 text-black placeholder-slate-500  focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 hover:bg-white/15"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-2 ml-1"
                                    />
                                </div>

                                <div>
                                    <Field
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        className="w-full md:bg-white/10 backdrop-blur-sm border border-black/50 rounded-xl px-5 py-4 text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 hover:bg-white/15"
                                    />
                                    <ErrorMessage
                                        name="mobile"
                                        component="div"
                                        className="text-red-500 text-sm mt-2 ml-1"
                                    />
                                </div>

                                <div>
                                    <Field
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        className="w-full md:bg-white/10 backdrop-blur-sm border border-black/50 rounded-xl px-5 py-4 text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 hover:bg-white/15"
                                    />
                                    <ErrorMessage
                                        name="city"
                                        component="div"
                                        className="text-red-500 text-sm mt-2 ml-1"
                                    />
                                </div>

                                <div>
                                    <Field
                                        type="number"
                                        name="age"
                                        placeholder="Age"
                                        className="w-full md:bg-white/10 backdrop-blur-sm border border-black/50 rounded-xl px-5 py-4 text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 hover:bg-white/15"
                                    />
                                    <ErrorMessage
                                        name="age"
                                        component="div"
                                        className="text-red-500 text-sm mt-2 ml-1"
                                    />
                                </div>

                                {/*  Premium gradient button matching banner design */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-lightBrown hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 text-white font-bold py-3 px-4 cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                                >
                                    {isSubmitting ? "Submitting..." : "Get Free Career Counselling"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}
