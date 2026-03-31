import img1 from "../assets/profile.png"
import img2 from "../assets/icon.png";
import img3 from "../assets/icon2.png";
import img4 from "../assets/icon3.png";
import img5 from "../assets/icon4.png";
export const icons = {
  dashboard: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  messages: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  jobs: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  profile:
    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  analytics: "M18 20V10 M12 20V4 M6 20v-6",
  wallet:
    "M21 12V7H5a2 2 0 0 1 0-4h14v4 M3 5v14a2 2 0 0 0 2 2h16v-5 M18 12a2 2 0 0 0 0 4h3v-4z",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
  search:
    "M11 17.25a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z M16 16l4.5 4.5",
  send: "M22 2L11 13 M22 2L15 22l-4-9-9-4 22-7z",
  plus: "M12 5v14 M5 12h14",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  bell: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0",
  check: "M20 6L9 17l-5-5",
  dblcheck: "M1.5 11.5l3.5 3.5 M5 15l3.5 3.5L18 6",
  dollar: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  calendar:
    "M3 9h18 M8 3v4 M16 3v4 M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
  arrowUp: "M12 19V5 M5 12l7-7 7 7",
  arrowRight: "M5 12h14 M12 5l7 7-7 7",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  briefcase:
    "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  mappin:
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  chevDown: "M6 9l6 6 6-6",
  filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  globe:
    "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
};

// ── Static data ───────────────────────────────────────────────────────────────
export const navItems = [
  { label: "Dashboard", icon: icons.dashboard },
  { label: "Messages", icon: icons.messages },
  { label: "Job History", icon: icons.jobs },
  { label: "My Profile", icon: icons.profile },
  { label: "Calendar", icon: icons.calendar },
  { label: "Transactions", icon: icons.wallet },
  { label: "Settings", icon: icons.settings },
  { label: "Logout", icon: icons.logout },
];

export const stats = [
  {
    label: "Active Proposals",
    value: "8",
    sub: "+2 this week",
    up: true,
    icon: icons.briefcase,
  },
  {
    label: "Profile Views",
    value: "142",
    sub: "+18 this week",
    up: true,
    icon: icons.eye,
  },
  {
    label: "Jobs Completed",
    value: "24",
    sub: "All time",
    up: null,
    icon: icons.check,
  },
  {
    label: "Total Earned",
    value: "$6.2k",
    sub: "+$840 this mo",
    up: true,
    icon: icons.dollar,
  },
];

export const recentJobs = [
  {
    id: 1,
    title: "UI/UX Designer for SaaS Dashboard",
    company: "Stripe",
    budget: "$1,200–$2,000",
    type: "Remote",
    tags: ["Figma", "React"],
    posted: "2h ago",
    match: 94,
  },
  {
    id: 2,
    title: "React Frontend Developer (3 months)",
    company: "Shopify",
    budget: "$85–$110/hr",
    type: "Contract",
    tags: ["React", "TypeScript"],
    posted: "5h ago",
    match: 88,
  },
  {
    id: 3,
    title: "Brand Identity Designer",
    company: "Notion",
    budget: "$800–$1,500",
    type: "Fixed",
    tags: ["Branding", "Figma"],
    posted: "1d ago",
    match: 76,
  },
  {
    id: 4,
    title: "Mobile App UI (iOS + Android)",
    company: "Duolingo",
    budget: "$2,500–$4,000",
    type: "Remote",
    tags: ["Figma", "Prototyping"],
    posted: "2d ago",
    match: 82,
  },
];

export const activeProposals = [
  {
    id: 1,
    title: "E-commerce Redesign",
    client: "Acme Corp",
    status: "Under Review",
    submitted: "3d ago",
    budget: "$1,800",
  },
  {
    id: 2,
    title: "Dashboard UI System",
    client: "Sarah Chen",
    status: "Shortlisted",
    submitted: "5d ago",
    budget: "$2,400",
  },
  {
    id: 3,
    title: "Mobile Onboarding Flow",
    client: "TechFlow Inc",
    status: "Pending",
    submitted: "1w ago",
    budget: "$950",
  },
];

export const convos = [
  {
    id: 1,
    name: "Marvin McKinney",
    tag: "GIG",
    time: "3:10",
    preview: "Hello, My kitchen tab are not wo...",
    unread: 1,
    audio: null,
    avatar: null,
    image: img1,
    color: null,
  },
  {
    id: 2,
    name: "Thompson",
    tag: "JOB",
    time: "2:00",
    preview: "Need to change window 1 part...",
    unread: 2,
    audio: null,
    avatar: "T",
    image: null,
    color: "#7C3AED",
  },
  {
    id: 3,
    name: "Olive",
    tag: "JOB",
    time: "12:30",
    preview: "",
    unread: 1,
    audio: "1:30",
    avatar: null,
    image: img1,
    color: null,
  },
  {
    id: 4,
    name: "Guy Hawkins",
    tag: "JOB",
    time: "11:20",
    preview: "Emergency change to electronic...",
    unread: 0,
    audio: null,
    avatar: "GH",
    image: null,
    color: "#0EA5E9",
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    tag: "JOB",
    time: "Sat",
    preview: "Hello, My kitchen tab are not wo...",
    unread: 0,
    audio: null,
    avatar: null,
    image: img1,
    color: null,
  },
  {
    id: 6,
    name: "Jenny Wilson",
    tag: "JOB",
    time: "Sat",
    preview: "",
    unread: 3,
    audio: "1:30",
    avatar: "JW",
    image: null,
    color: "#F59E0B",
  },
  {
    id: 7,
    name: "Darrell Steward",
    tag: "GIG",
    time: "Fri",
    preview: "Hello, My kitchen tab are not wo...",
    unread: 0,
    audio: null,
    avatar: null,
    image: img1,
    color: null,
  },
  {
    id: 8,
    name: "Devon Lane",
    tag: "GIG",
    time: "Wed",
    preview: "Need to change window 1 part...",
    unread: 0,
    audio: null,
    avatar: "DL",
    image: null,
    color: "#10B981",
  },
  {
    id: 9,
    name: "Savannah Nguyen",
    tag: "JOB",
    time: "Wed",
    preview: "Hello, My kitchen tab are not wo...",
    unread: 0,
    audio: null,
    avatar: "SN",
    image: null,
    color: "#EF4444",
  },
  {
    id: 10,
    name: "Bessie Cooper",
    tag: "JOB",
    time: "10:30",
    preview: "Need to change window 1 part...",
    unread: 0,
    audio: null,
    avatar: "BC",
    image: null,
    color: "#EC4899",
  },
];
export const chatmessages = {
  1: [
    {
      mine: false,
      text: "Office ipsum you must be muted. Gmail first seems tomorrow.",
      time: "12:20PM",
    },
    { mine: true, text: "Okay, I will check it out today.", time: "1:25 PM" },
    {
      mine: false,
      text: "Office ipsum you must be muted. Shoulder product expectations.",
      time: "3:20PM",
    },
  ],
  2: [
    {
      mine: false,
      text: "Need to change window 1 part urgently.",
      time: "2:00PM",
    },
  ],
  3: [
    {
      mine: false,
      text: "Can we talk about the audio issue?",
      time: "12:30PM",
    },
  ],
  4: [
    {
      mine: false,
      text: "Emergency change to electronics needed.",
      time: "11:20AM",
    },
  ],
  5: [
    {
      mine: false,
      text: "Hello, My kitchen tab are not working.",
      time: "Sat",
    },
  ],
  6: [
    {
      mine: false,
      text: "Audio issue, 1:30 long recording attached.",
      time: "Sat",
    },
  ],
  7: [
    {
      mine: false,
      text: "Hello, My kitchen tab are not working.",
      time: "Fri",
    },
  ],
  8: [{ mine: false, text: "Need to change window 1 part.", time: "Wed" }],
  9: [
    {
      mine: false,
      text: "Hello, My kitchen tab are not working.",
      time: "Wed",
    },
  ],
  10: [{ mine: false, text: "Need to change window 1 part.", time: "10:30AM" }],
};
// ── Data ────────────────────────────────────────────────────────────────────
export const jobList = [
  { title: "Financial Data Analyst", location: "Seattle, WA", type: "Remote", salary: 70 },
  { title: "Machine Learning Engineer", location: "Seattle, WA", type: "Remote", salary: 95 },
  { title: "Cybersecurity Analyst", location: "Washington, D.C.", type: "Onsite", salary: 85 },
  { title: "Marketing Data Analyst", location: "Phoenix, AZ", type: "Remote", salary: 60 },
  { title: "Database Administrator", location: "Miami, FL", type: "Onsite", salary: 78 },
  { title: "System Analyst", location: "Seattle, WA", type: "Remote", salary: 65 },
  { title: "IT Project Manager", location: "New York, NY", type: "Hybrid", salary: 90 },
  { title: "Cloud Solutions Architect", location: "San Jose, CA", type: "Onsite", salary: 100 },
  { title: "Web Developer", location: "Seattle, WA", type: "Remote", salary: 55 },
  { title: "UX Designer", location: "Seattle, WA", type: "Remote", salary: 75 },
  { title: "Full Stack Developer", location: "Austin, TX", type: "Hybrid", salary: 85 },
  { title: "Software Tester", location: "Detroit, MI", type: "Remote", salary: 50 },
  { title: "Network Engineer", location: "Orlando, FL", type: "Onsite", salary: 70 },
  { title: "Big Data Engineer", location: "Seattle, WA", type: "Remote", salary: null },
  { title: "AI Research Scientist", location: "Seattle, WA", type: "Remote", salary: 120 },
  { title: "SEO Specialist", location: "San Diego, CA", type: "Remote", salary: 55 },
  { title: "Frontend Engineer", location: "Boston, MA", type: "Hybrid", salary: 80 },
  { title: "Mobile App Developer", location: "Seattle, WA", type: "Remote", salary: 75 },
];

export const tags = [
  "Business Development Manager", "Backend Engineer", "Financial Data Analyst",
  "Machine Learning Engineer", "Cybersecurity Analyst", "Marketing Data Analyst",
  "Database Administrator", "Frontend Architect", "SEO Specialist",
  "Marketing Automation Specialist", "Software Engineer – Full Stack",
  "Enterprise Architect", "Salesforce Developer", "Cloud Consultant",
  "Senior Cloud Engineer", "DevOps Engineer", "Product Manager",
  "Data Scientist", "UX Designer", "Solutions Architect",
];

export const seekers = [
  { id: 1, title: "Smart Job Search", description: "Discover personalized job opportunities that match your skills, experience, and career goals using intelligent search.", cta: "Find Jobs" },
  { id: 2, title: "Salary Insights", description: "Explore accurate salary ranges by role, location, and experience level to make informed career decisions.", cta: "View Salaries" },
  { id: 3, title: "Company Reviews", description: "Read authentic reviews from employees to understand company culture, benefits, and work environment.", cta: "Read Reviews" },
  { id: 4, title: "Profile Builder", description: "Create a standout professional profile that highlights your skills, achievements, and experience.", cta: "Build Profile" },
  { id: 5, title: "Application Tracker", description: "Keep track of all your applications and monitor progress from submission to interview.", cta: "Track Applications" },
  { id: 6, title: "Job Alerts", description: "Get notified instantly when new roles matching your preferences become available.", cta: "Create Alert" },
  { id: 7, title: "Skill Assessments", description: "Validate your expertise with assessments and showcase verified skills to employers.", cta: "Take Assessment" },
  { id: 8, title: "Career Resources", description: "Access resume tips, interview guides, and career advice to help you land your next role.", cta: "Explore Resources" },
];

export const employer = [
  { id: 1, title: "Post Job Listings", description: "Reach thousands of qualified candidates by posting detailed and targeted job openings.", cta: "Post a Job" },
  { id: 2, title: "Candidate Matching", description: "Use AI-powered matching to find the most relevant candidates quickly and efficiently.", cta: "Find Candidates" },
  { id: 3, title: "Applicant Management", description: "Track, filter, and manage applications in one streamlined hiring dashboard.", cta: "Manage Applicants" },
  { id: 4, title: "Company Branding", description: "Showcase your company culture, benefits, and values to attract top talent.", cta: "Customize Page" },
  { id: 5, title: "Interview Scheduling", description: "Coordinate interviews seamlessly with built-in scheduling tools.", cta: "Schedule Interviews" },
  { id: 6, title: "Talent Pipeline", description: "Build and nurture a pool of potential candidates for future openings.", cta: "Build Pipeline" },
  { id: 7, title: "Hiring Analytics", description: "Gain insights into hiring performance with detailed metrics and reports.", cta: "View Analytics" },
  { id: 8, title: "Collaboration Tools", description: "Enable your hiring team to collaborate, share feedback, and make decisions faster.", cta: "Collaborate" },
];

export const popular = [
  { id: 1, title: "Operating Management", company: "Pipe", description: "You will be responsible for overseeing and optimizing various operational processes to enhance productivity, efficiency, and profitability.", location: "Nigeria", type: "Remote", salary: "$50k", icon: img2 },
  { id: 2, title: "Senior Accountant", company: "Colored", description: "You will handle various financial tasks and play a key role in financial reporting, analysis, and decision-making processes.", location: "Paris", type: "Remote", salary: "$50k", icon: img3 },
  { id: 3, title: "Motion Designer", company: "Greenly", description: "You will create engaging motion graphics and collaborate with product and marketing teams to deliver compelling visuals.", location: "Berlin", type: "Remote", salary: "$45k", icon: img4 },
  { id: 4, title: "Middle Engineer", company: "Pipe", description: "You will be responsible for building and maintaining scalable systems and improving performance across services.", location: "London", type: "Remote", salary: "$55k", icon: img5 },
];