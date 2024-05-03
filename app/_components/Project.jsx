import { Checkbox } from '@radix-ui/react-checkbox'
import React from 'react'

function Project() {
    return (
        <div>
            <section className="bg-white-100">
                <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
                    <center> <h1 className='text-3xl font-bold sm:text-4xl py-12'>Project Enquiry</h1></center>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12 ">
                            <p className="max-w-xl text-lg">
                                Let’s explore how we can adapt our system to your green energy fuel cell requirements and stop climate change
                            </p>

                            <div className="mt-8">
                                <a href="#" className="text-2xl font-bold text-blue-600"> 9876543210 </a>

                                <address className="mt-2 not-italic">Hyderabad, Telangana, India</address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4">

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="Fname">Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="First Name"
                                            type="text"
                                            id="Fname"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="Lname">Last Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Last Name"
                                            type="text"
                                            id="Lname"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols gap-4 sm:grid-cols">
                                    <div>
                                        <label className="sr-only" for="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <div>
                                            <label className="sr-only" for="Fname">Company</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Company"
                                                type="text"
                                                id="company"
                                            />
                                        </div>
                                        <div>
                                            <label className="sr-only" for="Fname">Country</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Country"
                                                type="text"
                                                id="country"
                                            />
                                        </div>

                                        <div>
                                            <label className="sr-only" for="Lname">State</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="State"
                                                type="text"
                                                id="state"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <label className="sr-only" for="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="5"
                                        id="message"
                                    ></textarea>
                                </div>


                                


                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project