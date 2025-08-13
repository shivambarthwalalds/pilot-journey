import { BiCalendar, BiFlag, BiHeart, BiShield } from "react-icons/bi";
import {
  FaClipboardCheck,
  FaFileAlt,
  FaGraduationCap,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa6";
import { BsCalendar2Week } from "react-icons/bs";
import { FaGlobeAsia, FaUserMd } from "react-icons/fa";

import {
  FaGlobe,
  FaPenFancy,
  FaComments,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { section } from "framer-motion/client";

export interface SelectionStep {
  icon: any;
  title: string;
  description: string | string[];
}
export interface SelectionProcessData {
  title: string;
  overview: string;
  steps: SelectionStep[];
}
export const cadetRequirements: Record<string, any[]> = {
  "air-india": [
    {
      icon: BiFlag,
      title: "Nationality",
      description:
        "Applicants must be Indian citizens or hold Overseas Citizenship of India (OCI).",
    },
    {
      icon: FaGraduationCap,
      title: "Educational Qualification",
      description:
        "Candidates must have completed 10+2 with a minimum of 60% marks overall and individually in English, Physics, and Mathematics. Certificates from the National Institute of Open Schooling (NIOS) are also accepted.",
    },
    {
      icon: BiHeart,
      title: "Health Requirements",
      description:
        "Candidates should be in sound physical and mental health, capable of handling the demands of flight training.",
    },
    {
      icon: FiMessageCircle,
      title: "Language Proficiency",
      description:
        "A strong command over both spoken and written English is essential.",
    },
    {
      icon: BiCalendar,
      title: "Age Criteria",
      description:
        "Applicants must be between 18 and 30 years of age at the time of applying.",
    },
    {
      icon: BiShield,
      title: "Medical Fitness",
      description:
        "Before commencing flight training, candidates must successfully pass the DGCA Class 1 Medical Examination as per aviation standards.",
    },
  ],

  indigo: [
    {
      icon: FaGlobeAsia,
      title: "Nationality",
      description: "Must be of Indian nationality or an OCI cardholder.",
    },
    {
      icon: BsCalendar2Week,
      title: "Age Limit",
      description:
        "Aged between 18 to 32 years. The candidate must not be more than 32 years old on the day of application.",
    },
    {
      icon: FaUserGraduate,
      title: "Educational Qualification",
      description:
        "Achieved a minimum score of 51% in each subject—Physics, Mathematics, and English—in 10+2, or graduated with Physics and Maths or Engineering with an aggregate of 51% or more.",
    },
    {
      icon: FaUserMd,
      title: "Medical Fitness",
      description:
        "Must be capable of holding a valid Indian Class 1 Medical Certificate with no limitations and be in good physical condition.",
    },
  ],
};

export const selectionProcess: Record<string, SelectionProcessData> = {
  "air-india": {
    title: "Air India Cadet Pilot Program Selection Process",
    overview: "The selection spreads over 4 phases as listed below",
    steps: [
      {
        icon: FaGlobe,
        title: "Application & Initial Screening",
        description: [
          "Fulfill the basic eligibility criteria",
          "Submit your application through the online portal",
          "Academic record verification and confirmation of minimum required scores",
        ],
      },
      {
        icon: FaPenFancy,
        title: "Pilot Aptitude Assessment",
        description: [
          "Focus and concentration",
          "Numerical reasoning and calculations",
          "Spatial awareness",
          "Memory recall",
          "Hand-eye coordination",
          "Logical decision-making",
        ],
      },
      {
        icon: FaComments,
        title: "Group Discussion Round",
        description: [
          "Team interaction skills",
          "Logical and analytical reasoning",
          "Ability to work in collaboration",
          "Confidence and communication that sets you apart",
        ],
      },
      {
        icon: FaChalkboardTeacher,
        title: "Personal Interview",
        description: [
          "General understanding of aviation",
          "Basic aerodynamics and flight principles",
          "Awareness of recent developments in the aviation sector",
          "Passion and motivation for flying as a profession",
        ],
      },
    ],
  },
  indigo: {
    title: "IndiGo Cadet Pilot Program – Step-by-Step Selection Process",
    overview:
      "The selection process for the IndiGo Cadet Pilot Program consists of four distinct phases, each designed to assess a candidate's suitability for a successful aviation career.",
    steps: [
      {
        icon: FaClipboardCheck,
        title: "Application Screening",
        description:
          "After applying, your profile is reviewed by the Flight Training Organisation (FTO) based on IndiGo’s set standards for education, medical fitness, and personality traits.",
      },
      {
        icon: FaFileAlt,
        title: "Written Test & Aptitude Assessment",
        description:
          "Candidates are tested on language skills, numerical reasoning, hand-eye coordination, multitasking, spatial awareness, and problem-solving.",
      },
      {
        icon: FaUsers,
        title: "Group Discussion",
        description:
          "Shortlisted candidates participate in a group discussion on a specific topic, observed by IndiGo’s panel to assess communication, teamwork, and leadership qualities.",
      },
      {
        icon: FaUserTie,
        title: "Personal Interview",
        description:
          "The final stage includes a personal or panel interview with IndiGo representatives to evaluate motivation, aviation awareness, and overall suitability for the program.",
      },
    ],
  },
};

export const indigo = {
  slug: "indigo",
  company: "Indigo",
  logoTagline: "Indigo Cadet Pilot Program",
  hero: {
    logo: "indigo",
    headline: "Indigo Cadet Pilot Program",
    image: "/cadetprogrampage/indigo.jpg",
    description:
      "Cadet pilot programmes have been a craze ever since they started. The aspiring pilots of India got their first taste of the cadet pilot programme when Indigo launched the tailor-made Indigo Cadet Pilot Programme way back in 2012. From that time till now, the Indigo Pilot Cadet Programme has just expanded its stature owing to its superb track record and have placed over 150 graduates in the right- hand seat of their Airbus A320, making it the most sought after Cadet Pilot Programme in India among student pilots, for completing their Commercial Pilot Training. Let us cover the Minimum requirements, selection process and brief outline of the programme",
  },

  Stages: {
    program: "IndiGo Cadet Pilot Program",
    disclaimer:
      "The above pieces of information are provided to the best of our knowledge and are for general reference only. IndiGo reserves the full right to change the selection procedure and the overall course outline at their sole discretion. Please keep an eye on IndiGo’s career page for more information.",
    item: [
      {
        stage: "Stage 1",
        title: "Initial Screening & Suitability Check",
        description:
          "IndiGo has partnered with seven reputed ab-initio Flight Training Organisations (FTOs) to conduct the initial round of selection. These FTOs are handpicked based on their long-standing expertise in shaping aspiring pilots. In this first stage, applicants are assessed based on academic qualifications, overall personality traits, and medical fitness. Only those who meet the specific benchmarks set by both IndiGo and the respective FTO are shortlisted to proceed to the next step: written and aptitude testing.",
      },
      {
        stage: "Stage 2",
        title: "Written Test & Pilot Aptitude Assessment",
        description:
          "This phase begins with a written examination based on 10+2 level subjects—Physics, Mathematics, and English. The test consists of 90 multiple-choice questions (30 per subject) and is designed to measure a candidate’s conceptual clarity, problem-solving skills, and critical thinking. The test duration is 2 hours, with questions increasing in difficulty as the test progresses. There is no negative marking, and results are usually announced within 30 minutes. Once successful in the written exam, candidates move on to the Pilot Aptitude Test. This computer-based psychomotor test evaluates multitasking abilities, hand-eye coordination, and cognitive load management.",
        sections: [
          {
            subtitle: "Pilot Aptitude Test",
            description:
              "The pilot aptitude test is a psychomotor-based evaluation where your multitasking and hand-eye coordination skills are tested. The name for the test may vary (e.g., PILAPT or CASS). The test involves managing a primary task while handling one or more secondary tasks under time pressure.",
            example:
              "You may need to control a simulated aircraft with a joystick (primary task) while simultaneously performing math calculations, typing displayed numbers, or responding to auditory instructions (secondary tasks).",
            tip: "You will get 2 to 3 minutes for a practice run before the test — use this time wisely to understand the mechanics of the test.",
          },
          {
            subtitle: "How to Prepare for the Pilot Aptitude Test",
            description:
              "It is not advisable to prepare for this test, as it is designed to measure your natural aptitude for piloting. Practicing may lead to biased results and can negatively affect your overall pilot training experience.",
          },
          {
            subtitle: "Psychometric Questionnaire",
            description:
              "Candidates who clear the aptitude test are then given a Personality Assessment Screener (Psychometric Questionnaire) consisting of 50 questions to be completed in one hour. This stage evaluates your personality fit for the aviation industry based on IndiGo’s culture.",
            testType: "YES/NO based Personality Questions",
            tip: "Be honest and stay calm while answering. There's no right or wrong answer, but the system can detect inconsistencies. Authentic responses help ensure the best outcome.",
          },
        ],
      },
      {
        stage: "Stage 3",
        title: "Group Discussion (GD)",
        description:
          "Candidates clearing Stage 2 are invited within 2–3 weeks to participate in Stage 3 and Stage 4, usually scheduled on the same day. In the Group Discussion round, shortlisted applicants are grouped and presented with a specific topic to discuss in the presence of the IndiGo selection panel. This round assesses your communication, listening skills, logical reasoning, teamwork, and composure. Follow-up questions from the panel may be asked to assess depth of understanding. Successful candidates are informed immediately and move on to the final stage.",
      },
      {
        stage: "Stage 4",
        title: "Personal Interview",
        description:
          "This is the final round, conducted by IndiGo’s Flight Operations and HR representatives, often including senior captains. The interview is mostly non-technical and focuses on understanding your motivation, life experiences, and alignment with IndiGo’s values. It typically lasts between 20–30 minutes. Expect questions like 'Why do you want to be a pilot?', 'Why this cadet program?', and 'Where do you see yourself in five years?'",
        sections: [
          {
            subtitle: "Once Selected for the IndiGo Cadet Pilot Programme",
            description:
              "Once selected, you're invited with your parents to an official induction session. This session outlines the course structure, fees, timelines, and all processes involved from training to license conversion. It marks the beginning of your pilot journey with detailed briefings on every upcoming stage.",
          },
          {
            subtitle: "Pre Process – Flight Training – Post Process",
            description:
              "You’ll first go through Pre-Process training including ground school and DGCA exam preparation. Then you head to the partner flight school abroad for actual flight training. After successfully completing your required flight hours and checks, you return to India to begin your DGCA license conversion process. On successful completion, your Commercial Pilot License (CPL) will be issued.",
          },
          {
            subtitle: "Airbus A320 Type Rating",
            description:
              "Once your CPL is issued, you proceed to IndiGo's designated training center for Type Rating on the Airbus A320. This training typically lasts 45–60 days and involves simulator training and classroom learning. After certification, you officially join IndiGo as a Second Officer or Junior First Officer — marking the beginning of your career as an airline pilot with attractive perks and compensation.",
          },
        ],
      },
    ],
  },
  postProcess: {
    title: "Post-Selection: What Happens Next?",
    stages: [
      {
        title: "Induction Ceremony",
        description:
          "Once selected, you’ll be invited with your parents for a formal induction session conducted by IndiGo. This event covers your training roadmap, curriculum breakdown, timelines, fee structure, and a clear overview of each phase in the program.",
      },
      {
        title: "Pre-Process: DGCA Ground School",
        description:
          "You’ll begin with classroom sessions focused on preparing for your DGCA theory papers. Ground classes will cover core aviation subjects in depth, building your knowledge base before flying begins.",
      },
      {
        title: "Flight Training Phase",
        description:
          "Next, you’ll head to IndiGo’s partnered flight training academy—either in India or abroad—where you’ll take to the skies. Here, you’ll learn the practical aspects of flying, accumulate flight hours, pass in-air checks, and build confidence as a professional aviator.",
      },
      {
        title: "Post-Process: License Conversion",
        description:
          "Upon completion of training, candidates return to India with a foreign Commercial Pilot License (CPL). You'll now go through the DGCA license conversion process, which includes:",
        item: [
          "DGCA theory exams (if not already cleared)",
          "Simulator checks and flying assessments",
          "Document submission for Indian CPL issuance",
        ],
      },
    ],
  },
  additional: {
    title: "A320 Type Rating & Joining IndiGo",
    description:
      "With your DGCA CPL in hand, you'll be enrolled into Type Rating training for the Airbus A320, the aircraft you’ll fly as a part of IndiGo’s fleet. Training typically lasts 45–60 days, including simulator sessions, technical systems training, and procedures handling. This training is conducted at facilities approved jointly by IndiGo and your FTO. After successfully completing Type Rating, you officially join IndiGo as a Second Officer or Junior First Officer which marks the start of your career as an airline pilot, with full pay, benefits, and opportunities for rapid growth.",
  },
  disclaimer:
    "The information above is based on current knowledge and is for general reference only. IndiGo reserves the right to modify the selection procedure or course structure at its discretion. Please check IndiGo’s official career page for the most recent updates.",
};

export const airIndia = {
  slug: "air-india",
  company: "Air India",
  logoTagline: "Air India Cadet Pilot Program",
  hero: {
    logo: "air-india",
    headline: "Air India Cadet Pilot Program",
    image: "/cadetprogrampage/air-india.jpg",
    description:
      "Embark on your Aviation journey to the skies with the Air India Cadet Pilot Programme.",
  },
  Stages: {
    program: "Air India Cadet Pilot Program",
    disclaimer:
      "This information is provided for general reference. Air India reserves the right to modify the selection process at its discretion. Candidates should check the official career page regularly for updates.",
    item: [
      {
        stage: "Stage 1",
        title: "Application & Eligibility Screening",
        description:
          "The process starts with applicants confirming that they fulfill the basic eligibility standards including age, education, and subject-specific performance. Once eligible, candidates complete the online application by submitting detailed academic records and any relevant professional history. Submitted documents, especially mark sheets, are carefully reviewed to ensure that minimum qualification percentages are met.",
      },
      {
        stage: "Stage 2",
        title: "Pilot Aptitude Assessment",
        description:
          "In the second stage, candidates undergo a comprehensive Pilot Aptitude Assessment designed to evaluate the core mental and cognitive abilities necessary for becoming a pilot. This assessment includes various modules that test a candidate’s concentration, numerical reasoning, spatial awareness, memory retention, dexterity, and logical thinking. Each element of the test simulates the kinds of decision-making and multitasking scenarios a pilot may encounter in real flight conditions. The aim is to measure how efficiently and accurately a candidate processes information and responds under time constraints, the qualities that are essential for flight safety and cockpit management.",
      },
      {
        stage: "Stage 3",
        title: "Group Discussion",
        description:
          "The third stage involves a Group Discussion session, where candidates are assessed on their interpersonal, communication, and leadership abilities within a team environment. This stage focuses on evaluating how individuals interact in group dynamics, particularly how they express ideas, collaborate with others, and offer logical solutions during structured discussions. Participants are expected to demonstrate critical thinking, active listening, and the confidence to stand out positively in a group setting. These traits reflect real-world cockpit situations where teamwork, clarity, and calm decision-making are key.",
      },
      {
        stage: "Stage 4",
        title: "Personal Interview",
        description:
          "The final stage of the selection process is the Personal Interview, which offers a one-on-one evaluation of the candidate’s overall readiness for a career in aviation. Interviewers will assess the candidate’s foundational knowledge of aviation, for example, basic flight principles, terminology, and aircraft systems as well as awareness of current industry trends and developments. The panel will also look for personal qualities like enthusiasm for flying, commitment to professional growth, and an attitude of responsibility. A strong performance in this round shows not only technical aptitude but also a genuine passion for aviation and a mindset suited to the challenges of the aviation industry.",
      },
    ],
  },
  postProcess: {
    title:
      "Your Path to become a Pilot starts with Air India Cadet Pilot Program",
    stages: [
      {
        title: "Orientation & Onboarding",
        description:
          "The journey begins with a structured onboarding process designed to familiarize cadets with all aspects of their upcoming training. During this phase, cadets are introduced to the program’s curriculum, timelines, and expectations. They receive important documentation such as training agreements, code of conduct policies, and essential guidelines to ensure discipline, safety, and accountability throughout the course. This orientation helps cadets feel fully prepared and aligned as they step into their aviation career path.",
      },
      {
        title: "DGCA Ground School & Examinations",
        description:
          "Over a period of 4 months, cadets undergo intensive Ground Classes led by our expert trainers at PilotsPathway. The focus is on building a strong foundation in theoretical aviation subjects, including Air Navigation, Air Regulations, and Meteorology, the three core subjects required for DGCA licensing. Additionally, cadets must also clear the RTR (Radio Telephony Restricted) exam conducted by WPC, India. Once all written and oral exams are successfully passed, cadets are approved to move forward to the practical flight training phase.",
      },
      {
        title: "Flight Training Phase",
        description:
          "In this crucial stage, cadets head to partnered flight schools where they begin hands-on flight training. This includes accumulating the required flying hours through practical lessons, simulator sessions, oral briefings, and skill-based evaluations. During this time, cadets learn various in-air procedures, flight techniques, and emergency handling. All these are aimed at preparing them to qualify for their Commercial Pilot License (CPL). This stage shapes their skills, discipline, and decision-making as future pilots.",
      },
      {
        title: "License Conversion in India",
        description:
          "After successfully completing their flight training abroad, cadets return to India to complete the license conversion process. At approved Indian flight training facilities, cadets fulfill the specific DGCA requirements for converting their foreign license into an Indian CPL. This includes additional flying hours, checks, and assessments to ensure they meet all regulatory standards under Indian aviation laws. This step validates their readiness to fly commercially within Indian airspace.",
      },
      {
        title: "Type Rating Training",
        description:
          "Next, cadets progress to the Type Rating stage, where they receive aircraft-specific training particularly on the Airbus A320. This training includes detailed classroom instruction, high-fidelity simulator sessions, and system-based learning to develop the skills needed to operate this aircraft model. Upon successful completion, cadets are certified to fly the A320 in commercial operations. This is a key requirement before joining the airline’s active flight roster.",
      },
      {
        title: "Final Induction into Air India",
        description:
          "Congratulations! After completing all phases of the program, cadets go through final evaluation interviews with the Air India selection panel. Once cleared, they are officially inducted into the airline and begin their professional journey as First Officers. This marks the beginning of a rewarding and dynamic career in commercial aviation with India’s national carrier.",
      },
    ],
  },
  disclaimer:
    "The information above is based on current knowledge and is for general reference only. Air India reserves the right to modify the selection procedure or course structure at its discretion. Please check Air India's official career page for the most recent updates.",
};
