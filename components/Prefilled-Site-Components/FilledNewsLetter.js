import React, { useEffect, useState } from "react";
import { NewsletterSignUp, UseNewsletterSignUpFlow } from "@washingtonpost/site-components/core/newsletter-signup";


export default function FilledNewsLetter() {
  return (
    <NewsletterSignUp
      aria-label=""
      body="We have journalists across the globe reporting important updates. All stories linked in the newsletter are free to access."
      buttonColor="offblack"
      className="w-100"
      discoverMoreLink="https://subscribe.washingtonpost.com/newsletters/"
      headline="Follow the outbreak with Coronavirus updates"
      imageAlt=""
      imageHeight={110}
      imageUrl="https://www.washingtonpost.com/wp-stat/emails/page/bundles/health.jpg"
      imageWidth={166}
      newsletter="Daily"
      onEmailAddressChange={function noRefCheck() {}}
      promoLabel="Daily"
      state="sign-up"
    />
  );
}
