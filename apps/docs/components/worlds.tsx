"use client";
import { useState } from "react";
import Image from "next/image";
import { Arrow } from "./ui";
export const worlds = [
	{
		id: "go",
		name: "Go",
		theme: "go",
		headline: "Follow your curiosity.",
		description:
			"New places. New interests. People who just get you. Make the first move towards a world that feels a little more yours.",
		tags: "Explore · Find your people · Try something new",
		image: "/images/together.jpg",
		alt: "A group of friends sharing a relaxed moment in the park",
	},
	{
		id: "uni",
		name: "Uni",
		theme: "uni",
		headline: "Find your kind of campus.",
		description:
			"From the first lecture to the last night of term. Find friends, study partners, clubs and collaborators who make university your own.",
		tags: "Campus life · Clubs & events · Shared ambitions",
		image: "/images/uni.jpg",
		alt: "University students studying together in a library",
	},
	{
		id: "pro",
		name: "Pro",
		theme: "pro",
		headline: "Good work starts with people.",
		description:
			"Go beyond the introduction. Meet thoughtful people, exchange ideas and build professional relationships with room to grow.",
		tags: "Workplaces · Collaboration · New opportunities",
		image: "/images/pro.jpg",
		alt: "Creative professionals collaborating around a table",
	},
] as const;
export function Worlds() {
	const [active, setActive] = useState("go");
	return (
		<section className="worlds section-space" id="worlds">
			<div className="worlds-heading">
				<p className="eyebrow">One life. Many circles.</p>
				<h2>
					A world for
					<br />
					<em>every version of you.</em>
				</h2>
				<p>
					You change. Your world opens up.
					<br />
					Your connections come with you.
				</p>
			</div>
			<div className="world-chapters">
				{worlds.map((world, i) => (
					<article
						key={world.id}
						className={`world-chapter ${world.theme} ${active === world.id ? "expanded" : ""}`}
						id={world.id}
					>
						<button
							className="world-heading"
							onClick={() => setActive(world.id)}
							aria-expanded={active === world.id}
							aria-controls={`world-${world.id}`}
						>
							<span className="chapter-brand">
								CircleCross <strong>{world.name}</strong>
							</span>
							<span className="chapter-hint">
								{i === 0
									? "A little more adventure."
									: i === 1
										? "A place to belong."
										: "A new kind of network."}
							</span>
							<span className="chapter-toggle">
								<Arrow diagonal />
							</span>
						</button>
						<div
							className="world-content"
							id={`world-${world.id}`}
							hidden={active !== world.id}
						>
							<div className="world-copy">
								<h3>{world.headline}</h3>
								<p>{world.description}</p>
								<p className="world-tags">{world.tags}</p>
								<a
									className="text-link"
									href={`#start`}
									onClick={() =>
										window.dispatchEvent(
											new CustomEvent("circlecross:choose", { detail: world.name }),
										)
									}
								>
									Explore CircleCross {world.name}
									<Arrow diagonal />
								</a>
							</div>
							<div className="photo-shell">
								<div className="world-photo">
									<Image
										src={world.image}
										alt={world.alt}
										width={1000}
										height={700}
										sizes="(max-width: 767px) 90vw, 48vw"
									/>
									<span className="photo-caption">Life, with your people.</span>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
