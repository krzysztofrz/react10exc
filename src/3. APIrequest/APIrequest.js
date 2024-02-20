import Axios from "axios";
import { useState } from "react";

const ApiRequest = () => {
	return <div>api request</div>;
};

export default ApiRequest;

/*
rozwiazanie















*/

//// axios solution
// const ApiRequest = () => {
// 	const [user, setUser] = useState({ text: "", iconUrl: "" });
// 	const api1 = "https://randomuser.me/api";
// 	// const api2 = "https://api.chucknorris.io/jokes/random";
// 	const getMyApi = () => {
// 		Axios.get(api1).then((response) => {
// 			console.log(response.data);
// 			setUser({
// 				text: response.data.results[0].email,
// 				iconUrl: response.data.results[0].picture.large,
// 			});
// 		});
// 	};

// 	return (
// 		<>
// 			<div>this is joke</div>
// 			<p>{user.text}</p>
// 			<img src={user.iconUrl} alt="face" />
// 			<button onClick={getMyApi}>get random person</button>
// 		</>
// 	);
// };

// export default ApiRequest;

// fetch solition
// const ApiRequest = () => {
// 	const [joke, setJoke] = useState({ text: "", iconUrl: "" });
// 	// const api1 = "https://randomuser.me/api";
// 	const api2 = "https://api.chucknorris.io/jokes/random";
// 	const getMyApi = () => {
// 		fetch(api2)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setJoke({ text: data.value, iconUrl: data.icon_url });
// 			});
// 	};

// 	return (
// 		<>
// 			<div>this is joke</div>
// 			<p>{joke.text}</p>
// 			<img src="{joke.iconUrl" alt="joke icon" />
// 			<button onClick={getMyApi}>get random joke</button>
// 		</>
// 	);
// };

// export default ApiRequest;

/////////////// dodanie kolejnych zdjec z mailem

// const ApiRequest = () => {
// 	const [users, setUsers] = useState([]);
// 	const api1 = "https://randomuser.me/api";
// 	// const api2 = "https://api.chucknorris.io/jokes/random";

// 	const getMyApi = () => {
// 		Axios.get(api1).then((response) => {
// 			console.log(response.data);

// 			const newUser = {
// 				text: response.data.results[0].email,
// 				iconUrl: response.data.results[0].picture.large,
// 			};
// 			setUsers((users) => [...users, newUser]);
// 		});
// 	};

// 	return (
// 		<>
// 			<div>this is new user</div>
// 			{users.map((user, index) => (
// 				<div key={index}>
// 					{" "}
// 					{/* Uwaga: lepiej użyć bardziej unikalnego klucza niż index */}
// 					<p>{user.text}</p>
// 					<img src={user.iconUrl} alt="face" />
// 				</div>
// 			))}
// 			<button onClick={getMyApi}>get random person</button>
// 		</>
// 	);
// };

// export default ApiRequest;
