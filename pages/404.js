import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const ErrorPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We're Sorry, Page not found.</h2>
                    <p>
                        The page you're looking for might have been removed or
                        had its name changed or is temporarily unavailable.{' '}
                    </p>
                    <a>Back to Homepage</a>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
