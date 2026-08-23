import React from "react";
import DemoFrame from "./DemoFrame";
import ProjectEmbed from "./ProjectEmbed";
import { getProject } from "../data/projects";

// The inventory UI, full width, with the things worth trying spelled out. The
// same app is embedded on the project's detail page; this is the room to use it
// in.
function InventoryDemo() {
  const project = getProject("inventory-management");

  return (
    <DemoFrame
      wide
      title="Inventory"
      requires={
        "Nothing. This runs entirely in your browser: the .NET API it was written against is not " +
        "hosted, so the demo stands in for it with a copy of the same rules. Changes last until " +
        "you reload."
      }
    >
      <p>
        The point of this one is not the forms, it is what the forms refuse to do. Stock on hand is
        never stored — it is summed from an append-only movement log, so the number and its history
        cannot disagree. Worth trying:
      </p>

      <ul>
        <li>
          Select <strong>Cordless drill 18V</strong>. It reads 21, and says it was summed from two
          movements: a <code>+25</code> opening and a <code>-4</code> sale.
        </li>
        <li>
          Record an <strong>Out of 9999</strong>. It is refused, the message names the balance, and
          the stock does not move. It is never clamped to zero.
        </li>
        <li>
          Try to <strong>delete a product that has movements</strong>, or a category that still has
          products. Both are refused, and the category says how many are in the way.
        </li>
        <li>
          Clear the <strong>API key</strong> at the top right, then try to write anything. That is
          the same 401 the real middleware returns.
        </li>
      </ul>

      <ProjectEmbed
        url={project.embedUrl}
        title={project.title}
        caption="Running in your browser; nothing is sent anywhere."
        height={900}
      />
    </DemoFrame>
  );
}

export default InventoryDemo;
