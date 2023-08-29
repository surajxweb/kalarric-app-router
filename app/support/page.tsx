"use client";
import React from "react";
import Offers from "@/components/Offers";
import Script from "next/script";
import styles from "./Support.module.css";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillMail } from "react-icons/ai";
import Image from "next/image";
import helpImage from "@/resources/help.svg";

const SupportPage = () => {

  const handleOpenWidget = () => {
    if (typeof window.FreshworksWidget === "function") {
      window.FreshworksWidget("open");
    }
  };

  return (
    <>
      <Script id='freshdesk-widget-config'>
        {`
          window.fwSettings = {
            'widget_id': 1070000000499, // Your widget ID
          };
          !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}();
        `}
      </Script>
      <Script
        type='text/javascript'
        src='https://ind-widget.freshworks.com/widgets/1070000000499.js'
        async
        defer
      />
      <Offers />
      <div className={styles.container}>
        <div className={styles.titleBox}>
        <Image src={helpImage} height={250} width={250} alt='help header' />
        <h1 className={styles.title}>
          Welcome to Kalarric Support. How may we assist you today?
        </h1>
        </div>

        <div className={styles.info}>
          <p>
            Whether you have questions about our products, need assistance with
            an order, or want to share feedback, our dedicated support team is
            here to help. We understand that your time is valuable, which is why
            we&#39;re committed to resolving your inquiries promptly and
            effectively.
          </p>
          <h2>How to reach us?</h2>
          <p>
            We&#39;ve made it easier than ever for you to connect with our
            dedicated support team and access the help you need. We understand
            that every customer is unique, and that&#39;s why we offer a variety
            of ways for you to reach out and receive assistance.
          </p>
          <h3 onClick={handleOpenWidget}>1. Website Support</h3>
          <p>
            Our website is your one-stop destination for all your inquiries.
            Simply click on the Question Mark below or the Help Button on the
            bottom right corner of your desktop screen to get started.
          </p>
          <BiSolidHelpCircle
            onClick={handleOpenWidget}
            className={styles.icons}
            size='3em'
          />
          <Link href={""}>
          <h3>2. WhatsApp Support</h3></Link>
          <p>
            We&#39;re bringing support to your fingertips! Connect with us
            through WhatsApp. Whether you&#39;re on the go or prefer a quick
            chat, our WhatsApp support is designed to make assistance accessible
            wherever you are.
          </p>
          <Link href={""}>
            <IoLogoWhatsapp className={styles.icons} size='3em' />
          </Link>
          <p>Note: This is not a calling number.</p>
          <h3>3. Email Support</h3>
          <p>
            For a more personalized touch, you can always email us directly at {" "}
            <Link
              target='_blank'
              href={"https://kalarric.freshdesk.com/support/home"}
            ><span style={{color: "red"}} >support@kalarric.freshdesk.com</span></Link>. Our support
            executives are standing by to respond to your emails and address
            your concerns, ensuring you get the help you need.
          </p>
          <Link href={"mailto:support@kalarric.freshdesk.com"}>
            <AiFillMail className={styles.icons} size='3em' />
          </Link>
          <Link
              target='_blank'
              href={"https://kalarric.freshdesk.com/support/home"}
            >
          <h3>4. FreshDesk Portal</h3></Link>
          <p>
            Our Freshdesk portal is designed to streamline your support
            experience. Easily raise tickets, track their status, and engage in
            a comprehensive conversation with our support team, all in one
            place.
          </p>
          <p>
            Just visit{" "}
            <Link
              target='_blank'
              href={"https://kalarric.freshdesk.com/support/home"}
            >
              <span style={{color: "red"}} >www.kalarric.freshdesk.com</span>
            </Link>{" "}
            and get started.
          </p>
          <Link target='_blank'
              href={"https://kalarric.freshdesk.com/support/home"}>
            <RiCustomerService2Fill className={styles.icons} size='3em' />
          </Link>
        </div>
        <p className={styles.description}>
          At Kalarric Lifestyle, we&#39;re committed to providing exceptional
          customer service and assistance whenever you need it. Our support
          executives are available round the clock to answer all your queries
          and ensure your experience with our products is seamless and
          enjoyable.
        </p>
      </div>
    </>
  );
};

export default SupportPage;
