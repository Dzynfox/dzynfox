"use client";

import dynamic from "next/dynamic"

const ReactConfetti = dynamic(() => import('react-confetti'), {ssr: false})

const Confetti = () => {
  return <ReactConfetti />;
}

export default Confetti