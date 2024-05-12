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

	const onSent = async (prompt) => {
		setData("");
		setLoading(true);
		setShowResult(true);
		setRecentPrompt(input);
		const response = await runChat(input);
		setData(response);
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
