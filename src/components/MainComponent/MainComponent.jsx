import React, { useRef, useState } from "react";
import { MdArrowDropDown, MdNewReleases } from "react-icons/md";

import { assets } from "../../assets/assets";
import { useOutSideClickHook } from "../../hooks/OutSideClick";

const MainComponent = () => {
	const ref = useRef();
	const [open, setOpen] = useState(false);
	const onClickOpenHandler = () => {
		setOpen(!open);
	};
	useOutSideClickHook(ref, () => {
		setOpen(false);
	});

	return (
		<>
			<div className="flex flex-row justify-between " ref={ref}>
				<div className="inline-flex justify-center p-5">
					<div className="text-2xl">Gemini</div>
					<p className="p-1">
						<MdArrowDropDown className="text-2xl " />
					</p>
				</div>
				<div className="flex flex-row justify-between gap-5 p-5">
					<div className="w-auto">
						<button className="bg-[#dde3ea] p-2 rounded-lg inline-flex items-center space-x-2">
							<img
								src={assets.btn_icon}
								alt="btnicon"
								width={20}
							/>
							<span>Try Gemini Advanced</span>
						</button>
					</div>
					<div>
						<div className="relative inline-block text-left">
							<div>
								<img
									src={assets.user_icon}
									alt="user image"
									className="object-cover rounded-full w-10 h-10 cursor-pointer"
									onClick={onClickOpenHandler}
								/>
							</div>
							{open ? (
								<div
									className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#dde3ea]  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="menu-button"
								>
									<div className="py-1" role="none">
										<a
											href="#"
											className="text-gray-700 block px-4 py-2 text-sm"
											role="menuitem"
											tabindex="-1"
											id="menu-item-0"
										>
											Account settings
										</a>
										<a
											href="#"
											className="text-gray-700 block px-4 py-2 text-sm"
											role="menuitem"
											tabindex="-1"
											id="menu-item-1"
										>
											Support
										</a>
										<a
											href="#"
											className="text-gray-700 block px-4 py-2 text-sm"
											role="menuitem"
											tabindex="-1"
											id="menu-item-2"
										>
											License
										</a>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#041e49] w-full h-8 gap-2 p-1 rounded-sm inline-flex justify-center  text-white text-center text-sm">
				<MdNewReleases className="mt-1" />

				<p>
					Gemini was just updated.
					<a
						className="underline"
						href="https://gemini.google.com/updates"
						target="_blank"
					>
						See update
					</a>
				</p>
			</div>
		</>
	);
};

export default MainComponent;
