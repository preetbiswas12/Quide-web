  function Pricing() {
  const commands = [
    {
      title: "Hide/Show Window",
      description: "Hide or show Interview Coder",
      keys: ["Ctrl", "B"],
    },
    {
      title: "Take Screenshot",
      description: "Capture screenshots of the interview question",
      keys: ["Ctrl", "H"],
    },
    {
      title: "Move Window",
      description: "Move the window around your screen without touching the mouse",
      keys: ["Ctrl", "↑", "↓", "←", "→"],
    },
    {
      title: "Generate Solution",
      description: "Generate an initial solution with explanations",
      keys: ["Ctrl", "Enter"],
    },
    {
      title: "Reset Context",
      description: "Reset everything to start fresh with a new problem",
      keys: ["Ctrl", "R"],
    },
    {
      title: "Quit Application",
      description: "Quit the application",
      keys: ["Ctrl", "Q"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col items-center px-4 py-12 font-sans">
      <h1 className="text-4xl mt-5 font-bold text-[#d6d6e7] mb-2 font-sans">Commands we love</h1>
      <p className="text-sm text-[#b0b0c3] mb-10">
        These commands are designed to be natural and easy to remember.
      </p>

      <div className="w-full max-w-3xl space-y-8">
        {commands.map((cmd, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="mb-2 md:mb-0">
              <p className="text-lg font-semibold text-white">{cmd.title}</p>
              <p className="text-sm text-gray-400">{cmd.description}</p>
            </div>
            <div className="flex gap-1 flex-wrap">
              {cmd.keys.map((key, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1c20] border border-[#2e2e33] rounded-md px-3 py-1 text-sm font-semibold text-white"
                >
                  {key}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Pricing;