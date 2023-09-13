import React, { useState } from "react";
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
          <h2 className="text-black">ToDo List:</h2>
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
          <h2 className="text-black">Completed:</h2>
          {completedTasks.map((completedTask) => (
            <Checkbox
              key={completedTask}
              label={completedTask}
              isChecked={true}
              onToggle={handleToggle}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CheckboxList;
