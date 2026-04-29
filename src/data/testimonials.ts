/**
 * PATIENT TESTIMONIALS
 * Realistic testimonials with Rajasthani patient names
 */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  age: number;
  rating: number;
  department: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Kumar Sharma",
    location: "Chittorgarh",
    age: 58,
    rating: 5,
    department: "Cardiology",
    quote: "I had severe chest pain at midnight and my family rushed me to Sanwariya Paras. Dr. Anurag Jain and his team performed angioplasty within the golden hour. I am alive today because of their quick response. The ICU care was excellent — the nurses checked on me every hour. I tell everyone in my village about this hospital.",
  },
  {
    id: "t2",
    name: "Geeta Devi",
    location: "Nimbahera",
    age: 32,
    rating: 5,
    department: "Gynaecology",
    quote: "My pregnancy was high-risk and other hospitals were hesitant to take my case. Dr. Kavita Rathore at Sanwariya Paras gave me confidence from day one. She monitored me closely throughout and delivered my baby boy safely through C-section. The entire staff treated me like family. I am so grateful for the care I received.",
  },
  {
    id: "t3",
    name: "Bhagwan Singh Rajput",
    location: "Gangrar",
    age: 65,
    rating: 5,
    department: "Orthopaedics",
    quote: "Both my knees had severe arthritis and I could not walk without pain. Dr. Rakesh Suthar performed knee replacement surgery and within 3 months, I was walking normally again. The physiotherapy team helped me recover faster. Best part — everything was cashless under Ayushman Bharat. A true blessing for people like us.",
  },
  {
    id: "t4",
    name: "Suresh Meena",
    location: "Bari Sadri",
    age: 45,
    rating: 5,
    department: "General Surgery",
    quote: "I had gallstones for years and was scared of surgery. Dr. Priya Sharma explained the laparoscopic procedure in simple terms — just 3 small holes and I could go home in 2 days. The surgery was painless and I was back to work in a week. This is real modern medicine, available right here in Chittorgarh.",
  },
  {
    id: "t5",
    name: "Laxmi Choudhary",
    location: "Begun",
    age: 52,
    rating: 4,
    department: "Dialysis",
    quote: "I travel from Begun three times a week for dialysis. The staff here makes every session comfortable. Dr. Sunita Joshi personally monitors my kidney health and adjusts my treatment regularly. The dialysis unit is clean and well-maintained. It is hard enough to live with kidney disease — this hospital makes it a little easier.",
  },
  {
    id: "t6",
    name: "Mohan Lal Jat",
    location: "Rawatbhata",
    age: 40,
    rating: 5,
    department: "Emergency & Trauma",
    quote: "My father had a heart attack while visiting us. We called Sanwariya Paras and their ambulance arrived within 20 minutes. The emergency team started treatment immediately and shifted him to the Cath Lab. Dr. Anurag Jain saved his life that day. I have never seen such dedicated doctors. Thank you from our entire family.",
  },
];
