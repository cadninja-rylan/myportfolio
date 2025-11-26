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
				{/* --- TOP SECTION --- */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">Why Engineering?</h1>
						<p className="text-lg text-muted-foreground">
							Growing up, I spent hours building in Minecraft, experimenting with redstone, and finding
							creative ways to solve problems. That same curiosity for machines and systems is what drew
							me to engineering. Engineering enables me to turn my imagination into something real,
							useful, and meaningful.
						</p>

						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Through my studies, I’ve worked on projects that strengthened my technical and software
								skills. This foundation is just the start and I’m excited to keep learning and applying
								what I know in real-world settings.
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
							src="/MC.png"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				{/* --- 3 CARDS SECTION --- */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{/* ------------------ EDUCATION ------------------ */}
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									University of Western Ontario <br />
									B.E.Sc Mechanical Engineering <br />
									3rd Year
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* ------------------ INTERESTS (IMAGE FIRST) ------------------ */}
					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6 space-y-4">
								{/* IMAGE ABOVE TEXT */}
								<div className="relative w-full h-48 rounded-md overflow-hidden">
									<Image
										src="/MC.png"
										alt="Interest image"
										fill
										className="object-cover"
									/>
								</div>

								<h3 className="text-xl font-semibold">Interests and Hobbies</h3>
								<p className="text-muted-foreground">
									I used to swim competitively and still work out regularly. Recently I’ve been
									getting into rock climbing and experimenting with CAD designs. In my downtime,
									I’m relaxing with my modded 3DS.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* ------------------ ABOUT THE SITE ------------------ */}
					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">About This Site</h3>
								<p className="text-muted-foreground">
									I created this site to track my growth and reflect on my accomplishments. It’s a
									space to document progress, stay motivated, and set new goals. By documenting, I
									can understand where I’ve been and where I want to go next.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
