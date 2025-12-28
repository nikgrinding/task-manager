export default function Button({ type = "button", variant = "primary", onClick, children }) {
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-700",
        secondary: "bg-gray-500 hover:bg-gray-700",
        danger: "bg-red-500 hover:bg-red-700",
    };
    const className = `px-4 py-2 rounded font-medium transition-colors text-white ${variants[variant]}`;
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
}
