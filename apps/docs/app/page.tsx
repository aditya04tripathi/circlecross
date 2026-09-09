import Image from "next/image";
import { Encounter } from "../components/encounter";
import { StoryMotion } from "../components/motion/story-motion";
import { Navigation } from "../components/navigation";
import { OrbitWorld } from "../components/scene/orbit-world";
import { Start } from "../components/start";
import { Arrow, LinkButton, Mark } from "../components/ui";
import { Worlds } from "../components/worlds";

const manifesto =
  "The best things in life aren&apos;t things. They&apos;re the people we find along the way.";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero" id="hero">
          <div className="hero-topline">
            <span>A little closer to your people.</span>
            <span>Connection, in real life.</span>
          </div>
          <OrbitWorld />
          <h1 className="hero-title">
            <span>Life happens</span>
            <span>
              where <em>circles cross.</em>
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>
                Your world is full of people
                <br />
                you haven&apos;t met. <span>Not yet.</span>
              </p>
              <LinkButton href="#worlds">Discover your world</LinkButton>
            </div>
            <a className="hero-photo" href="#idea">
              <Image
                src="/images/together.jpg"
                alt="Friends enjoying time together outside"
                width={320}
                height={220}
                priority
                sizes="220px"
              />
              <span>
                Less scrolling.
                <br />
                More living. <Arrow diagonal />
              </span>
            </a>
            <a className="scroll-cue" href="#idea">
              <span>Scroll to cross paths</span>
              <span className="scroll-line" />
            </a>
          </div>
          <span className="hero-orbit-caption" aria-hidden="true">
            Different paths. Shared possibilities.
          </span>
        </section>
        <section className="idea section-space" id="idea">
          <p className="eyebrow" data-reveal>
            Built around life. Not a feed.
          </p>
          <div className="manifesto">
            <h2 aria-label={manifesto}>
              {manifesto.split(" ").map((word, i) => (
                <span className="manifesto-word" key={i}>
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
          <div className="idea-bottom" data-reveal>
            <span className="inline-photo">
              <Image
                src="/images/uni.jpg"
                alt="Friends connecting on campus"
                width={180}
                height={90}
              />
            </span>
            <p>
              CircleCross brings the people, places and communities around you a little closer. So a
              chance encounter can become something that matters.
            </p>
            <a className="text-link" href="#connections">
              See how paths cross <Arrow diagonal />
            </a>
          </div>
        </section>
        <Encounter />
        <section className="interlude" aria-label="Our philosophy">
          <p>Less collecting contacts.</p>
          <p>
            More <em>finding your people.</em>
          </p>
          <div className="interlude-line" aria-hidden="true">
            <span />
            <span />
          </div>
        </section>
        <Worlds />
        <section className="identity section-space">
          <div className="identity-orbits" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="identity-copy" data-reveal>
            <p className="eyebrow">Always you. Still becoming.</p>
            <h2>
              New chapters.
              <br />
              <em>Same constellation.</em>
            </h2>
            <p>
              From your first adventure to your next big idea.
              <br />
              One CircleCross identity, with relationships
              <br />
              that grow as you do.
            </p>
          </div>
          <div className="identity-track" aria-label="Your journey: Go to Uni to Pro">
            <span>Go</span>
            <i />
            <span>Uni</span>
            <i />
            <span>Pro</span>
            <Arrow />
          </div>
        </section>
        <section className="trust section-space" id="trust">
          <div data-reveal>
            <p className="eyebrow">Connection should feel comfortable.</p>
            <h2>
              Open to the world.
              <br />
              <em>On your terms.</em>
            </h2>
            <p className="trust-intro">
              Meaningful connection starts with feeling safe.
              <br />
              These principles guide the CircleCross we&apos;re building.
            </p>
          </div>
          <div className="trust-principles">
            {[
              {
                title: "An invitation. Never an obligation.",
                copy: "A crossed path is a possibility, not permission. You decide when to reach out and who to let in.",
                icon: "mutual",
              },
              {
                title: "Your presence. Your choice.",
                copy: "You should be in control of what you share, how you appear and when you want to be discovered.",
                icon: "control",
              },
              {
                title: "People first. By design.",
                copy: "Tools should help you step into real life. We&apos;re building for meaningful relationships, not endless attention.",
                icon: "people",
              },
            ].map((item) => (
              <article key={item.title} data-reveal>
                <span className={`principle-icon ${item.icon}`} aria-hidden="true">
                  <i />
                  <i />
                </span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <Start />
      </main>
      <footer>
        <div className="footer-top">
          <a href="#" className="wordmark">
            <Mark />
            CircleCross
          </a>
          <p>
            Good things happen
            <br />
            when we cross paths.
          </p>
          <a href="#hero" className="back-top">
            Back to the beginning <Arrow diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CircleCross</span>
          <nav aria-label="Footer">
            <a href="#worlds">Our worlds</a>
            <a href="#trust">Our principles</a>
            <a href="/privacy">Privacy</a>
          </nav>
          <span>Made for life, outside the screen.</span>
        </div>
      </footer>
      <StoryMotion />
    </>
  );
}
