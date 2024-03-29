"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);
	const { x, y } = useMousePosition();
	// console.log(x, y);
	const size = isHovered ? 400 : 40;

	return (
		<main className={styles.main}>
			{/* <main className="max-w-7xl mx-auto text-3xl md:text-4xl lg:text-5xl text-[#afa18f] font-bold tracking-wider"> */}
			<motion.div
				className={styles.mask}
				animate={{
					WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
			>
				<p
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					A web developer - with skills that haven&apos;t been
					replaced by A.I (yet) - not just an ordinary developer but{" "}
					<span className="text-white"> an web artist</span>.
				</p>
			</motion.div>
			<div className={styles.body}>
				<p>
					I&apos;m a
					<span className="text-[#ec4e39]">
						{" "}
						selectively skilled{" "}
					</span>
					web developer with strong focus on producing high quality &
					impactful digital experience.
				</p>
			</div>
		</main>
	);
}
