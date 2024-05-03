import React from 'react'

function WorkWithUs() {
    const workWithUsOptions = [
        {
            title: "Innovative Solutions",
            desc: "We offer innovative solutions to address the challenges of green energy production, storage, and utilization.",
            icon: "data.svg"
        },
        {
            title: "Sustainability Focus",
            desc: "Our focus on sustainability ensures that our solutions contribute to a cleaner, greener future for all.",
            icon: "assist.svg"
        },
        {
            title: "Cutting-Edge Technology",
            desc: "We employ cutting-edge technology to develop and implement efficient green energy solutions.",
            icon: "mobile.svg"
        },
        {
            title: "Global Impact",
            desc: "Join us in making a global impact by advancing the adoption of green hydrogen energy worldwide.",
            icon: "globe.svg"
        },
        {
            title: "Collaborative Culture",
            desc: "Experience our collaborative culture where diverse talents come together to drive innovation.",
            icon: "collab.svg"
        },
        {
            title: "Career Growth",
            desc: "Join a team that values your growth and development, offering opportunities for career advancement.",
            icon: "growth.svg"
        }
    ];

    return (
        <div>
            <section class="bg-gray-900 text-white">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">Become a Partner</h2>

                        <p class="mt-4 text-gray-300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>


                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {workWithUsOptions.map((options)=> (
                            <div
                            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                            href="#"
                        >
                            <img src={options.icon} alt="Digital Campaigns" className="size-10 text-blue-500" />

                            <h2 class="mt-4 text-xl font-bold text-white">{options.title}</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                {options.desc}
                            </p>
                        </div>
                        ))
                            }





                    </div>

                    <div class="mt-12 text-center">
                        <div
                            href="#"
                            class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Become a Partner
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkWithUs