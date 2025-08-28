export default function Footer() {
    return (
        <footer className="py-6 text-center border-t mt-10">
            <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Abhijit Gadhave. All rights reserved.
            </p>
        </footer>
    );
}