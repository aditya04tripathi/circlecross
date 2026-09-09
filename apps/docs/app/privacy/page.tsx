import Link from "next/link";
export const metadata = { title: "Website privacy — CircleCross" };
export default function Privacy() {
	return (
		<main className="privacy-page">
			<Link href="/" className="text-link">
				← Back to CircleCross
			</Link>
			<p className="eyebrow">Website privacy</p>
			<h1>
				Your visit.
				<br />
				Your choice.
			</h1>
			<p>
				This marketing website lets you explore CircleCross without creating an account.
			</p>
			<h2>Information on this website</h2>
			<p>
				We do not ask for your email address or precise location. If you choose a
				CircleCross world, your preference is stored only in your browser’s local storage.
				You can remove it by clearing this site’s browser data.
			</p>
			<h2>Website delivery</h2>
			<p>
				Your browser requests pages, fonts and photographs from the website host. Hosting
				infrastructure may process technical information such as IP addresses and request
				logs to deliver and secure the site. This page does not describe the data
				practices of future CircleCross products.
			</p>
			<h2>Product privacy</h2>
			<p>
				CircleCross Go, Uni and Pro are being introduced here as upcoming experiences.
				Product-specific privacy information and consent controls will need to be
				available before account registration opens.
			</p>
		</main>
	);
}
