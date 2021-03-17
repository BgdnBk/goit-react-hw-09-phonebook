import React from "react";

import Form from "../Form/Form";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";

function ContactsView() {
  return (
    <>
      <Title />
      <Form />
      <Filter />
      <ContactForm />
    </>
  );
}

export default ContactsView;
