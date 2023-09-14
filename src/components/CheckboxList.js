import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

function CheckboxList() {
  const [tasks, setTasks] = useState([
    { label: "Add Keywords", isChecked: false },
    { label: "Add unique Title and meta Tags", isChecked: false },
    {
      label:
        "Add Other tags: like OG meta tags. (og:title , og:url , og:description , og:image)",
      isChecked: false,
    },
    { label: "Use Optimized Images", isChecked: false },
    { label: "Keep it under 125 characters", isChecked: false },
    { label: "Include one main keyword for context", isChecked: false },
    { label: "Don’t include “image of” or “picture of”", isChecked: false },
    { label: "Lazy-Load the Images", isChecked: false },
    { label: "Build an Internal Linking Structure", isChecked: false },
    {
      label: "Use headers and subheadings. (Only 1 H1 per page)",
      isChecked: false,
    },
    { label: "Make your content visually appealing", isChecked: false },
    { label: "Avoid using intrusive pop-ups", isChecked: false },
    { label: "Use white space", isChecked: false },
    { label: "Make your site mobile-friendly.", isChecked: false },
    { label: "Website responsiveness", isChecked: false },
    { label: "Never stretch images", isChecked: false },
    { label: "Use short URLs", isChecked: false },
    { label: "Include your target keyword", isChecked: false },
    {
      label: "Include categories or subfolders if necessary",
      isChecked: false,
    },
    { label: "Include xml Sitemap and robot files", isChecked: false },
    { label: "Add button name", isChecked: false },
    { label: "Add link name", isChecked: false },
    { label: "Add explicit width and height.", isChecked: false },
    { label: "Avoid nofollow attribute", isChecked: false },
    { label: "Avoid Dead links or broken redirects", isChecked: false },
    { label: "Add dynamic year in the footer", isChecked: false },
    {
      label:
        "www redirect: The www and non-www versions of the URL should redirected to the same site",
      isChecked: false,
    },
    { label: "Minify and compress network payloads.", isChecked: false },
    {
      label: "Use WebP instead of JPEG or PNG for the images.",
      isChecked: false,
    },
    {
      label: "Set the compression level of JPEG images to 75",
      isChecked: false,
    },
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedTasksVisible, setCompletedTasksVisible] = useState(true);

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );

    if (savedTasks) {
      setTasks(savedTasks);
    }

    if (savedCompletedTasks) {
      setCompletedTasks(savedCompletedTasks);
    }
  }, []);

  // Save data to localStorage whenever tasks or completedTasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const handleToggle = (label) => {
    const updatedTasks = tasks.map((task) => {
      if (task.label === label) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    setTasks(updatedTasks);

    if (completedTasks.includes(label)) {
      const updatedCompletedTasks = completedTasks.filter(
        (completedTask) => completedTask !== label
      );
      setCompletedTasks(updatedCompletedTasks);
    } else {
      setCompletedTasks([...completedTasks, label]);
    }
  };

  const uncheckedTasks = tasks.filter((task) => !task.isChecked);

  return (
    <div>
      {uncheckedTasks.length > 0 && (
        <>
          <h2 className="text-[#000080] font-bold text-xl flex items-center ">
            <span className="pr-3">
              <img src="./todo-list.png" alt="Image" className="w-6 h-6" />
            </span>
            ToDo List{" "}
            <span className="pl-3 text-[#90CAF9] font-normal">
              {uncheckedTasks.length}
            </span>
          </h2>
          {uncheckedTasks.map((task) => (
            <Checkbox
              key={task.label}
              label={task.label}
              isChecked={task.isChecked}
              onToggle={handleToggle}
            />
          ))}
        </>
      )}
      {completedTasks.length > 0 && (
        <>
          <h2 className="text-black flex items-center">
            <span
              className="pr-3"
              onClick={() => setCompletedTasksVisible(!completedTasksVisible)}
            >
              {completedTasksVisible ? (
                <svg
                  class="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              ) : (
                <svg
                  class="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              )}
            </span>{" "}
            Completed {completedTasks.length}
          </h2>
          {completedTasksVisible && (
            <>
              {completedTasks.map((completedTask) => (
                <div key={completedTask}>
                  {/* Render the checkbox and label */}
                  <Checkbox
                    label={completedTask}
                    isChecked={true}
                    onToggle={handleToggle}
                  />
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CheckboxList;
