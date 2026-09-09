import { footerBrand, footerColumns } from "../content/footer";
import { Logo } from "./logo";
import { SiteButton } from "./site-button";
import { pageInset } from "./styles";
import { Arrow } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${pageInset} pt-16 pb-[25px] max-md:pt-12`}>
      <div className="mb-14 grid grid-cols-[1.2fr_repeat(3,1fr)] gap-10 border-b border-line pb-12 max-[1100px]:grid-cols-2 max-md:mb-10 max-md:grid-cols-1 max-md:gap-8 max-md:pb-8">
        <div>
          <SiteButton
            variant="secondary"
            href="/"
            className="mb-4 flex items-center text-2xl font-[580] tracking-[-1.2px] [&_svg]:h-[30px] [&_svg]:w-auto"
            aria-label="CircleCross home"
          >
            <Logo type="logo" />
          </SiteButton>
          <p className="max-w-[240px] text-sm leading-[1.6] text-soft max-md:text-[11px]">
            {footerBrand.tagline}
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-4 text-[10px] font-[550] tracking-[0.12em] text-soft uppercase">
              {column.title}
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <SiteButton
                    variant="link"
                    href={link.href}
                    className="border-0 py-0 text-[13px] after:absolute after:right-0 after:bottom-[-5px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[450ms] after:ease-editorial hover:after:scale-x-100"
                  >
                    {link.label}
                  </SiteButton>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-5 text-[10px] text-soft max-md:flex-wrap max-md:text-[9px]">
        <span>© {year} CircleCross</span>
        <SiteButton variant="link" href="/#hero" className="border-0 py-0">
          Back to the beginning <Arrow diagonal />
        </SiteButton>
        <span>Made for life, outside the screen.</span>
      </div>
    </footer>
  );
}
