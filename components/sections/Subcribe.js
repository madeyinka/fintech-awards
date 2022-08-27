import React from 'react'

const Subcribe = () => {
    return (
        <div>
            <p className="text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white">
                Join our mailing list to stay in the loop with our newest feature releases, tech updates, tips and tricks

            </p>
            <div className="mx-auto mt-7 max-w-md text-center">
                <form className="relative">
                    <input type="email" placeholder="Email address" className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white" />
                    <button className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subcribe