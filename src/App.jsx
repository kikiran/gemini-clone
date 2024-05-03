import "./App.css";
import { MainComponent, Sidebar } from "./components";

function App() {
	return (
		<>
			<div className="flex flex-wrap flex-row">
				<div className="">
					<Sidebar />
				</div>
				<div>
					<MainComponent />
				</div>
			</div>
		</>
	);
}

export default App;
