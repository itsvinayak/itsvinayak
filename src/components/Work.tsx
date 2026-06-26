import Heading from '@ui/Heading';
import Link from 'next/link';
import TextTag from '@ui/TextTag';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Heading heading='Current Endeavors: Navigating the Software Development Horizon' />
      <p className="mt-4 pb-4 text-lg text-zinc-800 dark:text-zinc-300">
        At <TextTag text="Pratishthan Software Ventures Pvt. Ltd" logo="" />, I
        currently work as a <strong>Team Lead</strong>, leading a team of developers
        while designing and building enterprise payment solutions. I have contributed
        to the development of payment systems including <strong>NACH</strong>,
        <strong> SEPA</strong> (EBRT1, EBSDD, EBSCT), <strong>BOOK</strong>,
        <strong> QCBRTP</strong>, and <strong>UAERTP</strong>, as well as ACH payment
        products.

        <br />
        <br />

        I played a key role in developing the <strong>Finacle OE Payments</strong>
        backend for the Hong Kong Faster Payment System (HKFPS) and implemented the
        Foreign Exchange module for Payments. I also optimized system performance by
        introducing bulk database inserts, improving transaction processing across
        Transaction Handler, inbound, and outbound microservices.

        <br />
        <br />

        My expertise includes backend engineering, distributed systems, payment
        processing, microservices, REST APIs, RabbitMQ, Node.js, Redis, MongoDB,
        Docker, Git, performance optimization, and scalable FinTech solutions.
      </p>
      <Link
        href='/work'
        className='my-2 w-full rounded-md bg-gray-300 p-2	text-center text-gray-900 md:w-1/2 dark:bg-[#262626] dark:text-gray-100 hover:dark:bg-gray-800'
      >
        Reveal Full History
        <FaArrowRight className='mx-4 inline-block animate-[backAndForward_5s_ease-in-out_infinite]	' />
      </Link>
    </>
  );
};

export default About;
