import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import motion
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import NotFound from './pages/NotFound'
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';
/*import Preloader from './components/Preloader';*/
/*import { linearGradient } from 'framer-motion/client';*/

function App() {
  const location = useLocation();
  /*const [loading, setLoading] = useState(true);*/

  const pageVariants = {
    initial: {
      x: '100%',
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    out: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  /*useEffect(() => {
    // Simulate a 2.5 second loading time
    const timer = setTimeout(() => setLoading(false), 2500)

    // Clear timeout on unmount
    return () => clearTimeout(timer);
  }, [])

  if (loading) {
    return <Preloader />; // Show prelaoder while loading
  }*/

  return (
    <div className="font-montserrat flex flex-col min-h-screen overflow-x-hidden bg-gray-100 dark:bg-slate-950">
      <Navbar />
      <div className="flex-grow pt-16">
        <ScrollToTop>
          <AnimatePresence mode="wait">
            <PageLoader>
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <About />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <Projects />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects/:slug"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <ProjectDetail />
                    </motion.div>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <Skills />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="in"
                      exit="out"
                    >
                      <Contact />
                    </motion.div>
                  }
                />

                {/* Catch-all route for 404 page */}
                <Route path='*' element={<NotFound />} />
              </Routes>
            </PageLoader>
          </AnimatePresence>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}

function RootApp() {
  const [showSplash, setShowSplash] = useState(true);
  
  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <Router>
        <App />
    </Router>
  );
}

export default RootApp;