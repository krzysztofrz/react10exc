import React, { forwardRef, useState } from "react";
import styles from "./BrowserInput.module.css";

const BrowserInput = () => {
	return null;
};

export default BrowserInput;

/*


















*/
// rozwiazanie
// const BrowserInput = () => {
// 	const [searchTerm, setSearchTerm] = useState("");
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				placeholder="Search..."
// 				onChange={(e) => setSearchTerm(e.target.value)}
// 			/>

// 			<div className={styles.app}>
// 				{data
// 					.filter((val) => {
// 						if (searchTerm === "") {
// 							return val;
// 						} else if (
// 							val.first_name
// 								.toLocaleLowerCase()
// 								.includes(searchTerm.toLocaleLowerCase())
// 						) {
// 							return val;
// 						}
// 					})
// 					.map((val, inx) => {
// 						return (
// 							<li key={val.id}>
// 								{`${val.first_name} -
// 							${val.email}`}
// 							</li>
// 						);
// 					})}
// 			</div>
// 		</div>
// 	);
// };

// export default BrowserInput;
