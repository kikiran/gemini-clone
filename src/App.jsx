import "./App.css";
import { MainComponent, Sidebar } from "./components";

function App() {
	return (
		<>
			<div className="flex flex-row justify-start w-auto">
				<div className="">
					<Sidebar />
				</div>
				<div className="w-full">
					<MainComponent />
				</div>
			</div>
		</>
	);
}

export default App;
