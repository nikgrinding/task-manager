export default function LoadingMessage() {
    return (
        <div className="flex justify-center items-center py-12">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-150"></div>
            </div>
        </div>
    );
}
