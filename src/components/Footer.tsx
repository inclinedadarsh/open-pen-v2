import Link from "next/link";

const Footer = () => {
    return (
        <footer className='px-10 border-t text-center py-5'>
            Copyright &copy; 2024,{" "}
            <Link
                href='https://adarshdubey.com/'
                className='underline hover:no-underline'
                target='_blank'
                rel='noopener noreferrer'
            >
                Adarsh Dubey
            </Link>
            . All rights reserved.
        </footer>
    );
};

export default Footer;
