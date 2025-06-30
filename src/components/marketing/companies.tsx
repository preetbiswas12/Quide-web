"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const applications = [
  {
    id: "001",
    name: "Zoom",
    icon: "/icon/zoom.png",
    status: "conditional",
    statusText: "Conditional",
    details: {
      lastChecked: "2 hours ago",
      compatibility: "Works with screen sharing disabled",
      notes: "Some features may be limited during video calls",
    },
  },
  {
    id: "002",
    name: "Hackerrankicon",
    icon: "/icon/hackerrank.png",
    status: "undetectable",
    statusText: "Undetectable",
    details: {
      lastChecked: "15 minutes ago",
      compatibility: "Full compatibility confirmed",
      notes: "All coding challenges work seamlessly",
    },
  },
  {
    id: "003",
    name: "Codesignal",
    icon: "/icon/codesignal.svg",
    status: "undetectable",
    statusText: "Undetectable",
    details: {
      lastChecked: "1 hour ago",
      compatibility: "Complete integration support",
      notes: "Assessment tools function normally",
    },
  },
  {
    id: "004",
    name: "CoderPad",
    icon: "/icon/coderpad.png",
    status: "undetectable",
    statusText: "Undetectable",
    details: {
      lastChecked: "30 minutes ago",
      compatibility: "Real-time collaboration supported",
      notes: "Live coding interviews work perfectly",
    },
  },
  {
    id: "005",
    name: "Chime",
    icon: "/icon/chime.png",
    status: "conditional",
    statusText: "Conditional",
    details: {
      lastChecked: "45 minutes ago",
      compatibility: "Audio-only mode recommended",
      notes: "Video sharing may trigger detection",
    },
  },
  {
    id: "006",
    name: "Microsoft Teams",
    icon: "/icon/teams.png",
    status: "undetectable",
    statusText: "Undetectable",
    details: {
      lastChecked: "20 minutes ago",
      compatibility: "Enterprise features supported",
      notes: "Meeting recordings and chat work normally",
    },
  },
  {
    id: "007",
    name: "Google Meet",
    icon: "/icon/meet.png",
    status: "undetectable",
    statusText: "Undetectable",
    details: {
      lastChecked: "10 minutes ago",
      compatibility: "Full feature compatibility",
      notes: "Screen sharing and breakout rooms supported",
    },
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "conditional":
      return "bg-yellow-500/20 text-yellow-400";
    case "undetectable":
      return "bg-green-500/20 text-green-400";
    default:
      return "bg-gray-500/20 text-gray-300";
  }
};

const DoesItWork = () => {
  return (
    <section id="compatibility" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-8xl lg:text-4xl font-medium">
             Does it <span className="font-subheading italic">Work ?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time compatibility status with popular platforms and applications.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {applications.map((app) => (
            <AccordionItem
              key={app.id}
              value={app.id}
              className="border-b border-neutral-800"
            >
              <AccordionTrigger className="flex items-center justify-between px-2 sm:px-4 py-4 hover:bg-neutral-800/40 rounded-lg transition">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-gray-500 w-10">
                    {app.id}
                  </span>
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-white font-semibold">{app.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    <span className="relative">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-current opacity-75"></span>
                      <span className="inline-flex h-2 w-2 rounded-full bg-current"></span>
                    </span>
                    {app.statusText}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-slate-800/40 px-6 py-4 rounded-b-xl space-y-3 text-sm text-white">
                <div>
                  <span className="text-gray-400 block mb-1">Last Checked:</span>
                  <span>{app.details.lastChecked}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Compatibility:</span>
                  <span>{app.details.compatibility}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Notes:</span>
                  <span className="text-gray-300">{app.details.notes}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default DoesItWork;