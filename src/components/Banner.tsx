import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-stone-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 animate-fadeIn delay-100">
                        <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
                            <span className="block">Summer Sale!</span>
                            <span className="block text-yellow-200">Up to 50% Off</span>
                        </h2>
                        <p className="mt-3 text-lg text-yellow-200">
                            Limited time offer on selected items. Don't miss out!
                        </p>
                    </div>
                    <div className="animate-fadeIn delay-200">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-yellow-400 hover:bg-yellow-500"
                            >
                                Shop the Sale
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;