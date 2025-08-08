import electronLogo from "@renderer/assets/electron.svg";
import Versions from "@renderer/components/Versions";

const App = (): React.JSX.Element => {
  return (
    <div className="bg-neutral-900 w-screen h-screen text-white grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-full"
          onClick={() => {
            window.electron.ipcRenderer.send("ping");
          }}
        >
          <img alt="logo" className="h-64" src={electronLogo} />
        </button>
        <Versions />
      </div>
    </div>
  );
};

export default App;
