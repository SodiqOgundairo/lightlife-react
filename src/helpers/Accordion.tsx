// Accordion.tsx
import { BiChevronDown } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  isFirst?: boolean;
}

const Accordion = ({ title, children, isOpen, onClick, isFirst = false }: AccordionProps) => {
  return (
    <div className={`w-full ${!isFirst ? 'border-t border-gray-200' : ''}`}>
      <button
        onClick={onClick}
        className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center transition-colors
          ${isOpen ? 'bg-gradient-to-br from-purple-light to-darkPurple text-light' : 'bg-white hover:bg-gray-50'}`}
      >
        <span className="text-lg font-semibold">{title}</span>
        <BiChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 }
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden px-6 bg-white"
          >
            <div className="py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
