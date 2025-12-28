export default function PageContainer({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
            <div className="max-w-3xl mx-auto px-4">{children}</div>
        </div>
    );
}
