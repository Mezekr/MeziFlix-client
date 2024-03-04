const SignupView = () => {
	return (
		<form action="">
			<label>
				Username:
				<input type="text" placeholder="Enter your Username" required />
			</label>
			<label>
				Password:
				<input
					type="password"
					placeholder="Enter your password"
					minLength={8}
					required
				/>
			</label>
			<label>
				Email:
				<input type="email" placeholder="Enter your email" required />
			</label>
			<label>
				Birthdate:
				<input type="date" required />
			</label>
			<button type="submit">Signup</button>
		</form>
	);
};

export default SignupView;
