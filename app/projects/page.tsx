'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

// desktop row layout: 4, 4, 3, 4, 2, 1, 1, 1
const rowConfigs = [4, 4, 3, 4, 2, 1, 1, 1];

type Project = (typeof projects)[number];

function gridClassFor(size: number) {
  switch (size) {
    case 4:
      return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4';
    case 3:
      return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3';
    case 2:
      return 'grid-cols-1 md:grid-cols-2';
    default:
      return 'grid-cols-1';
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={fadeInScale(index * 0.05)} className="flex">
      <Card className="flex flex-col h-full card-gradient">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <CardContent className="flex-grow p-6">
          <h3 className="font-bold text-xl mb-2">{project.title}</h3>
          {project.description && (
            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 gap-2">
          {project.link && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
          {project.repo && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.repo} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Repo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const rows: Project[][] = [];
  let start = 0;

  // first use the explicit row config: 4,4,3,4,2,1,1
  for (const size of rowConfigs) {
    if (start >= projects.length) break;
    const slice = projects.slice(start, start + size);
    rows.push(slice);
    start += slice.length;
  }

  // if you have more than 19–20 projects later, put the rest in extra rows of up to 4
  while (start < projects.length) {
    const remaining = projects.length - start;
    const size = Math.min(4, remaining);
    rows.push(projects.slice(start, start + size));
    start += size;
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* HEADER */}
          <motion.div variants={fadeInScale(0.2)} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects / Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my engineering and CAD projects, demonstrating design,
              analysis, and creative problem-solving.
            </p>
          </motion.div>

          {/* ROWS */}
          <div className="space-y-12">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-8 ${gridClassFor(row.length)}`}
              >
                {row.map((project, idx) => (
                  <ProjectCard
                    key={`${project.title}-${rowIndex}-${idx}`}
                    project={project}
                    index={rowIndex * 10 + idx}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
