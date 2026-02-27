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
    name: "Sarah Johnson",
    position: "CTO",
    company: "CloudForce Solutions",
    content: "Working with this developer was exceptional. Their deep understanding of Salesforce architecture and ability to deliver complex solutions on time made our project a huge success. Highly recommended!",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Product Manager",
    company: "TechCorp",
    content: "One of the best Salesforce developers I've worked with. They not only wrote clean, efficient code but also provided valuable insights on how to optimize our business processes using Salesforce capabilities.",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Sales Director",
    company: "Growth Enterprises",
    content: "The LWC components they built transformed our sales process. Our team's productivity increased significantly, and the user experience is fantastic. Will definitely work with them again.",
    rating: 5
  }
];