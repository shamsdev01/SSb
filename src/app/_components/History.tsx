"use client";

import { motion } from "framer-motion";

const educationData = {
  birth: {
    title: "BIRTH:",
    content: "Hon. Setonji Sunday Balogun was born into the family of Pa Hunge Azathogbede Balogun of Posikoh Quarters Ajara Agamathen community/town in today's political Ward E in Badagry Local Government (Central) part of Lagos state."
  },
  education: {
    title: "EDUCATION:",
    content: "He had his education and obtained his academic qualifications in the following Schools/Institutions:",
    schools: [
      "1. Local Authority Primary School, Ajara Badagry- First School Leaving Certificate (FSLC)",
      "2. Community Commercial High School, Maun, (Egbado South) Ipokia, Ogun State - West African School Certificate (WASC)",
      "3. National Teachers' Institute Kaduna- Nigeria Certificate in Education (NCE)",
      "4. Ekiti State University (EKSU), Ado-Ekiti- Bachelor of Education (B.Ed)"
    ],
   
  },
  trainings: {
    title: "PROFESSIONAL DEVELOPMENT:",
    content: "Attended many courses and training workshops which include:",
    workshops: [
      "Seminar on \"the Methodology and Strategic Ways of Wealth Creation at the Local Government level in Nigeria\" By Academy of Management Studies, University of East London, United Kingdom.",
      "Training Workshop for Secretaries in NASU on \"Improving Operational Processes at Branch Level: Veritable Means for Organisational Goal Attainment\" By Resource Development Centre.",
      "National Workshop on \"Effective Retirement Planning and Information Technology Computational Administration\" by The Institute of Chartered Accountants of Nigeria, Ibadan and District Society.",
      "Training Workshop on \"Interpreting the Guidelines and Provisions of the New Contributory Pension Scheme (Pension Act 2004) for its successful implementation\" By Kenme Consultant Limited",
      "Training Workshop on \"Pension Scheme Administration and Actuarial Valuation Techniques\" By New Dawn Consult Ltd. (Management Consultants).",
      "Training Course on \"Pension Desk Officers-Implementing the Contributory Pension Act 2004 in Corporate Pension Administration\" By the National Association of Consultants.",
      "Pension Conference on \"Management of Pension in the New Dispensation\" By: Premier Consult Limited",
      "Training Workshop on \"Effective Pension Funds Administration and an Examination of the Newly Established Contributory Pension Scheme (Pension Reform Act 2004) By Economic Trainers.",
      "National Seminar on \"The Constitutional Provisions on Next-of-kin viz-viz administration of Rights, Entitlements, Pension and Personal Estates of One who Dies Intestate\" By Nigerian Bar Association (Jos Branch)",
    ]
  },
  career: {
    title: "PROFESSIONAL CAREER AND WORK EXPERIENCE:",
    content: "Worked as a Federal Civil Servant at the Administrative Staff College of Nigeria (ASCON) P.M.B.1004, Topo, Badagry and voluntarily retired from the service in 2007, after fifteen years of dedicated service. Position and Responsibilities while in service include",
    roles: [
      "Secretary, Non-Academic Staff Union of Educational and Associated Institutions (NASU), ASCON Branch.",
      "Member, ASCON Pension Board of Trustees (APBOT).",
    ]
  },
  political: {
    title: "POLITICAL TRAJECTORY AND APPOINTMENTS:",
    roles: [
      "Action Congress (AC) Constituency II Lagos State House of Assembly Candidate 2007",
      "Two terms Secretary to the Local Government (SLG) in Badagry Local Government (Central) - 2008 to 2014",
      "Director General, Babatunde Hunpe Campaign Organization - 2018 to 2019 ",
      "Chief of Staff to Honourable Member, House of Representatives (MHR) Badagry Federal Constituency, Hon. Babatunde Hunpe- 2019 to 2023"
    ]
  },
  social: {
    title: "SOCIO-POLITICAL ENGAGEMENT:",
    roles: [
      "President, Ajara Homeniwe Club (AHOMEC)",
      "General Secretary, Ajara Agamathen Youth Association, Ajara Badagry",
      "Secretary, Ajara Youth Forum, Ajara Badagry.",
      "Secretary, Ajara Mautin Club (AMAC), Ajara-Badagry",
      "Member, defunct Unity Party of Nigeria (UPN)",
      "Publicity and Organizing Secretary, Defunct National Republican Convention (NRC) Wand J, Ajara Badagry",
      "Member of the defunct Grassroot Democratic Movement (GDM)",
      "Former Member of Peoples Democratic Party (PDP) Chairman of LGA Congress/Electoral Committee, and Secretary for several Screening Committees at the Ward levels",
      "Leader, Lagos Friends Group at both LGA and Ward levels.",
      "Lagos State House of Assembly candidate of Action Congress (AC) Badagry Constituency II for 2007 General Elections.",
      "Member, The mandate Group Badagry Local Government ",
      "Member, Defunct Action Congress of Nigeria (ACN)",
      "Member All Progressives Congress (APC) - till date. ",
    ],
  }
}
  

export default function History() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4CAF50]">
          THE PATHWAY TO A GREATER BADAGRY
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#2E7D32] mt-2">
          HON. SETONJI SUNDAY BALOGUN (SSB) AT A GLANCE
        </h3>
        <div className="w-32 h-1 bg-[#4CAF50] mx-auto mt-4" />
      </motion.div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto">
        {/* Birth Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.birth.title}</h3>
          <p className="text-gray-700 leading-relaxed">{educationData.birth.content}</p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.education.title}</h3>
          <p className="text-gray-700 mb-4">{educationData.education.content}</p>
          <ul className="space-y-3">
            {educationData.education.schools.map((school, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(index) * 0.1 }}
                className="text-gray-700 leading-relaxed"
              >
                {school}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Professional Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.trainings.title}</h3>
          <p className="text-gray-700 mb-4">{educationData.trainings.content}</p>
          <ul className="space-y-4">
            {educationData.trainings.workshops.map((workshop, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(index) * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-2 w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 leading-relaxed">{workshop}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* ? */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.career.title}</h3>
          <p className="text-gray-700 mb-4">{educationData.career.content}</p>
          <ul className="space-y-4">
            {educationData.career.roles.map((role, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(index) * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-2 w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 leading-relaxed">{role}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/*  */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.political.title}</h3>
          {/* <p className="text-gray-700 mb-4">{educationData.career.content}</p> */}
          <ul className="space-y-4">
            {educationData.political.roles.map((role, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(index) * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-2 w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 leading-relaxed">{role}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/*  */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-[#2E7D32] mb-4">{educationData.social.title}</h3>
          {/* <p className="text-gray-700 mb-4">{educationData.trainings.content}</p> */}
          <ul className="space-y-4">
            {educationData.social.roles.map((role, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Number(index) * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-2 w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 leading-relaxed">{role}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
