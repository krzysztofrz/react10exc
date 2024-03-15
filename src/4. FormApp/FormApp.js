import { useState } from "react";
import FormInput from "./FormInput";

const FormApp = () => {
	return (
		<div>
			<FormInput />
			<FormInput />
			<FormInput />
			<FormInput />
		</div>
	);
};

export default FormApp;

/*
























*/
// czesc piersza //////////////////////////////////////////////////

// import { useState } from "react";
// import FormInput from "./FormInput";

// const FormValid = () => {
// 	const [username, setUsername] = useState("");
// 	console.log(username);
// 	return (
// 		<div className="app">
// 			<form action="">
// 				<FormInput placeholder="Username" setUsername={setUsername} />
// 				<FormInput placeholder="Email" />
// 				<FormInput placeholder="Full Name" />
// 				<FormInput placeholder="Sth else" />
// 			</form>
// 		</div>
// 	);
// };

// export default FormValid;

// czesc druga /////////////////////////////////////////////

// import { useRef, useState } from "react";
// import FormInput from "./FormInput";

// const FormValid = () => {
// 	// const [username, setUsername] = useState("");
// 	const usernameRef = useRef();
// 	// console.log(username);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(usernameRef);
// 	};
// 	return (
// 		<div className="app">
// 			<form onSubmit={handleSubmit} action="">
// 				{/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
// 				<FormInput refer={usernameRef} placeholder="Username" />
// 				<FormInput placeholder="Email" />
// 				<FormInput placeholder="Full Name" />
// 				<FormInput placeholder="Sth else" />
// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default FormValid;

/// czesc trzecia ///////////////////

// import { useRef, useState } from "react";
// import FormInput from "./FormInput";

// const FormValid = () => {
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const data = new FormData(e.target);
// 		console.log(Object.fromEntries(data.entries()));
// 	};
// 	return (
// 		<div className="app">
// 			<form onSubmit={handleSubmit} action="">
// 				<FormInput name="username" placeholder="Username" />
// 				<FormInput name="email" placeholder="Email" />
// 				<FormInput name="fullname" placeholder="Full Name" />
// 				<FormInput name="sth" placeholder="Sth else" />
// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default FormValid;

///// czesc czwarta /////

// import { useState } from "react";
// import FormInput from "./FormInput";

// const FormValid = () => {
// 	const [values, setValues] = useState({
// 		username: "",
// 		email: "",
// 		birthday: "",
// 		password: "",
// 		confirmPassword: "",
// 	});

// 	const inputs = [
// 		{
// 			id: 1,
// 			name: "username",
// 			type: "text",
// 			placeholder: "Username",
// 			label: "Username",
// 		},
// 		{
// 			id: 2,
// 			name: "email",
// 			type: "email",
// 			placeholder: "Email",
// 			label: "Email",
// 		},
// 		{
// 			id: 3,
// 			name: "birthday",
// 			type: "text",
// 			placeholder: "Birthday",
// 			label: "Birthday",
// 		},
// 		{
// 			id: 4,
// 			name: "password",
// 			type: "password",
// 			placeholder: "Password",
// 			label: "Password",
// 		},
// 		{
// 			id: 5,
// 			name: "confirmPassword",
// 			type: "password",
// 			placeholder: "Confirm Password",
// 			label: "Confirm Password",
// 		},
// 	];

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	};
// 	console.log(values);
// 	return (
// 		<div className="app">
// 			<form onSubmit={handleSubmit} action="">
// 				{inputs.map((input) => (
// 					<FormInput
// 						key={input.id}
// 						{...input}
// 						value={values[input.name]}
// 						onChange={onChange}
// 					/>
// 				))}

// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default FormValid;

///// czesc piata /////

// import { useState } from "react";
// import FormInput from "./FormInput";

// const FormValid = () => {
// 	const [values, setValues] = useState({
// 		username: "",
// 		email: "",
// 		birthday: "",
// 		password: "",
// 		confirmPassword: "",
// 	});

// 	const inputs = [
// 		{
// 			id: 1,
// 			name: "username",
// 			type: "text",
// 			placeholder: "Username",
// 			errorMessage:
// 				"Username should be 3-16 characters and shouldn't include any special character!",
// 			label: "Username",
// 			pattern: "^[A-Za-z0-9]{3,16}$",
// 			required: true,
// 		},
// 		{
// 			id: 2,
// 			name: "email",
// 			type: "email",
// 			placeholder: "Email",
// 			errorMessage: "It should me a valid email address",
// 			label: "Email",
// 			pattern: "^[A-Za-z0-9]{3,16}$",
// 			required: true,
// 		},
// 		{
// 			id: 3,
// 			name: "birthday",
// 			type: "date",
// 			placeholder: "Birthday",
// 			// errorMessage: "",
// 			label: "Birthday",
// 		},
// 		{
// 			id: 4,
// 			name: "password",
// 			type: "password",
// 			placeholder: "Password",
// 			errorMessage:
// 				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
// 			label: "Password",
// 			pattern:
// 				"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
// 			required: true,
// 		},
// 		{
// 			id: 5,
// 			name: "confirmPassword",
// 			type: "password",
// 			placeholder: "Confirm Password",
// 			errorMessage: "Passwords don't match",
// 			label: "Confirm Password",
// 			pattern: values.password,
// 			required: true,
// 		},
// 	];

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};

// 	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	};
// 	console.log(values);
// 	return (
// 		<div className="app">
// 			<form onSubmit={handleSubmit} action="">
// 				{inputs.map((input) => (
// 					<FormInput
// 						key={input.id}
// 						{...input}
// 						value={values[input.name]}
// 						onChange={onChange}
// 					/>
// 				))}

// 				<button>submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default FormValid;
