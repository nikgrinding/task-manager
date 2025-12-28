import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
    return (
        <PageContainer>
            <div className="text-center py-20">
                <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-10">Page not found</p>
                <Link to="/">
                    <Button>Go back home</Button>
                </Link>
            </div>
        </PageContainer>
    );
}
