/**
 * DOCTORS DATA
 * Complete profiles for all hospital doctors.
 * Dr. Anurag Jain is real data from the hospital.
 * Others are realistic but generated for demo purposes.
 */

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  designation: string;
  qualifications: string;
  department: string;
  departmentSlug: string;
  experience: number;
  languages: string[];
  availableDays: string[];
  availableTime: string;
  bio: string;
  featured: boolean;
  imageUrl: string | null;
}

export const doctors: Doctor[] = [
  {
    id: "dr-anurag-jain",
    slug: "dr-anurag-jain",
    name: "Dr. Anurag Jain",
    title: "Dr.",
    designation: "Senior Interventional Cardiologist & Director",
    qualifications: "MBBS, MD (Medicine), DM Cardiology (CMC Vellore)",
    department: "Cardiology",
    departmentSlug: "cardiology",
    experience: 15,
    languages: ["English", "Hindi", "Rajasthani"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    availableTime: "9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    bio: "Dr. Anurag Jain is a distinguished interventional cardiologist and the visionary behind Sanwariya Paras Hospital. Trained at the prestigious Christian Medical College (CMC), Vellore — one of India's top medical institutions — he brings world-class cardiac expertise to Chittorgarh. He specializes in coronary angiography, angioplasty, pacemaker implantation, and complex cardiac interventions. Under his leadership, the hospital established the region's only Cath Lab, making advanced cardiac care accessible without patients having to travel to distant cities. He believes in ethical, transparent medicine and treats every patient like family.",
    featured: true,
    imageUrl: null,
  },
  {
    id: "dr-arjun-singh",
    slug: "dr-arjun-singh",
    name: "Dr. Arjun Singh",
    title: "Dr.",
    designation: "Senior Consultant — Medicine & Critical Care",
    qualifications: "MBBS, MD (Internal Medicine)",
    department: "Medicine & Critical Care",
    departmentSlug: "critical-care",
    experience: 12,
    languages: ["English", "Hindi", "Rajasthani"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    availableTime: "9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    bio: "Dr. Arjun Singh is an experienced physician specializing in internal medicine and critical care. With over 12 years of experience managing complex ICU cases, he oversees the hospital's 15-bed ICU and CCU unit. His expertise includes management of sepsis, multi-organ failure, ventilator care, and post-surgical critical care. He is known for his calm demeanor during emergencies and his dedication to evidence-based treatment protocols.",
    featured: true,
    imageUrl: null,
  },
  {
    id: "dr-kavita-rathore",
    slug: "dr-kavita-rathore",
    name: "Dr. Kavita Rathore",
    title: "Dr.",
    designation: "Senior Consultant — Obstetrics & Gynaecology",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
    department: "Gynaecology & Obstetrics",
    departmentSlug: "gynaecology",
    experience: 14,
    languages: ["English", "Hindi", "Rajasthani"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    availableTime: "9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    bio: "Dr. Kavita Rathore is a highly skilled obstetrician and gynaecologist with over 14 years of clinical experience. She specializes in high-risk pregnancies, laparoscopic gynaecological surgeries, and infertility management. She has conducted thousands of deliveries and is particularly dedicated to promoting safe motherhood practices in the Chittorgarh region. Her compassionate approach has made her a trusted name among women seeking prenatal and postnatal care.",
    featured: true,
    imageUrl: null,
  },
  {
    id: "dr-rakesh-suthar",
    slug: "dr-rakesh-suthar",
    name: "Dr. Rakesh Suthar",
    title: "Dr.",
    designation: "Consultant — Orthopaedics & Joint Replacement",
    qualifications: "MBBS, MS (Orthopaedics), Fellowship in Joint Replacement",
    department: "Orthopaedics",
    departmentSlug: "orthopaedics",
    experience: 10,
    languages: ["English", "Hindi", "Rajasthani"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    availableTime: "9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    bio: "Dr. Rakesh Suthar is an orthopaedic surgeon specializing in joint replacement, arthroscopy, and fracture management. With a fellowship in joint replacement surgery, he has performed over 500 knee and hip replacement surgeries. He is skilled in minimally invasive techniques that ensure faster recovery and less post-operative pain. He treats conditions ranging from sports injuries to degenerative joint diseases, always prioritizing conservative management before surgery.",
    featured: false,
    imageUrl: null,
  },
  {
    id: "dr-priya-sharma",
    slug: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    title: "Dr.",
    designation: "Consultant — Laparoscopic & General Surgery",
    qualifications: "MBBS, MS (General Surgery), FMAS (Laparoscopy)",
    department: "General Surgery",
    departmentSlug: "surgery",
    experience: 11,
    languages: ["English", "Hindi"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    availableTime: "9:00 AM – 2:00 PM",
    bio: "Dr. Priya Sharma is an accomplished general surgeon with specialized training in minimally invasive laparoscopic surgery. She performs cholecystectomy, appendectomy, hernia repair, and other abdominal surgeries using advanced laparoscopic techniques that result in smaller incisions, less pain, and quicker recovery. Her surgical precision and patient-first approach have earned her the trust of hundreds of families in the Chittorgarh district.",
    featured: false,
    imageUrl: null,
  },
  {
    id: "dr-vikram-meena",
    slug: "dr-vikram-meena",
    name: "Dr. Vikram Meena",
    title: "Dr.",
    designation: "Consultant — Emergency & Trauma",
    qualifications: "MBBS, MD (Emergency Medicine)",
    department: "Emergency & Trauma",
    departmentSlug: "emergency",
    experience: 8,
    languages: ["English", "Hindi", "Rajasthani"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    availableTime: "24/7 Emergency Duty",
    bio: "Dr. Vikram Meena heads the emergency and trauma department and is available round the clock for medical emergencies. With 8 years of experience in emergency medicine, he is trained in advanced cardiac life support (ACLS), trauma resuscitation, and golden-hour management. His quick decision-making and expertise in stabilizing critically injured patients have saved numerous lives. He coordinates closely with all departments to ensure seamless emergency care.",
    featured: false,
    imageUrl: null,
  },
  {
    id: "dr-sunita-joshi",
    slug: "dr-sunita-joshi",
    name: "Dr. Sunita Joshi",
    title: "Dr.",
    designation: "Consultant — Dialysis & Nephrology",
    qualifications: "MBBS, MD (Medicine), DM Nephrology",
    department: "Dialysis",
    departmentSlug: "dialysis",
    experience: 9,
    languages: ["English", "Hindi"],
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    availableTime: "9:00 AM – 2:00 PM",
    bio: "Dr. Sunita Joshi oversees the dialysis unit and nephrology services at the hospital. With a DM in Nephrology, she manages patients with chronic kidney disease, acute kidney injury, and those requiring regular hemodialysis. She provides comprehensive kidney care from early CKD management to dialysis initiation and transplant counseling. Her holistic approach includes diet counseling, medication management, and regular monitoring to improve patients' quality of life.",
    featured: false,
    imageUrl: null,
  },
  {
    id: "dr-manoj-patel",
    slug: "dr-manoj-patel",
    name: "Dr. Manoj Patel",
    title: "Dr.",
    designation: "Consultant — Diagnostics & Imaging",
    qualifications: "MBBS, MD (Radiology)",
    department: "Diagnostics & Imaging",
    departmentSlug: "diagnostics",
    experience: 7,
    languages: ["English", "Hindi", "Gujarati"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    availableTime: "8:00 AM – 6:00 PM",
    bio: "Dr. Manoj Patel is a radiologist who manages the hospital's diagnostic imaging department. He specializes in interpreting X-rays, ultrasound, 2D echocardiography, and other imaging modalities. His accurate diagnostic reports help other departments make informed treatment decisions. He ensures all imaging equipment is calibrated and maintained to provide the highest quality results, enabling early detection of diseases and precise surgical planning.",
    featured: false,
    imageUrl: null,
  },
];

export function getDoctorsByDepartment(departmentSlug: string): Doctor[] {
  return doctors.filter((d) => d.departmentSlug === departmentSlug);
}

export function getFeaturedDoctors(): Doctor[] {
  return doctors.filter((d) => d.featured);
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
