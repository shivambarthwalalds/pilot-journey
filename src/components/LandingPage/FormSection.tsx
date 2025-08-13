"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormSection() {
    // ✅ Validation Schema
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

    // ✅ Initial Values
    const initialValues = {
        fullName: "",
        email: "",
        mobile: "",
        city: "",
        age: "",
    };

    // ✅ Submit Handler
    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form data:", values);
        alert("Form submitted successfully!");
    };

    return (
        <section className=" py-12 px-4">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-4 lg:p-8">
                <h2 className="text-2xl font-bold text-center mb-2">
                    Start Your Pilot Journey Today!
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Fill the form below and our team will contact you.
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <Field
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                                <ErrorMessage
                                    name="fullName"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <Field
                                    type="text"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                                <ErrorMessage
                                    name="mobile"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <Field
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                                <ErrorMessage
                                    name="age"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* CTA Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-lightBrown text-white font-bold py-3 rounded-lg transition cursor-pointer"
                            >
                                {isSubmitting ? "Submitting..." : "Get Free Career Counselling"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
