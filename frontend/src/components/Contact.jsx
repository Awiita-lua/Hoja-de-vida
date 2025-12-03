// src/components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_contacto',  // Service ID
        'template_kmcjz79',  // Template ID
        form.current,
        'D2I2lTDpyh61c8cWI'            // User ID (no tu nombre!)
      )
      .then(() => {
        alert('✅ ¡Mensaje enviado! Gracias por contactarme.');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('❌ No se pudo enviar el mensaje. Inténtalo de nuevo.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" name="name" placeholder="Nombre Completo" required />
            <input type="email" name="email" placeholder="Correo" required />
          </div>
          <div className="input-box">
            <input type="tel" name="phone" placeholder="Número de Teléfono" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea name="message" placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit" className="btn">Enviar mensaje</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;