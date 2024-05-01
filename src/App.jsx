import "./App.css";
import { MainComponent, Sidebar } from "./components";

function App() {
	return (
		<>
			<div className="flex flex-wrap flex-row ">
					<Sidebar />
				<MainComponent />
			</div>
		</>
	);
}

export default App;
