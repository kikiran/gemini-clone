import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/GeminiContext";

const InputComponent = () => {
	const { input, setInput, onSent } = useContext(Context);

	const handdleChange = (e) => {
		setInput(e.target.value);
		e.preventDefault();
	};

	return (
		<div className="w-full max-w-4xl">
			<form className="w-full max-w-4xl">
				<div className="flex items-center border-2 rounded-full border-teal-500 py-2 pr-8">
					<input
						className="w-full text-gray-700 m-3 py-1 px-5 leading-tight focus:outline-none"
						type="text"
						placeholder="Enter a prompt here"
						aria-label="prompt here"
						onChange={handdleChange}
						value={input}
					/>
					<img
						src={assets.gallery_icon}
						alt="gallery_icon"
						className="h-6 w-6 mr-5 cursor-pointer"
					/>
					<img
						src={assets.mic_icon}
						alt="micimage"
						className="h-6 w-6  mr-5 cursor-pointer"
					/>
					<img
						src={assets.send_icon}
						alt="sendimage"
						className="h-6 w-6  mr-5 cursor-pointer"
						onClick={(e) => onSent()}
					/>
				</div>
			</form>
		</div>
	);
};

export default InputComponent;
