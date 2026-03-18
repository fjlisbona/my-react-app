import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "“Trabajar con Patricia está siendo una experiencia transformadora. Desde el primer momento se nota su interés genuino, su cariño en cada palabra y la atención que pone en cada detalle del proceso. Cada práctica me deja con una sensación de calma, claridad y bienestar. Aunque aún no he terminado el camino, siento que estoy en buenas manos y cada paso me acerca más a una versión de mí más serena, positiva y fortalecida. Estoy deseando ver en quién me voy a convertir gracias a este acompañamiento tan valioso.”",
      name: "Clara P.",
    },
    {
      quote:
        "“El acompañamiento de Patricia ha sido una luz en un momento de mucho ruido interno. Con suavidad y firmeza, me ha ayudado a reconocer mis emociones y a transitar mis procesos con amabilidad. Tiene una sensibilidad especial para saber cuándo sostener, cuándo guiar y cuándo simplemente estar. He aprendido a respirar mejor, a mirar con más compasión y a confiar más en mí. Su presencia ha sido un regalo inesperado que me está ayudando a florecer desde dentro.”",
      name: "Ana M.",
    },
    {
      quote:
        "“Desde el primer encuentro con Patricia sentí que estaba frente a alguien que realmente escucha. Su presencia es cálida y reconfortante, y su manera de acompañar te hace sentir comprendida y respetada. Cada sesión es como un espacio seguro donde puedo soltar, mirar hacia adentro y reconectar con lo esencial. Gracias a su guía, he empezado a vivir con más conciencia, paz y gratitud. Es un proceso que me está transformando profundamente, y no puedo estar más agradecida.”",
      name: "Rosa M.",
    },
    {
      quote:
        "“Desde que inicié las sesiones con Patricia mi vida dio un giro enorme. Me posicioné con más autoridad y confianza en mis acciones. Puedo ahora reconocer mi cuerpo y su lenguaje, lo que me permite no detenerme en situaciones que ya no deseaba transitar. Miro la vida con más entusiasmo y deseo de compartir con otros. El dinero también se presenta más abundante y creé mi marca personal en el trabajo. Muchas gracias Patricia por tu saber y permitirme lograr la vida que quería. ¡Un cariño grande desde Argentina!”",
      name: "Valeria.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <video
        src={require("./Video de WhatsApp 2025-07-24 a las 13.16.16_c3a1a7f7.mp4")}
        autoPlay
        loop
        muted
        className="video-fondo"
      />
      <nav className="nav">
        <div className="nav-logo">
          <a href="#inicio" className="logo-text">
            <img
              id="isotipo"
              src={require("./isotipo-patricia-lisbona.png")}
              alt="Coaching"
            />
            <div className="logo-text-content">
              <h2 className="logo-title">
                Patricia <br />
                Lisbona
              </h2>
            </div>
          </a>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("inicio");
            }}
          >
            INICIO
          </a>
          <a
            href="#acerca-de"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("acerca-de");
            }}
          >
            SOBRE MÍ
          </a>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("servicios");
            }}
          >
            SERVICIOS
          </a>
          <a
            href="#testimonios"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("testimonios");
            }}
          >
            TESTIMONIOS{" "}
          </a>

          <a
            href="#contacta"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll("contacta");
            }}
          >
            CONTACTA
          </a>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1 className="logo-subtitle">
            Coaching con enfoque en Indagación Compasiva y Mindfulness
          </h1>
          <button
            className="cta-button"
            onClick={() => smoothScroll("acerca-de")}
          >
            Descubre cómo puedo ayudarte
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca-de" className="about">
        <h2>Sobre mí</h2>
        <p>
          Soy Patricia Lisbona, Experta en Coaching con Inteligencia Emocional
          por el Grupo Emociona, spin off de la Universidad de Granada. Experta
          en Mindfulness en Desarrollo Personal y Educación Consciente por la
          Universidad de Almería. Primer nivel de Psych-K (kinesiología
          psicológica). Formada por profesionales de la talla de Joe Dispenza y
          Sergi Torres.
        </p>
        <p>
          Actualmente me encuentro camino a la Certificación en Compassionate
          Inquiry, formación creada por el Dr. Gabor Maté y Sat Dharam Kaur,
          después de dos años en esta formación.
        </p>
        <p>
          Compassionate Inquiry o Indagación Compasiva es un enfoque
          psicoterapéutico creado por el Dr. Gabor Maté a lo largo de varias
          décadas de trabajo con sus pacientes y participantes en sus consultas
          y retiros. Este enfoque suavemente descubre y libera las capas de
          trauma infantil, constricción y emociones reprimidas que han quedado
          incrustadas en el cuerpo y que están en la raíz tanto de las
          enfermedades mentales y físicas como de las adicciones.
        </p>
        <p>
          Este es el enfoque en el que estoy centrada en mis sesiones ya que ha
          supuesto una gran transformación en mi vida.
        </p>
        <p>
          Mis 30 años como profesora de Flauta Travesera y mi intención por
          alcanzar un mayor estado de plenitud con y sin el instrumento, me han
          llevado a la observación continua de mis alumnos y de mí misma para
          conocer qué aspectos emocionales, mentales y corporales están
          impidiendo que estemos presentes y disfrutemos de cualquier actividad
          que estemos realizando en nuestra vida diaria.
        </p>
        <p>
          Me encuentro a mí misma en la improvisación, la creatividad, la
          música, la risa de un niño, la inocencia, el mar y en el rostro de las
          personas a las que acompaño cuando van descubriendo realmente quienes
          son.
        </p>
        <p>
          Los valores que resuenan en mí son la presencia, la escucha empática,
          la curiosidad, respetando los procesos y ritmos individuales, la
          confianza en que cada persona tiene sus propias respuestas, la
          humildad, el no juicio y la compasión.
        </p>
        <p>
          Si quieres que te acompañe en tu proceso para soltar todo aquello que
          está dificultando disfrutar del presente, estaré encantada.
        </p>
        <p>
          "El trauma no es lo que te pasó, sino lo que ocurrió dentro de ti como
          resultado de lo que te pasó". -Gabor Maté
        </p>
        <img
          src={require("./AtWork.jpeg")}
          className="about-img"
          alt="Patricia Lisbona"
        />
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Sesiones de Coaching basadas en Indagación Compasiva</h3>
            <p>
              Mis sesiones están fundamentadas en la Indagación Compasiva, un
              enfoque creado por el Dr. Gabor Maté que invita a mirar hacia
              dentro con honestidad, suavidad y presencia. No se trata de
              analizarte ni de corregirte, sino de acompañarte a descubrir qué
              ocurre en tu mundo interno y cómo tus experiencias pasadas pueden
              estar influyendo en tu vida actual.
            </p>
            <p>
              En este espacio seguro y respetuoso, te guío para que puedas
              reconocer patrones, creencias y emociones que quizá llevas tiempo
              cargando sin darte cuenta. A través de preguntas profundas y un
              acompañamiento atento, vas accediendo a una comprensión más
              auténtica de ti mismo, lo que abre la puerta a cambios reales y
              sostenibles.
            </p>
            <p><strong>¿Qué puedes encontrar en estas sesiones?</strong></p>
            <ul>
              <li>Un espacio donde sentirte visto, escuchado y comprendido.</li>
              <li>Un proceso que te ayuda a conectar con tu verdad interna sin juicio.</li>
              <li>Mayor claridad sobre tus emociones, tus límites y tus necesidades.</li>
              <li>Transformaciones que nacen desde dentro, no desde la exigencia.</li>
            </ul>
            <p>
              La Indagación Compasiva no busca forzar nada: permite que lo
              esencial emerja a su propio ritmo. Y desde ahí, comienzas a vivir
              con más coherencia, libertad y bienestar.
            </p>

            <svg
              className="logo-fl isotipo"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#D8B47A" }} />
                  <stop offset="50%" style={{ stopColor: "#D9A48F" }} />
                  <stop offset="100%" style={{ stopColor: "#B97A94" }} />
                </linearGradient>
              </defs>
              <g transform="translate(50,50) scale(2)">
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(0)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(30)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(60)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(90)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(120)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(150)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(180)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(210)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(240)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(270)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(300)"
                />
                <path
                  d="M10,0 C30,10 30,30 10,40 C-10,30 -10,10 10,0 Z"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.2"
                  transform="rotate(330)"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="features">
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                className="testimonial-slide"
                key={`${testimonial.name}-${index}`}
              >
                <div className="feature-card testimonial-card">
                  <em>{testimonial.quote}</em>
                  <p>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`carousel-dot ${currentTestimonial === index ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contacta" className="contact">
        <img src={require("./isotipo-patricia-lisbona.png")} alt="Coaching" />
        <h2>Contacta</h2>
        <p>
          Si tienes alguna pregunta o quieres saber más sobre mis servicios, no
          dudes en contactar conmigo.
        </p>
        <a href="mailto:info@patricialisbona.es">info@patricialisbona.es</a>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/coachingmindfulpatricialisbona/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/patricia.lisbonaroldan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/34654687464"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>
            Francisco Javier Lisbona Roldán.
            <br />
            &copy;{new Date().getFullYear()} <br />
            Todos los derechos reservados.
            <br />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
