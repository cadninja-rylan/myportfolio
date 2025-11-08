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
						<h1 className="text-4xl font-bold">Why Choose Engineering?</h1>
						<p className="text-lg text-muted-foreground">
							I chose engineering because I've always been curious about how things work and how they can be improved. 
							Growing up, I spent hours playing Minecraft, designing buildings, experimenting with redstone, and ultimately solving problems to make things better. 
							I've always been creative and curious in my thinking, and this mindset has carried over into real life. 
							I became interested in how machines and systems are actually built. Engineering felt like the perfect path for me to turn 
							my mindset into something real, meaningful, and something I could be proud of.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Throughout my academic journey, I’ve completed various projects and tasks that have strengthened 
								my technical and software skills and theoretical understanding. I am confident that with the work I have done,
								I will be able to apply and demonstrate my skills further in real-world situations. I see this foundation as just my beginning, 
								and I’m eager to continue learning and developing.
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
									I enjoy staying active and discovering new things. 
									I swam competitively for several years and work out regularly. 
									I've been learning how to rock climb and so far its been very challenging...
									I also spend time improving my CAD design skills by experimenting and creating small parts and projects. 
									In my free time, I’ve also rediscovered my love for playing games on my 3DS, I recently modded my own and its been a fun experience.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">About This Site</h3>
								<p className="text-muted-foreground">
									Ive always wanted to journal and track my growth, personally and professionally. 
									I want to use this site as a way to reflect on the progress I've made, doccumenting the skills I've learned and challenges I've overcome. 
									I want this site to serve as a place for me to find the motivation to keep pushing forward, set new goals, and reach hights I never thought possible.
									By looking back on what I've done, I can understand where I've come from and where I want to go.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
