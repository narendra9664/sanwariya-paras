/**
 * CASE STUDIES DATA
 * Real-world medical cases handled at the hospital (anonymized)
 */

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  patientInfo: string;
  department: string;
  departmentSlug: string;
  outcome: string;
  readTime: number;
  challenge: string;
  approach: string;
  treatment: string;
  result: string;
  patientQuote: string | null;
  doctorId: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    slug: "acute-heart-attack-golden-hour-rescue",
    title: "Acute Heart Attack — Golden Hour Cath Lab Rescue",
    patientInfo: "Mr. R.K., 58, Chittorgarh",
    department: "Cardiology",
    departmentSlug: "cardiology",
    outcome: "Full Recovery",
    readTime: 4,
    challenge: "A 58-year-old man presented to the emergency department at 2:30 AM with crushing chest pain, profuse sweating, and difficulty breathing. ECG confirmed an acute ST-elevation myocardial infarction (STEMI) — a severe heart attack where a major coronary artery is completely blocked. Every minute of delay risked permanent heart muscle damage.",
    approach: "Our emergency team immediately activated the cardiac catheterization protocol. The patient was stabilized with oxygen, antiplatelet medications, and pain management within 10 minutes of arrival. Dr. Anurag Jain was alerted and the Cath Lab was prepared simultaneously. The patient was transferred to the Cath Lab within 25 minutes of arrival — well within the critical golden hour window.",
    treatment: "Coronary angiography revealed a 100% blockage in the Left Anterior Descending (LAD) artery — often called the 'widow-maker' because of its high fatality rate. Dr. Anurag Jain performed primary angioplasty and placed a drug-eluting stent to restore blood flow. The entire procedure took 45 minutes. The blocked artery was successfully opened, and blood flow to the heart was restored.",
    result: "The patient showed immediate improvement with relief from chest pain and stabilization of vital signs. He was monitored in the CCU for 3 days and discharged on day 5 with prescribed medications and a cardiac rehabilitation plan. At his 3-month follow-up, his heart function had returned to near-normal levels. He is now living an active life with regular cardiac monitoring.",
    patientQuote: "When they told me it was a major heart attack, I thought my life was over. But the speed at which everyone moved — from the ambulance to the Cath Lab — gave me a second chance. Dr. Anurag Jain and his team are my family's heroes.",
    doctorId: "dr-anurag-jain",
  },
  {
    id: "cs2",
    slug: "bilateral-knee-replacement-under-ayushman",
    title: "Bilateral Knee Replacement Under Ayushman Bharat",
    patientInfo: "Mrs. S.D., 65, Gangrar",
    department: "Orthopaedics",
    departmentSlug: "orthopaedics",
    outcome: "Full Recovery",
    readTime: 4,
    challenge: "A 65-year-old woman from a village near Gangrar had been suffering from severe bilateral knee osteoarthritis for over 8 years. She could not walk without support, struggled with daily activities, and had been living on painkillers. Her family had limited financial resources and believed they could never afford joint replacement surgery.",
    approach: "When she visited Sanwariya Paras Hospital, our team evaluated her condition and confirmed she needed bilateral total knee replacement. We immediately checked her eligibility for Ayushman Bharat PMJAY and confirmed she qualified for completely cashless treatment. Pre-surgical evaluation included cardiac clearance, blood work, and thorough assessment to ensure she was fit for surgery.",
    treatment: "Dr. Rakesh Suthar performed bilateral total knee replacement surgery in a single session under spinal anesthesia. The procedure was conducted in our modular operation theatre with infection-free environment. Post-operatively, the patient was started on physiotherapy within 24 hours. She began assisted walking on day 2 and independent walking with a walker on day 4.",
    result: "The patient was discharged on day 7 with a structured physiotherapy plan. At her 6-week follow-up, she was walking independently without any support. The entire treatment — surgery, implants, hospital stay, medications, and physiotherapy — was completely cashless under Ayushman Bharat. The family paid ₹0. At 3 months, she reported zero knee pain and had returned to her normal household activities.",
    patientQuote: "I had accepted that I would spend the rest of my life in a chair. My daughter found out about Ayushman Bharat at this hospital and everything changed. Now I can walk to the temple on my own. I didn't pay a single rupee.",
    doctorId: "dr-rakesh-suthar",
  },
  {
    id: "cs3",
    slug: "high-risk-pregnancy-safe-delivery",
    title: "High-Risk Pregnancy — Safe Delivery Against the Odds",
    patientInfo: "Mrs. P.M., 30, Nimbahera",
    department: "Gynaecology",
    departmentSlug: "gynaecology",
    outcome: "Mother & Baby Safe",
    readTime: 4,
    challenge: "A 30-year-old first-time mother was referred to Sanwariya Paras at 32 weeks of pregnancy with severe pre-eclampsia — a dangerous condition involving very high blood pressure that can threaten both the mother's and baby's life. She had already been turned away by two smaller facilities. Her blood pressure was 170/110, she had significant protein in her urine, and showed early signs of organ stress.",
    approach: "Dr. Kavita Rathore immediately admitted the patient to our high-dependency unit. A multidisciplinary approach was adopted — the gynaecology team managed the obstetric aspects, while the critical care team managed blood pressure and organ monitoring. The goal was to control blood pressure and extend the pregnancy as long as safely possible to allow the baby's lungs to mature, while being ready for emergency delivery at any moment.",
    treatment: "The patient was managed with intravenous antihypertensive medications, magnesium sulfate for seizure prevention, and corticosteroid injections to accelerate fetal lung maturity. After careful monitoring for 5 days and stable maternal condition, Dr. Kavita Rathore performed a planned caesarean section at 33 weeks. The baby, though premature, was born with a healthy cry and weighed 1.8 kg.",
    result: "Both mother and baby were closely monitored — the mother in the recovery ward and the baby under neonatal observation for warmth and feeding support. The mother's blood pressure gradually normalized over 2 weeks post-delivery. The baby reached 2.5 kg within 3 weeks with kangaroo mother care and guided feeding. Both were discharged healthy. At 6-month follow-up, the baby was meeting all developmental milestones normally.",
    patientQuote: "Two hospitals said they couldn't handle my case. Dr. Kavita Rathore and her team not only took us in but gave us the best care I could imagine. My son is healthy and growing beautifully. I will always be grateful to this hospital.",
    doctorId: "dr-kavita-rathore",
  },
  {
    id: "cs4",
    slug: "ckd-patient-dialysis-quality-of-life",
    title: "Living with Kidney Disease — Restoring Quality of Life",
    patientInfo: "Mr. L.C., 52, Begun",
    department: "Dialysis",
    departmentSlug: "dialysis",
    outcome: "Stable & Ongoing Care",
    readTime: 3,
    challenge: "A 52-year-old farmer from Begun was diagnosed with end-stage chronic kidney disease (CKD Stage 5). Both his kidneys had stopped functioning adequately, and he needed regular hemodialysis to survive. The nearest dialysis facility was over 60 km away, making thrice-weekly sessions extremely difficult. His family was worried about both the logistics and the cost.",
    approach: "When Sanwariya Paras Hospital established its dialysis unit, Mr. L.C. was among the first patients enrolled. Dr. Sunita Joshi evaluated his overall health, created an AV fistula for dialysis access, and designed a personalized dialysis protocol. The team also arranged his Ayushman Bharat coverage to make the treatment affordable.",
    treatment: "The patient now receives hemodialysis three times a week at our facility. Each session is 4 hours long and is monitored by trained dialysis technicians under Dr. Sunita Joshi's supervision. His treatment plan includes strict dietary management (low potassium, controlled fluid intake), regular blood work monitoring, and medication adjustment. The team also counseled his family on home care between sessions.",
    result: "After 6 months of regular dialysis, Mr. L.C.'s hemoglobin improved from 7 to 10 g/dL, his fluid overload resolved, and his energy levels significantly improved. He was able to resume light farming activities. His family reported a dramatic improvement in his quality of life. He continues regular dialysis with stable health parameters and is being evaluated for potential kidney transplant referral.",
    patientQuote: "Before this hospital, I had to travel to Udaipur for every dialysis session. Now I get treated right here in Chittorgarh. The team knows me by name. They make a difficult journey a little easier.",
    doctorId: "dr-sunita-joshi",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
