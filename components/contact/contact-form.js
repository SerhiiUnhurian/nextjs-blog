import { useState, useEffect } from 'react';

import cls from './contact-form.module.css';
import Notification from '../ui/notification';

const ContactForm = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSendMessage = e => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;
    const reqBody = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) return response.json();

        return response.json().then(error => {
          throw new Error(error.message);
        });
      })
      .then(data => {
        setNotification({
          title: 'Success!',
          message: data.message,
          status: 'success',
        });

        name.value = '';
        email.value = '';
        message.value = '';
      })
      .catch(error => {
        setNotification({
          title: 'Error!',
          message: error.message,
          status: 'error',
        });
      });
  };

  return (
    <section className={cls.contact}>
      <h1>How can I help you?</h1>
      <form className={cls.form} onSubmit={handleSendMessage}>
        <div className={cls.controls}>
          <div className={cls.control}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required></input>
          </div>
          <div className={cls.control}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required></input>
          </div>
        </div>
        <div className={cls.control}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className={cls.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
};

export default ContactForm;
