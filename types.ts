export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  DEPARTMENTS = 'DEPARTMENTS',
  ADMISSIONS = 'ADMISSIONS',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT',
  ADMIN = 'ADMIN'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Department {
  name: string;
  head: string;
  description: string;
  image: string;
}

export interface Facility {
  title: string;
  description: string;
  iconName: string; // We map this to Lucide icons in the component
}

export interface GalleryItem {
  id: string;
  src: string;
  category: string;
  caption: string;
}

export interface StudentApplication {
  id: string;
  name: string;
  marks: string;
  program: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}