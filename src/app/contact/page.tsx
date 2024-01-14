import Link from "next/link";

const Contact = () => {
    return (
        <div className='flex justify-center items-center view-container'>
            <p>
                I added this for the sake of having another page. Please return
                to the&nbsp;
                <Link href='/' className='underline hover:no-underline'>
                    Home page
                </Link>
                .
            </p>
        </div>
    );
};

export default Contact;
