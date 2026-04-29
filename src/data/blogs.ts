/**
 * BLOG POSTS DATA
 * Realistic medical blog content relevant to the hospital's specialities
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  authorId: string;
  date: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "10-early-signs-you-should-see-a-cardiologist",
    title: "10 Early Signs You Should See a Cardiologist",
    excerpt: "Heart disease doesn't always announce itself with a heart attack. Learn about the subtle warning signs that indicate it's time to get your heart checked.",
    content: `Heart disease is the leading cause of death in India, yet many people ignore early warning signs until it's too late. At Sanwariya Paras Hospital, we believe that early detection saves lives. Here are 10 signs you shouldn't ignore:

**1. Chest Pain or Discomfort**
The most well-known symptom. It may feel like pressure, squeezing, fullness, or pain in the center of your chest. It can last for a few minutes or come and go.

**2. Shortness of Breath**
If climbing one flight of stairs leaves you breathless, or you wake up at night gasping for air, your heart may not be pumping efficiently.

**3. Unusual Fatigue**
Feeling extremely tired doing activities that used to be easy — like walking to the market or doing household chores — can signal heart problems.

**4. Swelling in Legs, Ankles, or Feet**
When the heart can't pump blood effectively, fluid builds up in your lower body. This swelling (called edema) is a common sign of heart failure.

**5. Rapid or Irregular Heartbeat**
Occasional heart flutter is normal, but if your heart frequently races, pounds, or skips beats, it needs medical evaluation.

**6. Dizziness or Lightheadedness**
Feeling faint or dizzy can mean your heart isn't supplying enough blood to your brain. This is especially concerning if it happens during physical activity.

**7. Pain in the Jaw, Neck, or Upper Back**
Heart-related pain doesn't always stay in the chest. It can radiate to the jaw, neck, shoulders, arms, or upper back — especially in women.

**8. Excessive Sweating**
Breaking into a cold sweat for no apparent reason, especially with other symptoms, can be a warning sign of a heart attack.

**9. Persistent Cough**
A cough that won't go away and produces white or pink mucus could indicate that the heart is leaking blood back into the lungs.

**10. Family History of Heart Disease**
If your parents or siblings had heart disease before age 55 (men) or 65 (women), you are at higher risk and should get regular screenings.

**What to Do?**
If you experience any of these signs, don't wait. At Sanwariya Paras Hospital, we offer comprehensive cardiac evaluation including ECG, 2D Echo, TMT, Holter monitoring, and angiography. Our Cath Lab — the only one in Chittorgarh — can handle both diagnosis and treatment in one visit.

Call us at 88548-10500 to book a cardiac check-up today.`,
    category: "Heart & Cardiology",
    categorySlug: "heart-cardiology",
    author: "Dr. Anurag Jain",
    authorId: "dr-anurag-jain",
    date: "2025-03-15",
    readTime: 6,
    featured: true,
  },
  {
    id: "b2",
    slug: "understanding-joint-pain-causes-treatment-and-prevention",
    title: "Understanding Joint Pain: Causes, Treatment, and Prevention",
    excerpt: "Joint pain affects millions of Indians. Learn when home remedies are enough and when you need to see an orthopaedic specialist.",
    content: `Joint pain is one of the most common health complaints we see at Sanwariya Paras Hospital. From young adults with sports injuries to elderly patients with arthritis, joint problems can significantly reduce quality of life. Let's understand this condition better.

**Common Causes of Joint Pain**

1. **Osteoarthritis** — The most common type, caused by "wear and tear" of cartilage. Common in knees, hips, and hands, especially after age 50.
2. **Rheumatoid Arthritis** — An autoimmune condition where your body attacks its own joints. Can affect any age.
3. **Injuries** — Fractures, sprains, ligament tears from accidents or sports.
4. **Overuse** — Repetitive movements (like sitting cross-legged for long hours) can damage joints over time.
5. **Gout** — Caused by uric acid crystals building up in joints, often affecting the big toe.

**When to See a Doctor**
- Pain persists for more than 2 weeks despite rest
- Joint is swollen, red, or warm to touch
- You can't put weight on the affected joint
- Morning stiffness lasts more than 30 minutes
- Pain wakes you up at night

**Treatment Options**
- **Conservative**: Medications, physiotherapy, lifestyle changes, weight management
- **Injections**: PRP therapy, hyaluronic acid, corticosteroid injections
- **Surgery**: Arthroscopy (keyhole surgery), partial or total joint replacement

At Sanwariya Paras Hospital, our orthopaedic team led by Dr. Rakesh Suthar always tries conservative treatment first. Surgery is recommended only when other options have been exhausted.

**Prevention Tips**
- Maintain a healthy weight (every kg of excess weight puts 4x pressure on your knees)
- Stay active with low-impact exercises like swimming and cycling
- Wear proper footwear
- Include calcium and Vitamin D in your diet
- Avoid sitting on the floor or cross-legged for extended periods`,
    category: "Orthopaedics",
    categorySlug: "orthopaedics",
    author: "Dr. Rakesh Suthar",
    authorId: "dr-rakesh-suthar",
    date: "2025-03-08",
    readTime: 5,
    featured: false,
  },
  {
    id: "b3",
    slug: "cashless-treatment-under-ayushman-bharat-how-it-works",
    title: "Cashless Treatment Under Ayushman Bharat — How It Works",
    excerpt: "Confused about how Ayushman Bharat works? Here's a simple guide to getting free treatment at Sanwariya Paras Hospital.",
    content: `Many of our patients from Chittorgarh and nearby districts are eligible for free, cashless treatment under the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PMJAY). Yet, many don't know how to use this benefit. Here's a simple guide:

**What is Ayushman Bharat?**
Ayushman Bharat is the Indian government's flagship health insurance scheme that provides coverage of up to ₹5 lakh per family per year for secondary and tertiary hospitalization. Think of it like free health insurance for eligible families.

**Who is Eligible?**
- Families identified in the Socio-Economic Caste Census (SECC) 2011
- You can check eligibility at mera.pmjay.gov.in or by calling 14555
- Both BPL and some APL families may be eligible

**How to Get Treatment at Sanwariya Paras Hospital**

Step 1: **Check Eligibility** — Visit our help desk or call 88548-10500. We'll check your eligibility on the spot using your Aadhaar card and ration card.

Step 2: **Get Your Golden Card** — If eligible, we help you create your Ayushman Bharat Golden Card at the hospital itself. It takes about 30 minutes.

Step 3: **Get Treated** — Show your Golden Card at admission. All eligible treatments are completely cashless — you pay ₹0.

**What Treatments are Covered?**
- Heart surgeries (Angioplasty, Pacemaker)
- Knee and hip replacement
- Caesarean delivery
- ICU care
- Dialysis
- Most surgical procedures
- And 1,500+ other procedures

**What About RGHS?**
Sanwariya Paras Hospital is also empaneled under RGHS (Rajasthan Government Health Scheme). If you are a Rajasthan state government employee, pensioner, or their dependent, you can avail cashless treatment under RGHS.

**Important Tips**
- Always carry your Aadhaar card and ration card
- Pre-authorization is needed for planned surgeries (we handle this for you)
- Emergency treatment starts immediately — paperwork is done later
- There is NO need to pay anything upfront for covered treatments

For any questions about Ayushman Bharat or RGHS at our hospital, call our helpline: 88548-10500.`,
    category: "Hospital News",
    categorySlug: "hospital-news",
    author: "Dr. Anurag Jain",
    authorId: "dr-anurag-jain",
    date: "2025-02-20",
    readTime: 5,
    featured: false,
  },
  {
    id: "b4",
    slug: "golden-hour-in-cardiac-emergencies",
    title: "Golden Hour in Cardiac Emergencies — Why Every Minute Matters",
    excerpt: "In a heart attack, the first 60 minutes determine everything. Learn why the 'golden hour' is so critical and what to do.",
    content: `In cardiology, we often say: "Time is muscle." During a heart attack, every minute of delay means more heart muscle dies. The first 60 minutes after symptom onset — called the "Golden Hour" — can literally mean the difference between life and death.

**What Happens During a Heart Attack?**
A heart attack occurs when a blood clot blocks an artery supplying blood to the heart. The heart muscle begins to die within minutes. The longer the blockage remains, the more damage occurs — and some of it is permanent.

**Why the Golden Hour Matters**
- Treatment within 1 hour: 90%+ heart muscle can be saved
- Treatment within 3 hours: 50-70% can be saved
- Treatment after 6 hours: Significant permanent damage
- Treatment after 12 hours: Most damage is irreversible

**Recognize the Signs**
- Crushing chest pain (like an elephant sitting on your chest)
- Pain radiating to left arm, jaw, or back
- Shortness of breath
- Cold sweat, nausea, dizziness
- Feeling of impending doom

**What To Do — The First 10 Minutes**
1. **Call for help immediately** — Call 88548-10500 (Sanwariya Paras Emergency)
2. **Chew an aspirin** — If available, chew (don't swallow) a 325mg aspirin tablet
3. **Don't drive yourself** — Have someone else drive or call an ambulance
4. **Don't wait and watch** — Many patients lose critical time "hoping it will pass"

**How Sanwariya Paras Handles Cardiac Emergencies**
At our hospital, cardiac emergencies get priority access to:
- Immediate ECG within 5 minutes of arrival
- Emergency blood tests (Troponin, cardiac enzymes)
- Direct transfer to Cath Lab if needed
- Angiography and angioplasty within the golden hour
- Post-procedure CCU monitoring

Our Cath Lab operates 24/7 for cardiac emergencies. Dr. Anurag Jain and the cardiology team are always on standby.

**Remember:** A heart attack is not a death sentence — it's a medical emergency. If you act fast and reach the right hospital, most heart attacks are treatable. Save our emergency number: 88548-10500.`,
    category: "Heart & Cardiology",
    categorySlug: "heart-cardiology",
    author: "Dr. Anurag Jain",
    authorId: "dr-anurag-jain",
    date: "2025-02-10",
    readTime: 7,
    featured: false,
  },
  {
    id: "b5",
    slug: "pregnancy-care-tips-for-a-healthy-mother-and-baby",
    title: "Pregnancy Care Tips for a Healthy Mother and Baby",
    excerpt: "A practical guide for expecting mothers — from diet and exercise to warning signs and when to visit the hospital.",
    content: `Pregnancy is one of the most beautiful journeys in a woman's life, but it also requires careful attention to health. At Sanwariya Paras Hospital, Dr. Kavita Rathore and our gynaecology team have compiled these essential tips for expecting mothers.

**First Trimester (Months 1-3)**
- Start taking folic acid supplements immediately (prevents birth defects)
- Avoid raw or undercooked food
- Rest more — fatigue is normal in early pregnancy
- Stay hydrated — drink at least 8-10 glasses of water daily
- Visit your doctor as soon as you know you're pregnant

**Second Trimester (Months 4-6)**
- Get an anomaly scan (ultrasound at 18-20 weeks)
- Start gentle exercises — walking is the best option
- Eat iron-rich foods (spinach, dates, jaggery) to prevent anaemia
- Monitor weight gain — healthy gain is about 1-2 kg per month
- Get a dental check-up — pregnancy hormones can affect gums

**Third Trimester (Months 7-9)**
- Count your baby's kicks daily (at least 10 movements in 2 hours)
- Prepare your hospital bag by week 36
- Know the signs of labour: regular contractions, water breaking, bloody show
- Sleep on your left side for better blood flow to the baby
- Attend antenatal classes if available

**Warning Signs — Visit Hospital Immediately**
- Heavy bleeding at any stage
- Severe headache with vision changes
- Sudden swelling of face and hands
- Reduced or no baby movements
- High fever (above 101°F)
- Severe abdominal pain
- Leaking fluid before 37 weeks

**At Sanwariya Paras Hospital**
Our gynaecology department offers:
- Complete antenatal care packages
- Regular ultrasound monitoring
- High-risk pregnancy management
- Both normal and caesarean delivery
- Neonatal care for newborns
- Postnatal follow-up

Book your antenatal appointment: 88548-10500

Every pregnancy is unique. Regular check-ups with your doctor are the best way to ensure a healthy mother and a healthy baby.`,
    category: "Women's Health",
    categorySlug: "womens-health",
    author: "Dr. Kavita Rathore",
    authorId: "dr-kavita-rathore",
    date: "2025-01-25",
    readTime: 6,
    featured: false,
  },
];

export const blogCategories = [
  { name: "All", slug: "all" },
  { name: "Heart & Cardiology", slug: "heart-cardiology" },
  { name: "Orthopaedics", slug: "orthopaedics" },
  { name: "Women's Health", slug: "womens-health" },
  { name: "Hospital News", slug: "hospital-news" },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}
