import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [previousPrompt, setPreviousPrompt] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showData, setData] = useState("");
	const [showResult, setShowResult] = useState(false);

	const delayPara = (i, nextword) => {
		setTimeout(() => {
			setData((prev) => prev + nextword);
		}, 75 * i);
	};

	const onSent = async (prompt) => {
		setData("");
		setLoading(true);
		setShowResult(true);
		setRecentPrompt(input);
		const response = await runChat(input);
		let responseArray = response.split("**");
		let newResponse;
		for (let i = 0; i < responseArray.length; i++) {
			if (i === 0 || i % 2 !== 1) {
				newResponse += responseArray[i];
			} else {
				newResponse += "<b>" + responseArray[i] + "</b>";
			}
		}
		let newResponse2 = newResponse.split("*").join("</br>");
		let finalResponse = newResponse2.split(" ");
		for (let i = 0; i < finalResponse.length; i++) {
			const nextword = finalResponse[i];
			delayPara(i, nextword + " ");
		}
		// setData(finalResponse);
		setLoading(false);
		setInput("");
	};

	const contextValue = {
		previousPrompt,
		setPreviousPrompt,
		onSent,
		setRecentPrompt,
		recentPrompt,
		input,
		setInput,
		showResult,
		setShowResult,
		showData,
		setData,
		loading,
	};

	return (
		<Context.Provider value={contextValue}>
			{props.children}
		</Context.Provider>
	);
};

export default ContextProvider;
