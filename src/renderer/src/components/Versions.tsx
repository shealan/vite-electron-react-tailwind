import { useState } from "react";

const Versions = (): React.JSX.Element => {
  const [versions] = useState(window.electron.process.versions);

  return (
    <ul className="text-white/50 text-sm flex flex-col gap-1 items-center">
      <li>Electron v{versions.electron}</li>
      <li>Chromium v{versions.chrome}</li>
      <li>Node v{versions.node}</li>
    </ul>
  );
};

export default Versions;
