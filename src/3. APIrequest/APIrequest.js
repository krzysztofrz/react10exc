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
// 	const [joke, setJoke] = useState({ text: "", iconUrl: "" });
// 	// const api1 = "https://randomuser.me/api";
// 	const api2 = "https://api.chucknorris.io/jokes/random";
// 	const getMyApi = () => {
// 		Axios.get(api2).then((response) => {
// 			console.log(response);
// 			setJoke({ text: response.data.value, iconUrl: response.data.icon_url });
// 		});
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
