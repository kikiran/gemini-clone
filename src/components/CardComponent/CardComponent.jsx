import React from "react";
import { FaCompass } from "react-icons/fa";

const CardComponent = () => {
	return (
		<div className="bg-[#f0f4f9]   w-52  rounded-xl hover:bg-slate-200">
			<div className="flex flex-col p-4 justify-between h-52 text-base font-small text-gray-900">
				<p>Frist Card</p>
				<div className="self-end">
					<FaCompass />
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
