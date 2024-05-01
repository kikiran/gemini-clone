import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<img
					src={assets.menu_icon}
					alt="sidebar image"
					className="sidebar_top_img"
				/>

				<img
					src={assets.plus_icon}
					alt="sidebar image"
					className="sidebar_top_img bg-[#E5EAF1] rounded-full p-2"
				/>
			</div>
			<div className="sidebar_bottom">
				<img
					src={assets.question_icon}
					alt="sidebar image"
					className="sidebar_bottom_img"
				/>

				<img
					src={assets.history_icon}
					alt="sidebar image"
					className="sidebar_bottom_img"
				/>
				<img
					src={assets.setting_icon}
					alt="sidebar image"
					className="sidebar_bottom_img"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
