import { TimeLineItemProps } from '@components/types/TimeLineProps';
import { CgWebsite } from 'react-icons/cg';
import { FaComputer } from 'react-icons/fa6';
import { MdWork } from 'react-icons/md';
export const WorkData = [
  {
    title: 'Team Lead at Pratishthan Software Ventures Pvt. Ltd.',
    icon: <FaComputer />,
    description:
      'Led a team of developers in delivering payment systems, including SEPA (EBRT1, EBSDD, EBSCT), BOOK, QCBRTP, UAERTP, and NACH, from design through deployment.',
    fromTime: 'April 2024',
    toTime: 'Present',
    isLatest: true,
  },
  {
    title:
      'Senior Software Engineer at Pratishthan Software Ventures Pvt. Ltd.',
    icon: <FaComputer />,
    description:
      'Involved in creating and implementing the NACH payment system, the SEPA payment system, and the development and integration of ACH products.',
    fromTime: 'April 2023',
    toTime: 'April 2024',
  },
  {
    title: 'Software Engineer at Pratishthan Software Ventures Pvt. Ltd.',
    icon: <FaComputer />,
    description:
      'Worked and Developed Finacle OE Payments backend system ( HKFPS ) - Helped in the development and integration of the Foreign Exchange feature enablement for Payments - Was involved with Performance tuning for Payments - Add Bulk DB insert in Transaction Handler, outbound, and inbound microservice',
    fromTime: 'August 2021',
    toTime: 'April 2023',
  },
  {
    title: 'Freelance Technical Writer at LambdaTest · Freelance',
    icon: <MdWork />,
    description:
      'Wrote articles on LambdaTest blog on topics related to testing, automation, and cross-browser testing.',
    fromTime: 'May 2021',
    toTime: 'August 2022',
    sourceLink: 'https://www.lambdatest.com/blog/author/vinayaksharma/',
    sourceText: 'View Articles',
    sourceLinkIcon: <CgWebsite />,
  },
  {
    title: 'Subject Matter Expert at Chegg Inc. · Part-time',
    icon: <MdWork />,
    description:
      'Worked as a Subject Matter Expert for the subject of Computer Science and Information Technology. Helped students with their assignments and projects.',
    fromTime: 'May 2021',
    toTime: 'August 2022',
  },
  {
    title: 'Python Developer at Metaorigin Labs · Internship',
    icon: <FaComputer />,
    description:
      'Worked on web scrapper to the collection and scraping of vessel Data - Build a flask based full stack website for converting music audio subtitle generator - Build an ELT pipeline using singer.io and airflow',
    fromTime: 'April 2021',
    toTime: 'August 2021',
  },
  {
    title: 'Web Application Developer at S3 Infosoft · Internship',
    icon: <FaComputer />,
    description:
      'S3 Infosoft is a tech consulting firm that delivers reliable and quality tested solutions to its clients. - Worked on digital asset management (s3-dam) - Used Django/python for backend, mayan edms and django-photologue - Used docker, git and travis-ci to test',
    fromTime: 'February 2020',
    toTime: 'May 2020',
  },
  {
    title: 'Full Stack Engineer at Ercess Live · Internship',
    icon: <FaComputer />,
    description:
      'Worked with the frontend team to build features on the website. - Added PayU Payments Service - Added tests for existing features',
    fromTime: 'July 2019',
    toTime: 'September 2019',
  },
] as any[];
