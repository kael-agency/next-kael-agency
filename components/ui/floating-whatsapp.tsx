"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function FloatingWhatsapp() {
    const message = encodeURIComponent("Hola Kael Agency, quiero recibir más reservas directas en mi negocio turístico.");
    
    return (
        <motion.a
            href={`https://wa.me/573125650605?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
            aria-label="Contactar por WhatsApp"
        >
            {/* Ping animation behind the button to draw attention */}
            <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
            
            <Icon icon="mdi:whatsapp" className="w-8 h-8 relative z-10" />
        </motion.a>
    );
}
