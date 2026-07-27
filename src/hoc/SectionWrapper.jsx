import {motion} from 'framer-motion';
import {styles} from '../styles';
import {staggerContainer} from '../utils/motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const SectionWrapper = (Component, idName, sectionNumber) => 
function HOC() {
    const prefersReducedMotion = usePrefersReducedMotion();
    return (
        <motion.section
            data-section={idName}
            variants={staggerContainer()}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView='show'
            viewport={{once:true, amount:0.05, margin:'0px 0px 12% 0px'}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            {sectionNumber && (
                <span className="hidden md:flex items-center gap-2 absolute top-20 right-16 z-[2] select-none pointer-events-none">
                    <span className="font-display text-[13px] font-medium tracking-[0.3em] text-[#915EFF]/70">{sectionNumber}</span>
                    <span className="w-8 h-px bg-secondary/25" />
                    <span className="font-display text-[12px] tracking-[0.3em] text-secondary/40">08</span>
                </span>
            )}
            <Component />
        </motion.section>
    )
}

export default SectionWrapper