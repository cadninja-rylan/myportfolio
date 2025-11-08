'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">Why Engineering?</h1>
						<p className="text-lg text-muted-foreground">
							Growing up, I spent hours building in Minecraft, experimenting with redstone, and finding creative ways to solve problems. 
							That same curiosity for machines and systems is what drew me to engineering. 
							Engineering enables me to turn my imagination into something real, useful, and meaningful.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Through my studies, I’ve worked on projects that strengthened my technical and software skills. 
								This foundation is just the start and ’m excited to keep learning and applying what I know in real world settings. 
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download>
								Download Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Currently in my 3rd Year pursuing a Bachelor's degree in Mechanical Engineering at the University of Western Ontario.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Interests and Hobbies</h3>
								<p className="text-muted-foreground">
									I used to swim competitively and still work out regularly. Lately, I’ve been getting into rock climbing (it’s tough). 
									I also like experimenting with CAD designs and creating small projects. In my downtime, im relaxing with my modded 3ds.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">About This Site</h3>
								<p className="text-muted-foreground">
									I created this site to track my growth and reflect on what I’ve learned. 
									It’s a space for me to document progress, stay motivated, and set new goals. 
									By reflecting on this site, I can better understand where I’ve been and where I want to go.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
