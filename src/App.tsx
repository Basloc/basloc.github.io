import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Paris 1889',
    subtitle: 'La Belle Époque',
    description: 'Revivez l\'âge d\'or parisien, entre Moulin Rouge et Tour Eiffel naissante',
    image: '/Image_1.png',
    year: '1889',
  },
  {
    id: 2,
    title: 'Crétacé -65M',
    subtitle: 'L\'ère des Dinosaures',
    description: 'Explorez un monde préhistorique où les géants règnent en maîtres',
    image: '/Image_2.png',
    year: '-65 000 000',
  },
  {
    id: 3,
    title: 'Florence 1504',
    subtitle: 'La Renaissance',
    description: 'Côtoyez Michel-Ange et Léonard de Vinci au cœur de la Renaissance italienne',
    image: '/Image_3.png',
    year: '1504',
  },
];

function SectionWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DestinationCard({ destination, index }: { destination: typeof destinations[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 bg-gray-900"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-bold text-sm">
          {destination.year}
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
          {destination.title}
        </h3>
        <p className="text-yellow-500 text-sm font-semibold mb-3 uppercase tracking-wider">
          {destination.subtitle}
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          {destination.description}
        </p>

        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
          Réserver ce voyage
        </button>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <Clock className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              TimeTravel Agency
            </span>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center space-x-8"
          >
            <li><a href="#destinations" className="hover:text-yellow-500 transition-colors">Destinations</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            <li>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Réserver
              </button>
            </li>
          </motion.ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                Explorez l'histoire,
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-white bg-clip-text text-transparent">
                réinventée
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Voyagez à travers les époques avec le luxe et le confort que vous méritez.
            Une expérience temporelle exclusive qui transcende le temps.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Découvrir nos époques
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20 flex items-center justify-center space-x-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">∞</div>
              <div className="text-sm text-gray-400 mt-2">Époques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">100%</div>
              <div className="text-sm text-gray-400 mt-2">Sécurité</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">5★</div>
              <div className="text-sm text-gray-400 mt-2">Expérience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <SectionWrapper className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                Nos Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choisissez votre époque et laissez-nous vous transporter dans une expérience inoubliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Chatbot Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (window.chatbase && typeof window.chatbase === 'function') {
            window.chatbase('open');
          } else {
            window.chatbase?.('open');
          }
        }}
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black p-5 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
        title="Posez-moi vos questions"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
          Posez-moi vos questions
        </span>
      </motion.button>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Clock className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                TimeTravel Agency
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-500 transition-colors">Mentions légales</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-yellow-500 transition-colors">Conditions générales</a>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2024 TimeTravel Agency. Tous droits réservés à travers le temps et l'espace.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
