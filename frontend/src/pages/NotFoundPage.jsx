import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
    return (
        <PageContainer>
            <div className="text-center py-16">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                <Link to="/" className="text-blue-500 hover:underline">
                    <Button variant="secondary">Go back home</Button>
                </Link>
            </div>
        </PageContainer>
    );
}
