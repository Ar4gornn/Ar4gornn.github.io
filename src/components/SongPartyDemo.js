import React from "react";
import DemoFrame from "./DemoFrame";
import ProjectEmbed from "./ProjectEmbed";
import { getProject } from "../data/projects";

// SongParty, full width, with the things worth trying spelled out. The same app
// is embedded on the project's detail page; this is the room to use it in.
function SongPartyDemo() {
  const project = getProject("songparty");

  return (
    <DemoFrame
      wide
      title="SongParty"
      requires={
        "Nothing. The Django backend is not hosted anywhere, so this reimplements its API in your " +
        "browser — same routes, same status codes, same rules. The queue and the votes are the " +
        "demo's own and are labelled as such: the Django project stores rooms and two settings and " +
        "nothing else. Changes last until you reload."
      }
    >
      <p>
        The point of this one is that <strong>host</strong> and <strong>guest</strong> are not roles
        you log in as. The app's only notion of identity is the Django session key, so the server
        works out who you are by comparing your key against the room's host. That is impossible to
        show on one screen, so the page runs up to four of them side by side, each with its own key,
        against one shared server. Worth trying:
      </p>

      <ul>
        <li>
          Create a room, add a pane, and <strong>join with the code</strong>. Mistype it: the API
          answers <code>400</code>, not <code>404</code> — the real view's behaviour, kept rather
          than tidied up.
        </li>
        <li>
          As the guest, press <strong>Try to change it anyway</strong>. The settings form is not
          hidden, because a disabled button proves nothing. The server returns <code>403</code> and
          the room does not move.
        </li>
        <li>
          Set <strong>votes to skip</strong> to 2 and have two guests vote. The first vote is
          counted, the second crosses the threshold and the track changes everywhere. Vote twice
          from one pane — it still counts once.
        </li>
        <li>
          With <strong>guests may pause</strong> off, press Pause as a guest: <code>403</code>. Turn
          it on in the host's pane and press it again. Nothing about the guest changed except what
          the server allows.
        </li>
        <li>
          Have the <strong>host leave</strong>. The room is deleted outright and the guest's next
          poll finds a <code>404</code> — a guest can be standing in a room that has stopped
          existing.
        </li>
        <li>
          Open the <strong>request log</strong> at the bottom. Every button goes through it, polls
          included, and anything the Django project does not have is tagged{" "}
          <code>demo-only</code>.
        </li>
      </ul>

      <ProjectEmbed
        url={project.embedUrl}
        title={project.title}
        caption="Running in your browser; nothing is sent anywhere, and the music is generated in the page."
        height={980}
      />
    </DemoFrame>
  );
}

export default SongPartyDemo;
