'use client';

import React from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

// 👉 TEMP DATA – rename / edit these later
const projects: Project[] = [
  { id: 1, title: 'Project 1', description: 'Short description of project 1.', tags: ['Tag A', 'Tag B'] },
  { id: 2, title: 'Project 2', description: 'Short description of project 2.', tags: ['Tag A', 'Tag B'] },
  { id: 3, title: 'Project 3', description: 'Short description of project 3.', tags: ['Tag A', 'Tag B'] },
  { id: 4, title: 'Project 4', description: 'Short description of project 4.', tags: ['Tag A', 'Tag B'] },
  { id: 5, title: 'Project 5', description: 'Short description of project 5.', tags: ['Tag A', 'Tag B'] },
  { id: 6, title: 'Project 6', description: 'Short description of project 6.', tags: ['Tag A', 'Tag B'] },
  { id: 7, title: 'Project 7', description: 'Short description of project 7.', tags: ['Tag A', 'Tag B'] },
  { id: 8, title: 'Project 8', description: 'Short description of project 8.', tags: ['Tag A', 'Tag B'] },
  { id: 9, title: 'Project 9', description: 'Short description of project 9.', tags: ['Tag A', 'Tag B'] },
  { id: 10, title: 'Project 10', description: 'Short description of project 10.', tags: ['Tag A', 'Tag B'] },
  { id: 11, title: 'Project 11', description: 'Short description of project 11.', tags: ['Tag A', 'Tag B'] },
  { id: 12, title: 'Project 12', description: 'Short description of project 12.', tags: ['Tag A', 'Tag B'] },
  { id: 13, title: 'Project 13', description: 'Short description of project 13.', tags: ['Tag A', 'Tag B'] },
  { id: 14, title: 'Project 14', description: 'Short description of project 14.', tags: ['Tag A', 'Tag B'] },
  { id: 15, title: 'Project 15', description: 'Short description of project 15.', tags: ['Tag A', 'Tag B'] },
  { id: 16, title: 'Project 16', description: 'Short description of project 16.', tags: ['Tag A', 'Tag B'] },
  { id: 17, title: 'Project 17', description: 'Short description of project 17.', tags: ['Tag A', 'Tag B'] },
  { id: 18, title: 'Project 18', description: 'Short description of project 18.', tags: ['Tag A', 'Tag B'] },
];

// how many cards you want in each row (desktop layout)
const rowConfigs = [4, 4, 3, 4, 2, 1];

function gridClassFor(size: number) {
  switch (size) {
    case 4:
      return 'grid-cols-4';
    case 3:
      return 'grid-cols-3';
    case 2:
      return 'grid-cols-2';
    default:
      return 'grid-cols-1';
  }
}

// simple card UI – matches your “box” look
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col h-full rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-lg">
      {/* image placeholder – swap with real <Image /> later */}
      <div className="h-40 w-full bg-zinc-800" />

      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-600/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition">
            Demo
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition">
            Repo
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProjectsPreview() {
  // slice projects into rows that follow [4,4,3,4,2,1]
  const rows: Project[][] = [];
  let start = 0;

  for (const size of rowConfigs) {
    const slice = projects.slice(start, start + size);
    if (slice.length === 0) break; // no more projects
    rows.push(slice);
    start += size;
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <header>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">
            A selection of work, arranged in a custom grid layout.
          </p>
        </header>

        <div className="space-y-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-6 ${gridClassFor(
                row.length,
              )} max-md:grid-cols-1`}
            >
              {row.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
