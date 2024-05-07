import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const onClickOpenHandler = () => {
		setOpen(!open);
	};
	return (
		<div className={`sidebar ${open ? "w-60" : "w-20"}`}>
			<div className="sidebar_top">
				<div className="has-tooltip">
					<img
						src={assets.menu_icon}
						alt="sidebar image"
						className="sidebar_top_img"
						onClick={onClickOpenHandler}
					/>
					<span className="tooltip">
						{open ? "Collapse Menu" : "Expand Menu"}
					</span>
				</div>

				<div className="has-tooltip">
					<img
						src={assets.plus_icon}
						alt="sidebar image"
						className="sidebar_top_img"
					/>
					<span className="tooltip">New Chat</span>
				</div>
			</div>
			<div className="sidebar_bottom">
				<div className="has-tooltip">
					<img
						src={assets.question_icon}
						alt="sidebar image"
						className="sidebar_bottom_img"
					/>
					<span className="tooltip">Help</span>
				</div>

				<div className="has-tooltip">
					<img
						src={assets.history_icon}
						alt="sidebar image"
						className="sidebar_bottom_img"
					/>
					<span className="tooltip">Activity</span>
				</div>
				<div className="has-tooltip">
					<img
						src={assets.setting_icon}
						alt="sidebar image"
						className="sidebar_bottom_img"
					/>
					<span className="tooltip">Settings</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
