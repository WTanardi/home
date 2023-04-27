import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Element,
  Events,
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  Animator,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";
import { TypeAnimation } from "react-type-animation";
import Spacer from "./components/Spacer";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import ChatWindow from "./components/ChatWindow";
import "./assets/fonts/InstagramSans-Bold.ttf";
import "./assets/fonts/InstagramSans-Regular.ttf";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import img5 from "./assets/img/5.png";
import img6 from "./assets/img/6.png";
import img7 from "./assets/img/7.png";
import img8 from "./assets/img/8.png";
import img9 from "./assets/img/9.png";
import img10 from "./assets/img/10.png";
import img11 from "./assets/img/11.png";
import img12 from "./assets/img/12.png";
import img13 from "./assets/img/13.png";
import img14 from "./assets/img/14.png";
import img15 from "./assets/img/15.png";
import img16 from "./assets/img/16.png";
import img17 from "./assets/img/17.png";
import img18 from "./assets/img/18.png";
import img19 from "./assets/img/19.png";
import img20 from "./assets/img/20.png";
import img21 from "./assets/img/21.png";
import img22 from "./assets/img/22.png";
import img23 from "./assets/img/23.png";
import img24 from "./assets/img/24.png";
import img25 from "./assets/img/25.png";
import img26 from "./assets/img/26.png";
import img27 from "./assets/img/27.png";
import img28 from "./assets/img/28.png";
import img29 from "./assets/img/29.png";
import img30 from "./assets/img/30.png";
import img31 from "./assets/img/31.png";
import img32 from "./assets/img/32.png";
import img33 from "./assets/img/33.png";
import img34 from "./assets/img/34.png";
import img35 from "./assets/img/35.png";

const App: React.FC = () => {
  const typingRef1 = React.useRef<HTMLSpanElement>(null);
  const typingRef2 = React.useRef<HTMLSpanElement>(null);
  const typingRef3 = React.useRef<HTMLSpanElement>(null);
  const typingRef4 = React.useRef<HTMLSpanElement>(null);
  const typingRef5 = React.useRef<HTMLSpanElement>(null);
  const typingRef6 = React.useRef<HTMLSpanElement>(null);
  const typingRef7 = React.useRef<HTMLSpanElement>(null);
  const typingRef8 = React.useRef<HTMLSpanElement>(null);
  const typingRef9 = React.useRef<HTMLSpanElement>(null);
  const typingRef10 = React.useRef<HTMLSpanElement>(null);
  const typingRef11 = React.useRef<HTMLSpanElement>(null);
  const typingRef12 = React.useRef<HTMLSpanElement>(null);
  const typingRef13 = React.useRef<HTMLSpanElement>(null);
  const typingRef14 = React.useRef<HTMLSpanElement>(null);
  const typingRef15 = React.useRef<HTMLSpanElement>(null);
  const typingRef16 = React.useRef<HTMLSpanElement>(null);
  const typingRef17 = React.useRef<HTMLSpanElement>(null);
  const typingRef18 = React.useRef<HTMLSpanElement>(null);
  const typingRef19 = React.useRef<HTMLSpanElement>(null);

  const intersecting = useIntersectionObserver(
    [
      typingRef1,
      typingRef2,
      typingRef3,
      typingRef4,
      typingRef5,
      typingRef6,
      typingRef7,
      typingRef8,
      typingRef9,
      typingRef10,
      typingRef11,
      typingRef12,
      typingRef13,
      typingRef14,
      typingRef15,
      typingRef16,
      typingRef17,
      typingRef18,
      typingRef19,
    ],
    {
      threshold: 0.3,
    }
  );

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleScroll = _.debounce(() => {
    const scrollPosition = window.scrollY + 300;
    const currentSectionIndex = sectionRefs.findIndex(
      (ref) => ref.current && ref.current.offsetTop > scrollPosition
    );
    setCurrentSectionIndex(
      currentSectionIndex === -1
        ? sectionRefs.length - 1
        : currentSectionIndex - 1
    );
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sectionRef = sectionRefs[index];
    if (sectionRef && sectionRef.current) {
      scroller.scrollTo(sectionRef.current.id, {
        duration: 3500,
        delay: 0,
        smooth: "easeInOutQuad",
        offset: 0, // adjust this value to your needs
      });
      setCurrentSectionIndex(index);
    }
  };

  // Disable debounce while scrolling
  const handleClick = (index: number) => {
    _.debounce(() => scrollToSection(index), 100, {
      leading: true,
      trailing: false,
    })();
  };

  return (
    <ScrollContainer className="font-gotham text-white bg-black text-center text-4xl sm:text-5xl">
      {/* Home */}
      <section ref={sectionRefs[0]} id="section1">
        <ScrollPage>
          <Animator
            className="container w-11/12  font-bold"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span id="intro" className="opacity-0">
              Home&nbsp;
            </span>
            <span id="outro" className="opacity-0">
              ?
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* What is Home? */}
      <section ref={sectionRefs[1]} id="section2">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef1}>
              {intersecting[0] && (
                <TypeAnimation
                  sequence={["What is home ?"]}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=""
                  speed={{ type: "keyStrokeDelayInMs", value: 250 }}
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Is home.. */}
      <section ref={sectionRefs[2]} id="section3">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span className="">Is Home</span>
            <br />
            <span ref={typingRef2}>
              {intersecting[1] && (
                <TypeAnimation
                  sequence={[
                    "a place?",
                    1000,
                    "a feeling?",
                    1000,
                    "where I find comfort?",
                    1500,
                    "where I feel safe?",
                    500,
                    "where I was born?",
                    500,
                    "where I choose to be?",
                    500,
                    "a memory?",
                    500,
                    "a dream?",
                    500,
                    "an illusion?",
                  ]}
                  speed={10}
                  deletionSpeed={20}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=""
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* What does home truly mean? */}
      <section ref={sectionRefs[3]} id="section4">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span></span>
            <br />
            <span ref={typingRef3}>
              {intersecting[2] && (
                <TypeAnimation
                  sequence={["What does home truly mean?"]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=""
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Well, to me, home is where */}
      <section ref={sectionRefs[4]} id="section5">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef4}>
              {intersecting[3] && (
                <TypeAnimation
                  sequence={[
                    "Well,",
                    1000,
                    "Well, \nto me,",
                    1000,
                    "Well, \nto me, \nhome is where",
                    1000,
                  ]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className="whitespace-pre-line lg:whitespace-normal"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* I can.. */}
      <section ref={sectionRefs[5]} id="section6">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef5}>
              {intersecting[4] && (
                <TypeAnimation
                  sequence={[
                    "I can truly be myself",
                    1000,
                    "I can express my true feelings",
                    1000,
                    "I'm not judged for my wrongs",
                    1000,
                    "I'm not judged for my past",
                    1000,
                    "I'm not judged by my status",
                    1000,
                    "I can grow",
                    1000,
                    "I feel comfortable",
                    1000,
                    "I feel love",
                    1000,
                    "I feel welcome",
                  ]}
                  speed={10}
                  deletionSpeed={20}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Today, I'm dedicating.. */}
      <section ref={sectionRefs[6]} id="section7">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef6}>
              {intersecting[5] && (
                <TypeAnimation
                  sequence={[
                    "Today, I dedicate my birthday",
                    1000,
                    "to tell you about",
                    1000,
                    "the home I found here",
                  ]}
                  speed={1}
                  deletionSpeed={40}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=""
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* In this place once unknown to me */}
      <section ref={sectionRefs[7]} id="section8">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef7}>
              {intersecting[6] && (
                <TypeAnimation
                  sequence={["In this place once unknown to me,"]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* This place with */}
      <section ref={sectionRefs[8]} id="section9">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef8}>
              {intersecting[7] && (
                <TypeAnimation
                  sequence={[
                    "this place with",
                    0,
                    "this place with \nchaotic traffic",
                    1000,
                    "this place with \noverwhelming crowds",
                    1000,
                    "this place with \nunbearable heat",
                    1000,
                    "this place with \nraging thunderstorms",
                    1000,
                    "this place with \nunfamiliar faces",
                    1000,
                  ]}
                  speed={20}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* I found them */}
      <section ref={sectionRefs[9]} id="section10">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef9}>
              {intersecting[8] && <p>I found them.</p>}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Well actually */}
      <section ref={sectionRefs[10]} id="section11">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef10}>
              {intersecting[9] && (
                <TypeAnimation
                  sequence={["Well,", 1000, "Well, actually"]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* They found me */}
      <section ref={sectionRefs[11]} id="section12">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef11}>
              {intersecting[10] && <p>They found me.</p>}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* It all started with a simple conversation */}
      <section ref={sectionRefs[12]} id="section13">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef12}>
              {intersecting[11] && (
                <TypeAnimation
                  sequence={["It all started with a simple conversation"]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* IG chat */}
      <section ref={sectionRefs[13]} id="section14">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-[390px]"
            animation={batch(Fade(), Sticky(50, 40))}
          >
            <span ref={typingRef13}>
              {intersecting[12] && <ChatWindow></ChatWindow>}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* When I arrived the next day */}
      <section ref={sectionRefs[14]} id="section15">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef14}>
              {intersecting[13] && (
                <TypeAnimation
                  sequence={[
                    "when I arrived there the next day",
                    1000,
                    "I opened the door",
                    1000,
                    "stuck my head in",
                    1000,
                    "and heard",
                    1000,
                    "BILLYYY ! ! !",
                  ]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* They didn't know me */}
      <section ref={sectionRefs[15]} id="section16">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef15}>
              {intersecting[14] && (
                <TypeAnimation
                  sequence={[
                    "They didn't know me",
                    1000,
                    "I didn't know them",
                    1000,
                    "But they welcomed me like a long lost brother",
                  ]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* and the rest? */}
      <section ref={sectionRefs[16]} id="section17">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 50))}
          >
            <span ref={typingRef16}>
              {intersecting[15] && (
                <TypeAnimation
                  sequence={[
                    "and the rest?",
                    1000,
                    "well the rest you can see for yourself",
                  ]}
                  speed={1}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className=" whitespace-pre-line"
                />
              )}
            </span>
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Pic section 1 */}
      <section ref={sectionRefs[17]} id="section18">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(49, 27))}
          >
            <img src={img6} className="w-48 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 13))}
          >
            <img src={img1} className="w-48 h-auto -rotate-6" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(90, 26))}
          >
            <img src={img2} className="w-48 h-auto rotate-6" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(99, 42))}
          >
            <img src={img3} className="w-48 h-auto rotate-6" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(85, 56))}
          >
            <img src={img5} className="w-64 h-auto rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(90, 12))}
          >
            <img src={img7} className="w-48 h-auto" alt="" />
          </Animator>

          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(44, 53))}
          >
            <img src={img8} className="w-52 h-auto rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(59, 67))}
          >
            <img src={img34} className="w-40 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(94, 70))}
          >
            <img src={img35} className="w-40 h-auto rotate-3" alt="" />
          </Animator>

          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(42, 39))}
          >
            <img src={img9} className="w-48 h-auto -rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(82, 41))}
          >
            <img src={img4} className="w-24 h-auto rotate-2" alt="" />
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* Pic Section 2 */}
      <section ref={sectionRefs[18]} id="section19">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(92, 13))}
          >
            <img src={img21} className="w-48 h-auto rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(84, 26))}
          >
            <img src={img12} className="w-48 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(48, 25))}
          >
            <img src={img11} className="w-48 h-auto rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 12))}
          >
            <img src={img10} className="w-48 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(67, 49))}
          >
            <img src={img13} className="w-48 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(72, 36))}
          >
            <img src={img14} className="w-48 h-auto -rotate-1" alt="" />
          </Animator>

          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(44, 57))}
          >
            <img src={img16} className="w-48 h-auto rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(45, 41))}
          >
            <img src={img17} className="w-32 h-auto -rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(113, 35))}
          >
            <img src={img18} className="w-32 h-auto rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(99, 44))}
          >
            <img src={img15} className="w-48 h-auto rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(98, 56))}
          >
            <img src={img19} className="w-48 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(50, 68))}
          >
            <img src={img20} className="w-48 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(90, 68))}
          >
            <img src={img22} className="w-56 h-auto rotate-1" alt="" />
          </Animator>
        </ScrollPage>
      </section>
      <Spacer />
      {/* IG chat */}
      <section ref={sectionRefs[19]} id="section20">
        <ScrollPage>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(55, 13))}
          >
            <img src={img23} className="w-80 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(83, 26))}
          >
            <img src={img24} className="w-64 h-auto -rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(45, 38))}
          >
            <img src={img25} className="w-64 h-auto rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(85, 46))}
          >
            <img src={img26} className="w-64 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(44, 52))}
          >
            <img src={img27} className="w-48 h-auto -rotate-2" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(97, 34))}
          >
            <img src={img28} className="w-48 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(45, 26))}
          >
            <img src={img29} className="w-48 h-auto -rotate-3" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(47, 70))}
          >
            <img src={img30} className="w-32 h-auto -rotate-6" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(83, 58))}
          >
            <img src={img31} className="w-64 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(75, 70))}
          >
            <img src={img32} className="w-32 h-auto -rotate-1" alt="" />
          </Animator>
          <Animator
            className="container w-11/12 max-w-sm"
            animation={batch(Fade(), Sticky(102, 70))}
          >
            <img src={img33} className="w-40 h-auto -rotate-1" alt="" />
          </Animator>
        </ScrollPage>
      </section>
      {/* Scroll Buttons */}
      <div className="w-full fixed bottom-32 left-1/2 transform -translate-x-1/2">
        <button
          disabled={currentSectionIndex === 0}
          onClick={() => handleClick(currentSectionIndex - 1)}
          className="glow-on-hover p-2 border-2 text-white rounded-full mr-16"
        >
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path
              fill="currentColor"
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </button>
        <button
          disabled={currentSectionIndex === sectionRefs.length - 1}
          onClick={() => handleClick(currentSectionIndex + 1)}
          className="glow-on-hover p-2 border-2 text-white2 rounded-full "
        >
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            />
          </svg>
        </button>
      </div>
    </ScrollContainer>
  );
};

export default App;
