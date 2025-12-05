import { Department, FacultyMember, NewsItem, Facility, GalleryItem, StudentApplication } from "./types";

export const COLLEGE_NAME = "FG Science Degree College for Men";
export const COLLEGE_LOCATION = "Wah Cantt, Pakistan";

export const NAVIGATION_ITEMS = [
  { label: 'Home', page: 'HOME' },
  { label: 'About', page: 'ABOUT' },
  { label: 'Departments', page: 'DEPARTMENTS' },
  { label: 'Admissions', page: 'ADMISSIONS' },
  { label: 'Gallery', page: 'GALLERY' },
  { label: 'Contact', page: 'CONTACT' },
];

export const HERO_IMAGES = [
  "https://picsum.photos/seed/college_front_gate/1920/1080",
  "https://picsum.photos/seed/students_graduating/1920/1080",
  "https://picsum.photos/seed/chemistry_lab_modern/1920/1080",
  "https://picsum.photos/seed/sports_complex_cricket/1920/1080"
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: '1',
    title: 'Merit List 2025 Displayed',
    date: 'May 12, 2025',
    description: 'The 2nd merit list for F.Sc Pre-Medical has been displayed on the notice board and admin portal.'
  },
  {
    id: '2',
    title: 'FBISE Result Announcement',
    date: 'May 10, 2025',
    description: 'FGSDC secures top 3 positions in the Federal Board HSSC-II examinations.'
  },
  {
    id: '3',
    title: 'Sports Gala Registration',
    date: 'May 05, 2025',
    description: 'Registration for Inter-collegiate Cricket and Football teams is now open.'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    name: "Computer Science",
    head: "Prof. Dr. Ahmed Khan",
    description: "Equipped with 3 advanced computer labs featuring Core i7 systems. Offers ICS and BSCS programs focusing on Python, C++, and Web Technologies.",
    image: "https://picsum.photos/seed/computerscience/800/600"
  },
  {
    name: "Physics",
    head: "Prof. Sarah Malik",
    description: "Home to the region's largest physics laboratory. Research focus on Mechanics, Electromagnetism, and Modern Physics.",
    image: "https://picsum.photos/seed/physics_lab/800/600"
  },
  {
    name: "Chemistry",
    head: "Dr. Usman Ali",
    description: "Specialized labs for Organic, Inorganic, and Physical Chemistry. Safety-first environment for practical experimentation.",
    image: "https://picsum.photos/seed/chemistry_beaker/800/600"
  },
  {
    name: "Biology",
    head: "Prof. Tanveer Ahmed",
    description: "Comprehensive Zoology and Botany museums and labs. Preparing future doctors for MDCAT and medical excellence.",
    image: "https://picsum.photos/seed/biology_microscope/800/600"
  },
  {
    name: "Mathematics",
    head: "Prof. Bilal Ahmed",
    description: "The backbone of science. Focusing on Calculus, Algebra, and Statistics for Engineering and CS students.",
    image: "https://picsum.photos/seed/math_chalkboard/800/600"
  },
  {
    name: "English",
    head: "Prof. Michael John",
    description: "Developing communication skills and literary appreciation. Essential for professional grooming.",
    image: "https://picsum.photos/seed/library_books/800/600"
  },
  {
    name: "Urdu & Islamiyat",
    head: "Dr. Hafiz Rizwan",
    description: "Connecting students with their cultural heritage, language, and ethical values.",
    image: "https://picsum.photos/seed/islamic_arch/800/600"
  },
  {
    name: "Pakistan Studies",
    head: "Prof. Kamran Shah",
    description: "In-depth study of the history, geography, and socio-political environment of Pakistan.",
    image: "https://picsum.photos/seed/history_map/800/600"
  }
];

export const FACILITIES: Facility[] = [
  {
    title: "Digital Library",
    description: "Access to 50,000+ books and HEC digital journals.",
    iconName: "BookOpen"
  },
  {
    title: "Science Labs",
    description: "Separate, fully equipped labs for Physics, Chemistry, and Biology.",
    iconName: "FlaskConical"
  },
  {
    title: "Sports Complex",
    description: "Cricket ground, Basketball court, and indoor gymnasium.",
    iconName: "Trophy"
  },
  {
    title: "Transport",
    description: "Dedicated bus fleet covering Wah Cantt, Taxila, and Hassan Abdal.",
    iconName: "Bus"
  },
  {
    title: "Hostel",
    description: "On-campus accommodation for students from far-flung areas.",
    iconName: "Home"
  },
  {
    title: "Masjid",
    description: "Spacious central mosque for daily prayers and Jummah.",
    iconName: "Moon"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', category: 'Campus', caption: 'Main Academic Block', src: 'https://picsum.photos/seed/building1/600/400' },
  { id: '2', category: 'Events', caption: 'Annual Prize Distribution', src: 'https://picsum.photos/seed/event1/600/800' },
  { id: '3', category: 'Sports', caption: 'Cricket Team 2023', src: 'https://picsum.photos/seed/sports1/600/400' },
  { id: '4', category: 'Labs', caption: 'Physics Practical', src: 'https://picsum.photos/seed/lab1/600/400' },
  { id: '5', category: 'Campus', caption: 'Library Reading Hall', src: 'https://picsum.photos/seed/library1/600/400' },
  { id: '6', category: 'Events', caption: 'Independence Day', src: 'https://picsum.photos/seed/flag/600/800' },
];

export const MOCK_APPLICATIONS: StudentApplication[] = [
  { id: 'APP-001', name: 'Muhammad Ali', marks: '1050/1100', program: 'F.Sc Pre-Eng', status: 'Approved' },
  { id: 'APP-002', name: 'Zain Ul Abideen', marks: '980/1100', program: 'ICS (Phy)', status: 'Pending' },
  { id: 'APP-003', name: 'Hamza Khan', marks: '1010/1100', program: 'F.Sc Pre-Med', status: 'Approved' },
  { id: 'APP-004', name: 'Bilal Saqib', marks: '850/1100', program: 'General Science', status: 'Rejected' },
  { id: 'APP-005', name: 'Usman Ghani', marks: '920/1100', program: 'ICS (Stat)', status: 'Pending' },
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are the official AI Assistant for FG Science Degree College for Men, Wah Cantt.
Your tone should be professional, academic, helpful, and polite.
You have access to the following information:
- The college is located in Wah Cantt, The Mall.
- We offer F.Sc (Pre-Medical, Pre-Engineering), ICS (Physics/Stats), General Science, and BS programs.
- Facilities include Digital Library, Transport, Hostel, and Sports Complex.
- Admissions usually open in August/September.
- The Principal is Mr. Asad Mehmood.

If asked about something you don't know (like real-time exam grades), explain that for privacy reasons you cannot access individual student records, and direct them to the admin portal.
`;