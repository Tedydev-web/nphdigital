import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useCallback, useState } from "react";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyHero from "@/components/hero/DigitalAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import ServiceElementV4 from "@/components/service/ServiceElementV4";
import DigitalAgencyCounter from "@/components/counter/DigitalAgencyCounter";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import { useTranslation } from "next-i18next";
import { useLanguageManager } from "@/hooks/useLanguageManager";

const DigitalAgency = () => {
  const { t } = useTranslation("common");
  const timelineRef = useRef(null);
  const dotsRef = useRef([]);
  const { currentLanguage } = useLanguageManager();
  const [gsapInstance, setGsapInstance] = useState(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTriggerModule.default);
      setGsapInstance(gsap);
    };
    loadGSAP();
  }, []);

  const setupScrollDots = useCallback(() => {
    if (!gsapInstance) return;

    const dots = dotsRef.current;
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          highlightDot(index);
        } else {
          unhighlightDot(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gsapInstance]);

  const setupTimeline = useCallback(() => {
    if (!gsapInstance) return;

    const timeline = timelineRef.current;
    gsapInstance.to(timeline, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress * 100;
          timeline.style.height = `${progress}%`;
        },
      },
    });
  }, [gsapInstance]);

  const playCursor = useCallback(() => {
    if (!gsapInstance) return;

    let client_cursor = document.getElementById("client_cursor");
    if (!client_cursor) return;

    const handleMouseMove = (e) => {
      const target = e.target;

      if (target.closest(".testimonial__img")) {
        gsapInstance.to(client_cursor, {
          opacity: 1,
          x: e.clientX,
          y: e.clientY,
          ease: "power4.out",
        });
      } else {
        gsapInstance.to(client_cursor, {
          opacity: 0,
          x: e.clientX,
          y: e.clientY,
          ease: "power4.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gsapInstance]);

  useEffect(() => {
    if (typeof window !== "undefined" && gsapInstance) {
      const cursorCleanup = playCursor();
      setupTimeline();
      const dotsCleanup = setupScrollDots();

      return () => {
        cursorCleanup && cursorCleanup();
        dotsCleanup && dotsCleanup();
      };
    }
  }, [playCursor, setupTimeline, setupScrollDots, gsapInstance]);

  const highlightDot = (index) => {
    if (dotsRef.current[index]) {
      dotsRef.current[index].classList.add("active");
    }
  };

  const unhighlightDot = (index) => {
    if (dotsRef.current[index]) {
      dotsRef.current[index].classList.remove("active");
    }
  };

  return (
    <div>
      <Head>
        <title>NPH Digital | Giải Pháp chuyển đổi số toàn diện</title>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />

        <meta
          name="description"
          content="NPH Digital - Giải pháp chuyển đổi số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "NPH Digital",
              url: "https://nphdigital.com",
              logo: "https://res.cloudinary.com/tedydev/image/upload/nphdigital/logo.png",
              sameAs: [
                "https://www.facebook.com/nphdigital838",
                "https://twitter.com/NPHDigital",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "VN",
                addressRegion: "Ho Chi Minh City",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-777-018-333",
                contactType: "customer service",
              },
              description:
                "NPH Digital - Giải pháp chuyển đổi số toàn diện cho doanh nghiệp",
              foundingDate: "2023",
              founders: [
                {
                  "@type": "Person",
                  name: "NPH Digital",
                },
              ],
            }),
          }}
        />
        <meta
          name="keywords"
          content="Giải pháp chuyển đổi số, Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, Thuê ngoài IT, NPH Digital"
        />
        <meta name="author" content="NPH Digital" />

        <meta
          property="og:title"
          content="NPH Digital | Giải Pháp chuyển đổi số toàn diện"
        />
        <meta
          property="og:description"
          content="NPH Digital - Giải pháp chuyển đổi số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nphdigital.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />
        <meta
          property="og:image:alt"
          content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content="NPH Digital" />
        <meta property="og:region" content="VN" />
        <meta property="og:country-name" content="Vietnam" />
        <meta
          property="og:video"
          content="https://res.cloudinary.com/tedydev/video/upload/v1729066298/nphdigital/video.mp4"
        />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />
        <meta
          name="twitter:title"
          content="NPH Digital | Giải Pháp chuyển đổi số toàn diện"
        />
        <meta
          name="twitter:description"
          content="NPH Digital - Giải pháp chuyển đổi số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />
        <meta
          name="twitter:image:alt"
          content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />
        <meta name="twitter:site" content="@NPHDigital" />
        <meta name="twitter:creator" content="@NPHDigital" />

        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://nphdigital.com/" />

        <link
          rel="icon"
          href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.ico"
          sizes="16x16"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="application-name" content="NPH Digital" />
        <meta name="theme-color" content="#121212" />

        <meta name="copyright" content="NPH Digital" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "NPH Digital",
              url: "https://nphdigital.com",
              logo: "https://res.cloudinary.com/tedydev/image/upload/nphdigital/logo.png",
              sameAs: [
                "https://www.facebook.com/nphdigital838",
                "https://twitter.com/NPHDigital",
              ],
            }),
          }}
        />
      </Head>

      {currentLanguage && (
        <div className="timeline" ref={timelineRef}>
          {[
            "",
            "",
            t("timeline.comp1"),
            t("timeline.comp2"),
            t("timeline.comp3"),
            t("timeline.comp4"),
            t("timeline.comp5"),
            t("timeline.comp6"),
            t("timeline.comp7"),
            t("timeline.comp8"),
          ].map((label, index) => (
            <span
              key={index}
              className="dot"
              ref={(el) => (dotsRef.current[index] = el)}
            >
              <span className="dot-label">{label}</span>
            </span>
          ))}
        </div>
      )}
      <main>
        <div className="cursor" id="client_cursor">
          Play
        </div>
        <RootLayout header="header3" footer="footer3" defaultMode="dark">
          <DigitalAgencyHero />
          <DigitalAgencyRoll />
          <DigitalAgencyAbout />
          <ServiceElementV4 />
          <DigitalAgencyCounter />
          <DigitalAgencyWorkflow />
          <DigitalAgencyPortfolio />
          <DigitalAgencyBrand />
          <DigitalMarketingTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
      <style jsx>{`
        .timeline {
          position: fixed;
          right: 0;
          top: 30%;
          width: 5px;
          height: 100%;
          background-color: #0d1117;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        .dot {
          position: relative;
          width: 10px;
          height: 10px;
          background-color: #0d1117;
          border-radius: 50%;
          opacity: 0.5;
          transition: opacity 0.3s, background-color 0.3s, transform 0.3s;
        }
        .dot-label {
          position: absolute;
          right: 20px;
          top: 30%;
          transform: translateY(-50%) scale(0.8);
          background-color: #1b1b1b;
          color: #c3c3c3;
          padding: 2px 5px;
          border-radius: 3px;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          white-space: nowrap;
        }
        .dot.active {
          opacity: 1;
          background-color: #99ba21;
          transform: scale(1.2);
        }
        .dot.active .dot-label {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: red;
          pointer-events: none;
          z-index: 1001;
        }
      `}</style>
    </div>
  );
};

export default DigitalAgency;
