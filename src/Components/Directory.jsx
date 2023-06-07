import React, { useState } from "react";

const Directory = ({ files }) => {
  const [isExpanded, toggleExpanded] = useState(false);

  if (files.type === "file") {
    return (
      <>
        <h3 className="file-name">{files.name}</h3>
        <br />
      </>
    );
  }

  return (
    <div className="folder">
      <h2 className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>
        {files.name}
      </h2>
      <br />
      {isExpanded && files.items.map((item) => <Directory files={item} />)}
    </div>
  );
};

export default Directory;
