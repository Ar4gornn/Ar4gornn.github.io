import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import projects from "./data/projects";

function renderAt(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

test("home lists every shipped project", () => {
  renderAt(<Home />);
  const shipped = projects.filter((p) => p.status === "shipped");
  shipped.forEach((p) => {
    expect(screen.getByRole("link", { name: p.title })).toBeInTheDocument();
  });
});

test("projects page renders one card per registry entry", () => {
  renderAt(<Projects />);
  projects.forEach((p) => {
    expect(screen.getByRole("link", { name: p.title })).toBeInTheDocument();
  });
});

test("every registry entry has the fields the pages render", () => {
  projects.forEach((p) => {
    expect(typeof p.slug).toBe("string");
    expect(typeof p.title).toBe("string");
    expect(typeof p.tagline).toBe("string");
    expect(Array.isArray(p.stack)).toBe(true);
    expect(Array.isArray(p.highlights)).toBe(true);
    expect(["shipped", "in-progress", "archived"]).toContain(p.status);
  });
});

test("slugs are unique", () => {
  const slugs = projects.map((p) => p.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});

test("an unknown slug renders the not-found branch, not a crash", () => {
  render(
    <MemoryRouter initialEntries={["/projects/does-not-exist"]}>
      <ProjectDetail />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /no such project/i })).toBeInTheDocument();
});
