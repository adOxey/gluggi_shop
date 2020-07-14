import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  const { Container } = classes;

  return (
    <div className={Container}>
      <aside>
        <h4>Any questions?</h4>
        <p>Our service team is here for you:</p>
        <p>
          Tel: <strong>+21542574212452</strong>
        </p>
        <p>(Monday - Friday, 9am - 6pm)</p>
        <h4>info@placeholder.com</h4>
      </aside>
    </div>
  );
}

export default Footer;
