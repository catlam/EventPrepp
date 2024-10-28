import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FooterItem() {
    const linkStyle = {
        textDecoration: 'none',
        color: '#6c757d', // Default color
        transition: 'color 0.3s ease',
    };

    const hoverStyle = {
        color: '#007bff', // Hover color
    };

    return (
        <div className="flex flex-col ">
            <footer className="bg-white">
                <div className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="col-span-1">
                            <img
                                src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                                alt=""
                                width="180"
                                className="mb-3"
                            />
                            <p className="font-italic text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                            </p>
                            <ul className="flex space-x-4 mt-4">
                                {['twitter', 'facebook', 'instagram', 'pinterest', 'github'].map(platform => (
                                    <li key={platform}>
                                        <a
                                            href={`https://www.${platform}.com`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={platform}
                                            style={linkStyle}
                                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                                        >
                                            <i className={`fab fa-${platform}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h6 className="text-uppercase font-bold mb-4">Product</h6>
                            <ul className="list-none mb-0">
                                {['Angular', 'Vue', 'React'].map(product => (
                                    <li className="mb-2" key={product}>
                                        <a
                                            href={`https://www.${product}.com`}
                                            style={linkStyle}
                                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                                        >
                                            {product}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h6 className="text-uppercase font-bold mb-4">Company</h6>
                            <ul className="list-none mb-0">
                                {['Login', 'Register', 'Wishlist', 'Our Products'].map(company => (
                                    <li className="mb-2" key={company}>
                                        <a
                                            href={`https://www.${company}.com`}
                                            style={linkStyle}
                                            onMouseEnter={e => (e.currentTarget.style.color = hoverStyle.color)}
                                            onMouseLeave={e => (e.currentTarget.style.color = linkStyle.color)}
                                        >
                                            {company}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h6 className="text-uppercase font-bold mb-4">Newsletter</h6>
                            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <div className="p-1 rounded border">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        aria-describedby="button-addon1"
                                        className="form-input border-0 shadow-0 p-2 flex-grow"
                                    />
                                    <button id="button-addon1" type="submit" className="btn btn-link p-2">
                                        <i className="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
