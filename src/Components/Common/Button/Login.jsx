function Login({ type = "submit", disabled = false, className = "" }) {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
		>
			Login
		</button>
	);
}

export default Login;
