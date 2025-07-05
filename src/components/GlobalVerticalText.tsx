import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Section-specific content mapping
const sectionContent = {
  hero: {
    left: ['EXCLUSIVE', 'STRATEGIC', 'LUCRATIVE', 'DIVERSIFIED'],
    right: ['PREMIUM', 'PROFITABLE', 'SECURE', 'ELITE']
  },
  metrics: {
    left: ['PERFORMANCE', 'GROWTH', 'RETURNS', 'SUCCESS'],
    right: ['PROVEN', 'RELIABLE', 'CONSISTENT', 'EXCEPTIONAL']
  },
  journey: {
    left: ['EXPERIENCE', 'EXPERTISE', 'INNOVATION', 'LEADERSHIP'],
    right: ['TRUSTED', 'ESTABLISHED', 'VISIONARY', 'PIONEERING']
  },
  partners: {
    left: ['GLOBAL', 'NETWORK', 'ALLIANCE', 'COLLABORATION'],
    right: ['INTERNATIONAL', 'CONNECTED', 'UNIFIED', 'PARTNERSHIP']
  },
  growth: {
    left: ['EXPANSION', 'DEVELOPMENT', 'PROGRESS', 'ADVANCEMENT'],
    right: ['SCALING', 'EVOLVING', 'RISING', 'FLOURISHING']
  },
  developers: {
    left: ['CONSTRUCTION', 'ARCHITECTURE', 'DESIGN', 'BUILDING'],
    right: ['QUALITY', 'CRAFTSMANSHIP', 'EXCELLENCE', 'PRECISION']
  },
  contact: {
    left: ['CONNECT', 'ENGAGE', 'COMMUNICATE', 'REACH'],
    right: ['ACCESSIBLE', 'RESPONSIVE', 'AVAILABLE', 'SUPPORTIVE']
  }
};

const GlobalVerticalText: React.FC = () => {
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<keyof typeof sectionContent>('hero');

  useEffect(() => {
    // Section detection based on scroll position
    const sections = [
      { id: 'home', key: 'hero' as keyof typeof sectionContent },
      { id: 'metrics', key: 'metrics' as keyof typeof sectionContent },
      { id: 'journey', key: 'journey' as keyof typeof sectionContent },
      { id: 'investors', key: 'partners' as keyof typeof sectionContent },
      { id: 'growth', key: 'growth' as keyof typeof sectionContent },
      { id: 'developers', key: 'developers' as keyof typeof sectionContent },
      { id: 'contact', key: 'contact' as keyof typeof sectionContent }
    ];

    // Create section triggers for content switching
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentSection(section.key),
          onEnterBack: () => setCurrentSection(section.key)
        });
      }
    });

    if (leftTextRef.current && rightTextRef.current) {
      // Initial fade-in animation using GSAP
      gsap.fromTo([leftTextRef.current, rightTextRef.current], 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );

      // Create scroll-triggered animations for vertical text elements
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Left text moves up slowly on scroll
          gsap.to(leftTextRef.current, {
            y: `${-progress * 200}px`,
            duration: 0.3,
            ease: "none"
          });
          // Right text moves down slowly on scroll
          gsap.to(rightTextRef.current, {
            y: `${progress * 200}px`,
            duration: 0.3,
            ease: "none"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const currentContent = sectionContent[currentSection];

  return (
    <>
      {/* Left Vertical Text with Golden Border */}
      <div 
        className="fixed inset-y-0 flex items-center justify-center pointer-events-none vertical-text-container"
        style={{
          left: 'clamp(0.5rem, 2vw, 1rem)',
          width: 'clamp(2rem, 8vw, 4rem)',
          height: '100vh',
          zIndex: 1
        }}
      >
        <div className="relative">
          {/* Golden border with glow effect */}
          <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_rgba(251,191,36,0.6)]" style={{ height: '100vh' }} />
          <div 
            ref={leftTextRef}
            className="writing-mode-vertical text-gold/20 font-black tracking-widest select-none"
            style={{ 
              fontFamily: 'Arial Black, sans-serif',
              fontSize: 'clamp(0.8rem, 2.5vw, 2rem)',
              paddingRight: 'clamp(0.5rem, 1.5vw, 1.5rem)',
              lineHeight: 'clamp(1.2, 3vw, 2)',
              wordBreak: 'keep-all',
              whiteSpace: 'nowrap',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {currentContent.left.join(' • ')}
          </div>
        </div>
      </div>
      
      {/* Right Vertical Text with Golden Border */}
      <div 
        className="fixed inset-y-0 flex items-center justify-center pointer-events-none vertical-text-container"
        style={{
          right: 'clamp(0.5rem, 2vw, 1rem)',
          width: 'clamp(2rem, 8vw, 4rem)',
          height: '100vh',
          zIndex: 1
        }}
      >
        <div className="relative">
          {/* Golden border with glow effect */}
          <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_rgba(251,191,36,0.6)]" style={{ height: '100vh' }} />
          <div 
            ref={rightTextRef}
            className="writing-mode-vertical text-gold/20 font-black tracking-widest select-none"
            style={{ 
              fontFamily: 'Arial Black, sans-serif',
              fontSize: 'clamp(0.8rem, 2.5vw, 2rem)',
              paddingLeft: 'clamp(0.5rem, 1.5vw, 1.5rem)',
              lineHeight: 'clamp(1.2, 3vw, 2)',
              wordBreak: 'keep-all',
              whiteSpace: 'nowrap',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {currentContent.right.join(' • ')}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalVerticalText;