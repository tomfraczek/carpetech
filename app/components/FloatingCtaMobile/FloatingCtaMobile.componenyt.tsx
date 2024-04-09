"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { CtaContainer } from "./FloatingCtaMobile.styles";

import email from "@/public/images/mobileCta/email.png";
import telephone from "@/public/images/mobileCta/telephone.png";
import whatsapp from "@/public/images/mobileCta/whatsapp.png";
import Link from "next/link";

export const FloatingCtaMobile = () => {
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 1000; // Adjust this value to your desired trigger point
      setShowIcon(scrollPosition >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <CtaContainer $show={showIcon}>
      <Link href={"tel:01184115960"}>
        <Image src={telephone} alt="email-icon" width={64} />
      </Link>
      <Link href={"tel:07849495757"}>
        <Image src={whatsapp} alt="email-icon" width={64} />
      </Link>
      <Link href={"mailto:info@carpetech.com"}>
        <Image src={email} alt="email-icon" width={64} />
      </Link>
    </CtaContainer>
  );
};
