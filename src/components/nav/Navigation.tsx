'use client'
import DesktopNavlinks from "./DesktopNavlinks"
import MobileNavlinks from "./MobileNavlinks"
import { motion } from "framer-motion"

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: "15px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-transparent backdrop-blur-sm md:px-6 px-4 py-3 absolute flex justify-between items-center w-full"
        >
            <div className="logo">
                <span className="text-white tracking-tighter font-semibold text-2xl">
                    LYDIA
                </span>

            </div>
            {/* Desktop navigation links */}
            <DesktopNavlinks />

            <MobileNavlinks />
        </motion.div>
    )
}

export default Navigation