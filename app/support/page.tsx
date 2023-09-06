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
import FAQ from "@/components/FAQ";

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

        <div className={styles.support}>
          <div className={styles.section}>
            <h2>Frequently Asked Question</h2>
            <div className={styles.questions}>
              <FAQ />
            </div>
          </div>
          <div className={styles.section}>
            <h2>Need More Help?</h2>
            <div className={styles.buttons}>
              <BiSolidHelpCircle
                onClick={handleOpenWidget}
                className={styles.icons}
                size='7em'
              />

              <Link href={""}>
                <IoLogoWhatsapp className={styles.icons} size='7em' />
              </Link>

              <Link href={"mailto:support@kalarric.freshdesk.com"}>
                <AiFillMail className={styles.icons} size='7em' />
              </Link>

              <Link
                target='_blank'
                href={"https://kalarric.freshdesk.com/support/home"}
              >
                <RiCustomerService2Fill className={styles.icons} size='7em' />
              </Link>
            </div>
          </div>
          <div className={styles.description}>
            At Kalarric Lifestyle, we&#39;re committed to providing exceptional
            customer service and assistance whenever you need it. Our support
            executives are available round the clock to answer all your queries
            and ensure your experience with our products is seamless and
            enjoyable.
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default SupportPage;
