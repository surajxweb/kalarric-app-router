"use client";

import styles from "./JoinTribe.module.css";
import { useForm, ValidationError } from "@formspree/react";

const JoinTribe = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xbjvoqkl");

  if (state.succeeded) {
    return <p className={styles.success}>Thank you for subscribing!</p>;
  }
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Join the Kalarric Tribe today and unlock a world of exclusive updates,
        trendsetting drops, and sizzling hot offers delivered right to your
        inbox.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}></label>
        <input
          id="email"
          type="email"
          name="email"
          className={styles.emailInput}
          placeholder="enter email id"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={styles.validationError}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submitButton}
        >
          Subscribe
        </button>
        <ValidationError
          errors={state.errors}
          className={styles.validationError}
        />
      </form>
    </div>
  );
};

export default JoinTribe;
