import { useEffect } from "react";

const BASE = "Alex Ghanem";

// Keeps the document title in step with the route, so a shared link and a
// browser tab both say something specific instead of "React App".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : BASE;
  }, [title]);
}
