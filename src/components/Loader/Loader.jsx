import React from "react";

const Loader = () => {
	return (
		<div class="   rounded-md  max-w-4xl w-full mx-auto">
			<div class="animate-pulse flex ">
				<div class="flex-1  py-1">
					<div class="space-y-3">
						<div class="grid  gap-4">
							<div class="h-4 bg-slate-200 rounded col-span-2"></div>
							<div class="h-4 bg-slate-200 rounded col-span-2"></div>
							<div class="h-4 bg-slate-200 rounded col-span-2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
