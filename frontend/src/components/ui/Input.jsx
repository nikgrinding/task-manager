export default function Input({ value, onChange, placeholder, maxLength = 50 }) {
    return (
        <div className="w-full">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm focus:shadow-md"
            />
            <div className="text-xs text-gray-500 mt-1.5 ml-1">
                {value.length} / {maxLength}
            </div>
        </div>
    );
}
