export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nikita Irebe",
    position: "Head of Business & Process Engineering",
    company: "Cloud23",
    content: "The LWC components they built transformed our sales process. Our team's productivity increased significantly, and the user experience is fantastic. Will definitely work with them again.",
    rating: 4
  },
  {
    id: "2",
    name: "Hannah Afework",
    position: "Salesforce Certified Developer&Administrator",
    company: "MMCY",
    content: "Working with this developer was exceptional. Their deep understanding of Salesforce architecture and ability to deliver complex solutions on time made our project a huge success. Highly recommended!",
    rating: 5
  },
  {
    id: "3",
    name: "Ashenafi Kinfe",
    position: "CRM Project Manager",
    company: "Bank of Abyssinia",
    content: "One of the best Salesforce developers I've worked with. They not only wrote clean, efficient code but also provided valuable insights on how to optimize our business processes using Salesforce capabilities.",
    rating: 5
  },
  {
    id: "4",
    name: "Hanna Alabachew",
    position: "CRM Marketing Team Leader",
    company: "Bank of Abyssinia",
    content: "One of the best Salesforce developers I've worked with. They not only wrote clean, efficient code but also provided valuable insights on how to optimize our business processes using Salesforce capabilities.",
    rating: 5
  },
  {
    id: "5",
    name: "Yared Gebremedhin",
    position: "CRM Sales Team Leader",
    company: "Bank of Abyssinia",
    content: "One of the best Salesforce developers I've worked with. They not only wrote clean, efficient code but also provided valuable insights on how to optimize our business processes using Salesforce capabilities.",
    rating: 5
  },
  {
    id: "6",
    name: "Amir Yimer",
    position: "CRM Service Team Leader",
    company: "Bank of Abyssinia",
    content: "One of the best Salesforce developers I've worked with. They not only wrote clean, efficient code but also provided valuable insights on how to optimize our business processes using Salesforce capabilities.",
    rating: 5
  }
];