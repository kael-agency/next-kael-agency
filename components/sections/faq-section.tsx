"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { slideUp, staggerContainer } from "@/lib/animations";

const faqs = [
    {
        question: "¿Tengo que saber de internet o tecnología para usar esto?",
        answer: "Para nada. Nosotros nos encargamos de toda la configuración técnica, el diseño y las conexiones. Tú solo necesitas tu celular con WhatsApp para responder a los turistas que te escriban."
    },
    {
        question: "¿Tengo que pagar comisiones de las ventas como en Booking o Airbnb?",
        answer: "No. Nuestro modelo se enfoca en que tú recibas reservas directas. El 100% del dinero de las reservas es tuyo. Sin tarifas ocultas ni comisiones por porcentaje."
    },
    {
        question: "¿Cuánto tardo en ver resultados?",
        answer: "Una vez tengamos lista tu presencia y comencemos a mostrar tu finca o glamping, es normal empezar a recibir las primeras conversaciones y reservas en los primeros 15 a 30 días."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="max-w-3xl mx-auto px-6 py-24 border-t border-neutral-100 dark:border-neutral-900">
            <div className="text-center mb-16">
                <motion.div
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">Preguntas Frecuentes</h2>
                    <p className="text-neutral-500 dark:text-neutral-400">Resolvemos tus dudas para que des el paso seguro.</p>
                </motion.div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
            >
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <motion.div
                            key={index}
                            variants={slideUp}
                            className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0a0a0a]"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span className="font-medium text-neutral-900 dark:text-white text-lg">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500"
                                >
                                    <Icon icon="solar:alt-arrow-down-linear" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
