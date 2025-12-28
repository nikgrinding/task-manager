export default function Button({ type = "button", variant = "primary", onClick, children }) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-95",
        secondary: "bg-gray-600 hover:bg-gray-700 shadow-sm hover:shadow-md active:scale-95",
        danger: "bg-red-600 hover:bg-red-700 shadow-sm hover:shadow-md active:scale-95",
    };
    const className = `px-4 py-2 rounded-lg font-medium transition-all duration-200 text-white ${variants[variant]}`;
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}
