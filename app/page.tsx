import Image from "next/image";
import CopyPhone from "./components/CopyPhone";
import {
  ArrowIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MicIcon,
  PinIcon,
  Stars,
  WhatsAppIcon,
} from "./components/Icons";
import s from "./page.module.css";

import ricePlate from "../public/images/ofada-rice-plate.jpg";
import milkshake from "../public/images/oreo-milkshake.jpg";
import platter from "../public/images/ofada-platter.jpg";
import sauce from "../public/images/ofada-sauce.jpg";
import sauceCloseup from "../public/images/ofada-sauce-closeup.jpg";
import barNeon from "../public/images/bar-neon.jpg";
import diningRoom from "../public/images/dining-room.jpg";
import storefront from "../public/images/storefront-24hrs.jpg";

const BIZ = {
  phoneDisplay: "0803 629 5626",
  phoneTel: "+2348036295626",
  whatsapp: "https://wa.me/2348036295626",
  whatsappOrder:
    "https://wa.me/2348036295626?text=" +
    encodeURIComponent("Hi Ofada Heaven! I'd like to place an order."),
  whatsappKaraoke:
    "https://wa.me/2348036295626?text=" +
    encodeURIComponent("Hi Ofada Heaven! When is the next karaoke night?"),
  instagram: "https://www.instagram.com/ofadaheaven/",
  facebook: "https://www.facebook.com/ofadaheaven/",
  maps: "https://www.google.com/maps/search/?api=1&query=Ofada+Heaven+62+Adeniran+Ogunsanya+St+Surulere+Lagos",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Ofada+Heaven+62+Adeniran+Ogunsanya+St+Surulere+Lagos",
  sankofa: "https://www.google.com/maps/search/?api=1&query=Sankofa+Lounge+and+Bar+62+Adeniran+Ogunsanya+St+Surulere+Lagos",
};

const TICKER = [
  "Open 24 hours",
  "Ofada rice & sauce",
  "Karaoke nights",
  "Chicken and chips",
  "Oreo milkshake",
  "Fisherman soup",
  "Seafood okra",
  "Surulere, Lagos",
];

function Ticker({ tone }: { tone: "night" | "sauce" }) {
  const items = [...TICKER, ...TICKER];
  return (
    <div className={`${s.ticker} ${tone === "sauce" ? s.tickerSauce : ""}`} aria-hidden="true">
      <div className={s.tickerTrack}>
        {items.map((t, i) => (
          <span key={i} className={s.tickerItem}>
            {t}
            <svg className={s.tickerStar} viewBox="0 0 24 24" width="14" height="14">
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

function SpinBadge() {
  return (
    <div className={s.spin} aria-hidden="true">
      <svg viewBox="0 0 200 200" className={s.spinText}>
        <defs>
          <path id="spin-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href="#spin-circle">OPEN ALL NIGHT • COME AS YOU ARE • </textPath>
        </text>
      </svg>
      <span className={s.spinCore}>24/7</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className={s.skip}>
        Skip to content
      </a>

      <Ticker tone="night" />

      <header className={s.nav}>
        <a href="#top" className={s.logo} aria-label="Ofada Heaven home">
          <span className={s.logoMark}>Ofada</span>
          <span className={s.logoWord}>Heaven</span>
        </a>
        <nav aria-label="Main" className={s.navLinks}>
          <a href="#menu">Menu</a>
          <a href="#karaoke">Karaoke</a>
          <a href="#visit">Visit</a>
        </nav>
        <a href={BIZ.whatsappOrder} className={s.navCta} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={18} />
          <span>Order</span>
        </a>
      </header>

      <main id="main">
        {/* ───────────── HERO ───────────── */}
        <section id="top" className={s.hero}>
          <div className={s.heroCopy}>
            <p className={s.openBadge}>
              <span className={s.pulse} aria-hidden="true" />
              Open 24 hours · every single day
            </p>
            <h1 className={s.heroTitle}>
              Ofada at 2am.
              <br />
              <span className={s.heroTitleAccent}>The mic at&nbsp;3.</span>
            </h1>
            <p className={s.heroSub}>
              Surulere&rsquo;s round-the-clock comfort-food spot. Smoky ofada sauce, chicken and chips,
              Oreo milkshakes and karaoke nights. Come as you are, stay as late as you want.
            </p>
            <div className={s.ctaRow}>
              <a href={BIZ.whatsappOrder} className={s.btnPrimary} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
              <a href={BIZ.instagram} className={s.btnGhost} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
                Follow @ofadaheaven
              </a>
            </div>
            <dl className={s.heroStats}>
              <div>
                <dt>Google rating</dt>
                <dd>
                  4.1<span className={s.statStar}>★</span>
                </dd>
              </div>
              <div>
                <dt>Reviews</dt>
                <dd>209</dd>
              </div>
              <div>
                <dt>Kitchen hours</dt>
                <dd>24/7</dd>
              </div>
            </dl>
          </div>

          <div className={s.heroArt}>
            <div className={s.heroMain}>
              <Image
                src={ricePlate}
                alt="Ofada rice with ofada sauce, fried plantain and coleslaw, served on a black plate"
                placeholder="blur"
                preload
                sizes="(max-width: 900px) 80vw, 40vw"
              />
            </div>
            <div className={s.heroSide}>
              <Image
                src={milkshake}
                alt="Oreo milkshake topped with chocolate and cookies"
                placeholder="blur"
                sizes="(max-width: 900px) 40vw, 18vw"
              />
              <span className={s.heroSideTag}>Oreo Milkshake</span>
            </div>
            <SpinBadge />
          </div>
        </section>

        {/* ───────────── MENU ───────────── */}
        <section id="menu" className={s.menu} aria-labelledby="menu-title">
          <div className={s.sectionHead}>
            <p className={s.kicker}>
              <span className={s.kickerNum}>01</span> The comfort menu
            </p>
            <h2 id="menu-title" className={s.h2}>
              Hot pots. <em>Cold shakes.</em> No closing time.
            </h2>
            <p className={s.lede}>
              The dishes regulars come back for, whether it&rsquo;s lunch break or 3am after the last song.
            </p>
          </div>

          <div className={s.bento}>
            <article className={`${s.card} ${s.cardShake}`}>
              <div className={s.cardImg}>
                <Image src={milkshake} alt="Oreo milkshake in a tall glass, topped with chocolate" placeholder="blur" sizes="(max-width: 760px) 100vw, 34vw" />
              </div>
              <div className={s.cardBody}>
                <span className={s.tag}>Fan favourite</span>
                <h3>Oreo Milkshake</h3>
                <p>Thick, cold, cookie-loaded. The sweet full stop to any Ofada Heaven order.</p>
              </div>
            </article>

            <article className={`${s.card} ${s.cardSauce}`}>
              <div className={s.cardImg}>
                <Image src={sauce} alt="A tray of ofada sauce with boiled eggs, kept hot on the counter" placeholder="blur" sizes="(max-width: 760px) 100vw, 44vw" />
              </div>
              <div className={s.cardBody}>
                <span className={s.tag}>House specialty</span>
                <h3>Ofada sauce</h3>
                <p>Deep, peppery and slow-cooked with assorted meat and eggs. Always on the stove, day or night.</p>
              </div>
            </article>

            <article className={`${s.card} ${s.cardChicken}`}>
              <div className={s.chickenType} aria-hidden="true">
                <span>Chicken</span>
                <span className={s.amp}>&amp;</span>
                <span>Chips</span>
              </div>
              <div className={s.cardBody}>
                <span className={s.tag}>Most ordered</span>
                <h3 className={s.srOnly}>Chicken and Chips</h3>
                <p>Crispy chicken, golden chips, any hour you want them. The late-night classic, done properly.</p>
                <a href={BIZ.whatsappOrder} className={s.inlineLink} target="_blank" rel="noopener noreferrer">
                  Order it now <ArrowIcon size={18} />
                </a>
              </div>
            </article>

            <article className={`${s.card} ${s.cardPlatter}`}>
              <div className={s.cardImg}>
                <Image src={platter} alt="A basket platter of ofada rice, ofada sauce, fried yam cubes, spaghetti, boiled eggs and assorted meat" placeholder="blur" sizes="(max-width: 760px) 100vw, 30vw" />
              </div>
              <div className={s.cardBody}>
                <span className={s.tag}>For the group</span>
                <h3>Ofada platters</h3>
                <p>Rice, sauce, meats, eggs and sides, piled high for the whole table to share.</p>
              </div>
            </article>

            <article className={`${s.card} ${s.cardRice}`}>
              <div className={s.cardImg}>
                <Image src={sauceCloseup} alt="Ofada sauce with assorted meat and boiled egg over rice" placeholder="blur" sizes="(max-width: 760px) 100vw, 30vw" />
              </div>
              <div className={s.cardBody}>
                <span className={s.tag}>The namesake</span>
                <h3>Ofada rice</h3>
                <p>Local grains, proper ofada sauce, plantain on the side. The reason for the name.</p>
              </div>
            </article>
          </div>

          <div className={s.alsoStrip}>
            <span className={s.alsoLabel}>Also in the pot</span>
            <ul>
              <li>Fisherman soup</li>
              <li>Seafood okra</li>
              <li>Chicken and chips</li>
              <li>Ofada sauce specials</li>
            </ul>
          </div>
        </section>

        <Ticker tone="sauce" />

        {/* ───────────── KARAOKE ───────────── */}
        <section id="karaoke" className={s.karaoke} aria-labelledby="karaoke-title">
          <div className={s.karaokeInner}>
            <div className={s.karaokeCopy}>
              <p className={`${s.kicker} ${s.kickerNight}`}>
                <span className={s.kickerNum}>02</span> Karaoke nights
              </p>
              <h2 id="karaoke-title" className={s.karaokeTitle}>
                Grab the <span className={s.neon}>mic.</span>
                <br />
                We&rsquo;ll keep the kitchen on.
              </h2>
              <p className={s.karaokeLede}>
                Think you can sing? Great. Think you can&rsquo;t? Even better. Karaoke nights at Ofada Heaven are
                loud, silly and warm: bring the squad, pick your anthem, and refuel on ofada between songs.
                Nobody&rsquo;s judging. Well, maybe a little.
              </p>
              <ul className={s.karaokeList}>
                <li>
                  <MicIcon size={22} />
                  <span>
                    <strong>Open mic, open to all.</strong> Solo, duet or the whole table on backing vocals.
                  </span>
                </li>
                <li>
                  <ClockIcon size={22} />
                  <span>
                    <strong>No last orders.</strong> We&rsquo;re open 24 hours, so the food outlasts the setlist.
                  </span>
                </li>
                <li>
                  <WhatsAppIcon size={22} />
                  <span>
                    <strong>Bringing a crowd?</strong> Message us on WhatsApp for this week&rsquo;s karaoke night.
                  </span>
                </li>
              </ul>
              <div className={s.ctaRow}>
                <a href={BIZ.whatsappKaraoke} className={s.btnGold} target="_blank" rel="noopener noreferrer">
                  <MicIcon />
                  Ask about karaoke night
                </a>
                <a href={BIZ.instagram} className={s.btnGhostNight} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                  See the nights on Instagram
                </a>
              </div>
            </div>

            <div className={s.karaokeArt}>
              <figure className={s.kPhotoTall}>
                <Image src={barNeon} alt="The Ofada Heaven bar under blue neon light, with a frozen strawberry drink" placeholder="blur" sizes="(max-width: 900px) 60vw, 28vw" />
              </figure>
              <figure className={s.kPhotoWide}>
                <Image src={diningRoom} alt="Inside Ofada Heaven: wooden tables, a stone feature wall and hanging plants" placeholder="blur" sizes="(max-width: 900px) 70vw, 26vw" />
              </figure>
              <figure className={s.kPhotoSmall}>
                <Image src={platter} alt="An ofada platter to share between songs" placeholder="blur" sizes="(max-width: 900px) 35vw, 14vw" />
              </figure>
              <div className={s.lyric} aria-hidden="true">
                <span>♪</span> Now singing: <strong>you</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── REVIEWS ───────────── */}
        <section className={s.reviews} aria-labelledby="reviews-title">
          <p className={s.kicker}>
            <span className={s.kickerNum}>03</span> What Lagos says
          </p>
          <div className={s.reviewsGrid}>
            <div className={s.bigScore}>
              <span className={s.scoreNum}>4.1</span>
              <div>
                <Stars rating={4.1} size={30} className={s.stars} idPrefix="reviews" />
                <p className={s.scoreMeta}>
                  from <strong>209 reviews</strong> on Google
                </p>
              </div>
            </div>
            <div className={s.reviewLine}>
              <h2 id="reviews-title" className={s.reviewQuote}>
                209 people have had their say. The short version: come hungry, stay late.
              </h2>
              <a href={BIZ.maps} className={s.inlineLink} target="_blank" rel="noopener noreferrer">
                Read the reviews on Google Maps <ArrowIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ───────────── VISIT ───────────── */}
        <section id="visit" className={s.visit} aria-labelledby="visit-title">
          <div className={s.visitPhoto}>
            <Image src={storefront} alt="The Ofada Heaven storefront on Adeniran Ogunsanya Street with its red and green 24 HRS sign" placeholder="blur" sizes="(max-width: 900px) 100vw, 50vw" />
            <span className={s.visitStamp}>
              Doors
              <br />
              never
              <br />
              close
            </span>
          </div>

          <div className={s.visitInfo}>
            <p className={s.kicker}>
              <span className={s.kickerNum}>04</span> Visit or order
            </p>
            <h2 id="visit-title" className={s.h2}>
              Pull up any time. <em>We mean any time.</em>
            </h2>

            <dl className={s.infoList}>
              <div className={s.infoRow}>
                <dt>
                  <PinIcon /> Address
                </dt>
                <dd>
                  62 Adeniran Ogunsanya Street,
                  <br />
                  opposite Glo Office, beside Lotus Bank,
                  <br />
                  Surulere, Lagos
                </dd>
              </div>
              <div className={s.infoRow}>
                <dt>
                  <ClockIcon /> Hours
                </dt>
                <dd>
                  <strong className={s.hoursBig}>Open 24 hours</strong>
                  <br />
                  Every day of the week, morning, noon and 3am
                </dd>
              </div>
              <div className={s.infoRow}>
                <dt>
                  <WhatsAppIcon /> Phone &amp; WhatsApp
                </dt>
                <dd className={s.phoneRow}>
                  <a href={`tel:${BIZ.phoneTel}`} className={s.phoneBig}>
                    {BIZ.phoneDisplay}
                  </a>
                  <CopyPhone display={BIZ.phoneDisplay} value={BIZ.phoneDisplay} className={s.copyBtn} />
                </dd>
              </div>
            </dl>

            <div className={s.visitActions}>
              <a href={BIZ.whatsappOrder} className={s.btnPrimary} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
              <a href={BIZ.directions} className={s.btnGhost} target="_blank" rel="noopener noreferrer">
                <PinIcon />
                Get directions
              </a>
            </div>

            <div className={s.socials}>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> @ofadaheaven
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer">
                <FacebookIcon /> facebook.com/ofadaheaven
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <p className={s.footerWord} aria-hidden="true">
            Ofada <span>Heaven</span>
          </p>
          <p className={s.footerTag}>Open all night. Come as you are.</p>
        </div>
        <div className={s.footerGrid}>
          <div>
            <h3>Find us</h3>
            <p>
              62 Adeniran Ogunsanya Street,
              <br />
              opposite Glo Office, beside Lotus Bank,
              <br />
              Surulere, Lagos
            </p>
          </div>
          <div>
            <h3>Talk to us</h3>
            <p>
              <a href={`tel:${BIZ.phoneTel}`}>{BIZ.phoneDisplay}</a>
              <br />
              <a href={BIZ.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>{" "}
              ·{" "}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{" "}
              ·{" "}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
          </div>
          <div className={s.sankofa}>
            <h3>Same address, after dark</h3>
            <p>
              Our sister spot{" "}
              <a href={BIZ.sankofa} target="_blank" rel="noopener noreferrer">
                Sankofa Lounge and Bar
              </a>{" "}
              pours the evening drinks at 62 Adeniran Ogunsanya St.
            </p>
          </div>
        </div>
        <p className={s.copyright}>© {new Date().getFullYear()} Ofada Heaven · Surulere, Lagos · Open 24 hours</p>
      </footer>
    </>
  );
}
