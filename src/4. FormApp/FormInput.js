import { useState } from "react";
import "./formInput.css";

const FormInput = () => {
	return (
		<>
			<label htmlFor="">123</label>
			<input type="text" />
		</>
	);
};

export default FormInput;

///// rozwiazanie
/*











*/
// const FormInput = (props) => {
// 	const [focused, setFocused] = useState(false);
// 	const { label, errorMessage, onChange, id, ...inputProps } = props;

// 	const handleFocus = (e) => {
// 		setFocused(true);
// 	};

// 	return (
// 		<div className="container">
// 			<label htmlFor="">{label}</label>
// 			<input
// 				{...inputProps}
// 				onChange={onChange}
// 				onFocus={() =>
// 					inputProps.name === "confirmPassword" && setFocused(true)
// 				}
// 				onBlur={handleFocus}
// 				focused={focused.toString()}
// 			/>
// 			<span>{errorMessage}</span>
// 		</div>
// 	);
// };

// export default FormInput;
