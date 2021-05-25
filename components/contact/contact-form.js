import cls from './contact-form.module.css';

const ContactForm = () => {
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
        alert(data.message);
        name.value = '';
        email.value = '';
        message.value = '';
      })
      .catch(error => {
        alert(error.message);
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
    </section>
  );
};

export default ContactForm;
