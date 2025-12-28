export default function Input({ value, onChange, placeholder, maxLength = 50 }) {
    return (
        <div className="w-full">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className="text-sm text-gray-500 mt-1">
                {value.length} / {maxLength} characters
            </div>
        </div>
    );
}
