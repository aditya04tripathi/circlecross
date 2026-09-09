"use client";
import { useState } from "react";
import { Arrow } from "./ui";
const encounters = [
	{
		name: "The same curiosity.",
		place: "At a weekend photo walk",
		people: ["You", "A fellow wanderer", "The local creative"],
		detail:
			"A shared interest gets you talking. A mutual invitation keeps the conversation going.",
	},
	{
		name: "The same campus.",
		place: "After the afternoon lecture",
		people: ["You", "Your next study partner", "A future collaborator"],
		detail:
			"Turn a familiar face into a study group, a new club, or a friendship beyond the lecture hall.",
	},
	{
		name: "The next possibility.",
		place: "Between sessions at an event",
		people: ["You", "A thoughtful mentor", "Your next collaborator"],
		detail:
			"Find the people behind the job titles. Build relationships around ideas you both care about.",
	},
];
export function Encounter() {
	const [selected, setSelected] = useState(0);
	const item = encounters[selected]!;
	return (
		<section className="encounter section-space" id="connections">
			<div className="encounter-copy">
				<p className="eyebrow">A moment. A possibility.</p>
				<h2>
					You already
					<br />
					have something
					<br />
					<em>in common.</em>
				</h2>
				<p>
					Same place. Shared interest. A familiar face.
					<br />
					Sometimes, that’s all a connection needs.
				</p>
				<div className="encounter-controls" aria-label="Explore encounter scenarios">
					{["Out in the world", "On campus", "At work"].map((label, i) => (
						<button
							key={label}
							aria-pressed={selected === i}
							onClick={() => setSelected(i)}
						>
							{label}
						</button>
					))}
				</div>
			</div>
			<div className="encounter-visual">
				<div className={`relationship-map map-${selected}`} aria-hidden="true">
					<svg viewBox="0 0 600 500">
						<circle cx="220" cy="240" r="160" />
						<circle cx="380" cy="240" r="160" />
						<circle cx="300" cy="310" r="130" />
						<path d="M220 240 380 240 300 360Z" />
						<circle className="map-point" cx="220" cy="240" r="7" />
						<circle className="map-point" cx="380" cy="240" r="7" />
						<circle className="map-point" cx="300" cy="360" r="7" />
					</svg>
					{item.people.map((person, i) => (
						<span key={person} className={`person person-${i}`}>
							{person}
						</span>
					))}
					<span className="map-caption">An encounter, illustrated</span>
				</div>
				<div className="encounter-detail" aria-live="polite">
					<span className="small-arrow">
						<Arrow diagonal />
					</span>
					<div>
						<h3>{item.name}</h3>
						<p className="encounter-place">{item.place}</p>
						<p>{item.detail}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
