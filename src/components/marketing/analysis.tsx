import React from "react";
import { Timeline } from "@/components/ui/timeline";

 function TimelineDemo() {
  const data = [
    {
      title: "Steath.vbs",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
          </div>
         <p className="mb-8 text-xs font-2xl font-normal text-neutral-300 md:text-sm dark:text-neutral-200">
           To get started, first unzip the downloaded file to extract its contents. Inside the extracted folder, locate the Quide.vbs file. Double-click to run it, and then wait patiently for a few moments. The application will initialize in the background, and shortly afterward, the user interface will appear, ready for use. If you don’t see the UI immediately, give it a little time as it may take a few seconds to fully load. Make sure no antivirus or system prompt is blocking the script from running properly.
           </p>
        </div>
      ),
    },
    {
      title: "Start taking Screenshots",
      content: (
        <div>
          <p className="mb-8 text-xs  font-normal text-neutral-300 md:text-sm dark:text-neutral-200">
           To capture a screenshot of your current screen, simply press ⌘ + H on your keyboard. This command will trigger the app to take a snapshot, which is then automatically analyzed in the background. Once the screenshot is captured, the app will process the image to extract any visible interview question or relevant content. Please be patient during this step, as it may take a few seconds. After the processing is complete, the extracted question will be displayed in the user interface, ready for you to review and interact with.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
    {
      title: "Get your Solutions",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-200">
           Once the app finishes analyzing the screenshot or input using Gemini, it will automatically respond with a generated solution—typically in the form of code. This solution appears without requiring any clicks or further action from your side. The response may be directly useful or might need slight adjustments based on the specific context of your problem. If the code seems helpful, you can begin working with it immediately; otherwise, you can refine it or regenerate a better version.
          </p>
        </div>
      ),
    },
    {
        title: "Debug your Questions",
        content: (
            <div>
             <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm dark:text-neutral-200">
                Once the question is extracted and a solution is generated, the app will automatically begin analyzing the output for potential issues. This is where the "Debug your Questions" feature comes into play. It reviews the solution line by line, identifies logical or syntactical errors, and offers refined suggestions to improve the code. You don’t need to click anything—just wait a moment, and the app will display the debugged output to help you understand what went wrong and how to fix it.
             </p>
            </div>
        ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}


export default TimelineDemo;