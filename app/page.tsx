"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...(entry.target.parentElement?.querySelectorAll(
                ".reveal:not(.in)"
              ) || []),
            ];
            const idx = Math.max(0, siblings.indexOf(entry.target));
            setTimeout(() => entry.target.classList.add("in"), idx * 100);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ════ HERO ════ */}
      <header className="hero">
        <svg
          className="hero-botanical"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* LEFT VINE */}
          <g opacity="0.5" fill="none" stroke="#c8892a" strokeWidth="1.2">
            <path d="M 80 800 Q 70 600 90 400 Q 100 250 75 80" strokeWidth="1.8" />
            <path d="M 82 680 Q 140 640 180 610" />
            <path d="M 85 560 Q 30 525 18 490" />
            <path d="M 88 440 Q 158 405 196 378" />
            <path d="M 84 300 Q 28 268 14 238" />
            <path d="M 80 175 Q 148 148 182 122" />
            {/* tendrils */}
            <path d="M 178 610 Q 198 596 213 603 Q 222 609 215 619 Q 205 625 195 618" />
            <path d="M 194 378 Q 213 364 228 371 Q 237 377 230 387 Q 220 393 210 385" />
            <path d="M 180 122 Q 198 109 213 116 Q 221 122 214 131" />
          </g>
          <g opacity="0.48" fill="#c8892a">
            <circle cx="188" cy="618" r="5" /><circle cx="198" cy="626" r="5.5" /><circle cx="181" cy="626" r="5" />
            <circle cx="205" cy="615" r="4.5" /><circle cx="174" cy="614" r="4" />
            <circle cx="194" cy="635" r="5" />
            <circle cx="208" cy="388" r="5" /><circle cx="198" cy="396" r="5.5" /><circle cx="216" cy="396" r="5" />
            <circle cx="204" cy="405" r="5" />
            <circle cx="195" cy="128" r="4.5" /><circle cx="205" cy="135" r="5" /><circle cx="188" cy="135" r="4.5" />
          </g>
          <g opacity="0.38" fill="#4a5c28" stroke="#c8892a" strokeWidth="0.6">
            <ellipse cx="152" cy="604" rx="18" ry="11" transform="rotate(-30 152 604)" />
            <ellipse cx="163" cy="372" rx="17" ry="10" transform="rotate(-22 163 372)" />
            <ellipse cx="147" cy="118" rx="16" ry="9" transform="rotate(-35 147 118)" />
            <ellipse cx="42" cy="496" rx="15" ry="8" transform="rotate(20 42 496)" />
            <ellipse cx="36" cy="244" rx="14" ry="8" transform="rotate(15 36 244)" />
          </g>

          {/* RIGHT VINE */}
          <g opacity="0.5" fill="none" stroke="#c8892a" strokeWidth="1.2">
            <path d="M 1120 800 Q 1130 600 1110 400 Q 1100 250 1125 80" strokeWidth="1.8" />
            <path d="M 1118 680 Q 1060 640 1020 610" />
            <path d="M 1115 560 Q 1170 525 1182 490" />
            <path d="M 1112 440 Q 1042 405 1004 378" />
            <path d="M 1116 300 Q 1172 268 1186 238" />
            <path d="M 1120 175 Q 1052 148 1018 122" />
            <path d="M 1022 610 Q 1002 596 987 603 Q 978 609 985 619 Q 995 625 1005 618" />
            <path d="M 1006 378 Q 987 364 972 371 Q 963 377 970 387 Q 980 393 990 385" />
            <path d="M 1020 122 Q 1002 109 987 116 Q 979 122 986 131" />
          </g>
          <g opacity="0.48" fill="#c8892a">
            <circle cx="1010" cy="618" r="5" /><circle cx="1000" cy="626" r="5.5" /><circle cx="1017" cy="626" r="5" />
            <circle cx="994" cy="615" r="4.5" /><circle cx="1024" cy="614" r="4" />
            <circle cx="1004" cy="635" r="5" />
            <circle cx="990" cy="388" r="5" /><circle cx="1000" cy="396" r="5.5" /><circle cx="982" cy="396" r="5" />
            <circle cx="994" cy="405" r="5" />
            <circle cx="1003" cy="128" r="4.5" /><circle cx="993" cy="135" r="5" /><circle cx="1010" cy="135" r="4.5" />
          </g>
          <g opacity="0.38" fill="#4a5c28" stroke="#c8892a" strokeWidth="0.6">
            <ellipse cx="1048" cy="604" rx="18" ry="11" transform="rotate(30 1048 604)" />
            <ellipse cx="1037" cy="372" rx="17" ry="10" transform="rotate(22 1037 372)" />
            <ellipse cx="1053" cy="118" rx="16" ry="9" transform="rotate(35 1053 118)" />
            <ellipse cx="1158" cy="496" rx="15" ry="8" transform="rotate(-20 1158 496)" />
            <ellipse cx="1164" cy="244" rx="14" ry="8" transform="rotate(-15 1164 244)" />
          </g>

          {/* TOP ARCH */}
          <g opacity="0.38" fill="none" stroke="#c8892a" strokeWidth="1">
            <path d="M 75 80 Q 300 22 600 12 Q 900 22 1125 80" />
            <path d="M 200 34 Q 220 18 248 28" />
            <path d="M 952 34 Q 972 18 1000 28" />
            <path d="M 405 12 Q 424 3 442 10" />
            <path d="M 758 12 Q 778 3 796 10" />
          </g>
          <g opacity="0.38" fill="#c8892a">
            <circle cx="222" cy="30" r="2.5" />
            <circle cx="600" cy="9" r="3" />
            <circle cx="978" cy="30" r="2.5" />
            <circle cx="422" cy="10" r="2" />
            <circle cx="776" cy="10" r="2" />
          </g>

          {/* BOTTOM SWAG */}
          <g opacity="0.3" fill="none" stroke="#c8892a" strokeWidth="1">
            <path d="M 75 782 Q 300 762 600 772 Q 900 762 1125 782" />
          </g>
        </svg>

        <div className="hero-content">
          <p className="hero-eyebrow">San Antonio&apos;s Premier Wine Resource</p>
          <h1 className="wordmark">Enotria</h1>
          <p className="wordmark-sub">SA</p>
          <div className="vine-rule">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="7" r="3.5" fill="rgba(212,169,78,0.7)" />
              <circle cx="8" cy="12" r="3" fill="rgba(212,169,78,0.6)" />
              <circle cx="16" cy="12" r="3" fill="rgba(212,169,78,0.6)" />
              <circle cx="12" cy="17" r="3" fill="rgba(212,169,78,0.5)" />
              <circle cx="6" cy="17" r="2.5" fill="rgba(212,169,78,0.4)" />
              <circle cx="18" cy="17" r="2.5" fill="rgba(212,169,78,0.4)" />
            </svg>
          </div>
          <p className="hero-tagline">A world of wine.</p>
        </div>
      </header>

      {/* ════ LABEL BAND ════ */}
      <div className="label-band">
        <div className="label-band-inner">
          <span className="band-item">Weekly Tastings</span>
          <div className="band-dot"></div>
          <span className="band-item">Wine Events</span>
          <div className="band-dot"></div>
          <span className="band-item">Home Delivery</span>
          <div className="band-dot"></div>
          <span className="band-item">Huge Selection</span>
          <div className="band-dot"></div>
          <span className="band-item">A Commitment to Value</span>
        </div>
      </div>

      {/* ════ ABOUT ════ */}
      <section id="about" className="about">
        <div className="about-inner">
          <div className="section-label reveal"><span>About Enotria SA</span></div>
          <p className="reveal">
            I fell in love with wine as a teenager, inspired in part by Thomas Jefferson&apos;s passion for it. &ldquo;Good wine is a necessity of life for me,&rdquo; he wrote, and it became that for me at a very young age.<br /><br />
            During my undergraduate and graduate studies, I worked with numerous restaurants and caterers, which afforded me a strong wine education on a student budget. A stint at the renowned Inn at Little Washington in Virginia exposed me to some of the finest wines France and California had to offer.<br /><br />
            Returning to school at the University of Virginia School of Law further ingrained in me the importance of value. My restaurant work during those years included a deep dive into Italian wines that has guided me ever since.
          </p>
          <p className="reveal">
            Opting for wine over jurisprudence after graduation, I moved to San Antonio to run the wine department at Gabriel&apos;s Wine &amp; Spirits. After five years, I transitioned to wholesale with Block Distributing, now Republic National Distributing Company.<br /><br />
            I was later hired by Don&apos;s &amp; Ben&apos;s, where I managed their wine program at the Seazars store in Alamo Heights. When they were acquired by Gabriel&apos;s, I moved to their 22,000-square-foot store at Blanco and 1604.<br /><br />
            Just before the company filed Chapter 11 in January 2020, I was let go. I immediately began taking care of my clients through my friend&apos;s St. Tryphon Winery in Sisterdale. Four years and a quarter-million miles later, I realized I was burning out. I obtained my own license and secured a space five minutes from my home in Alamo Heights.<br /><br />
            I initially planned to open as a wine bar, but a good friend pointed out that, even with help, I would have no life. Making that component a members-only club has given me the best of both worlds: daytime sales to the general public continue uninterrupted, while evenings and weekends feature a fun group of new friends sharing great wines in a cozy space—without my having to stay into the wee hours.
          </p>
          <p className="reveal">I hope you will soon reach out for your necessities of life.</p>
          <div className="joe-sig reveal">
            <p className="sig-name">Joe Baker</p>
            <p className="sig-title">Wine Lover &nbsp;&middot;&nbsp; Enotria SA Founder</p>
          </div>
        </div>
      </section>

      {/* ════ GET IN TOUCH ════ */}
      <div className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-label reveal"><span>Get In Touch</span></div>
          <a className="contact-email reveal" href="mailto:joebakerwineconsultant@gmail.com">joebakerwineconsultant@gmail.com</a>
        </div>
      </div>

      {/* ════ FOOTER ════ */}
      <footer>
        <div className="footer-wordmark">Enotria</div>
        <div className="footer-divider"><div className="footer-diamond"></div></div>
        <address>
          7959 Broadway, Suite 304<br />
          San Antonio, Texas 78209
        </address>
        <p className="footer-copy">&copy; 2025 Enotria SA &nbsp;&middot;&nbsp; San Antonio, Texas</p>
      </footer>
    </>
  );
}
