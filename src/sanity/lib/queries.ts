import { defineQuery } from 'next-sanity';

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]`);

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]`);

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]`);

export const SERVICES_QUERY = defineQuery(`*[_type == "service"] | order(_createdAt asc)`);

export const WORKS_QUERY = defineQuery(`*[_type == "work"] | order(_createdAt desc)`);

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"] | order(_createdAt desc)`);

export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0]`);

// TypeScript types based on schemas
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanityHero {
  _id: string;
  title: string;
  highlightedWord?: string;
  description: string;
  backgroundImage: SanityImage;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface SanityAbout {
  _id: string;
  title: string;
  heading: string;
  description1: string;
  description2?: string;
  image: SanityImage;
}

export interface SanitySiteSettings {
  _id: string;
  siteName: string;
  logo?: SanityImage;
  email?: string;
  phone?: string;
  address?: string;
  navLinks?: { name: string; path: string }[];
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface SanityService {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  image: SanityImage;
}

export interface SanityWork {
  _id: string;
  title: string;
  category: string;
  image: SanityImage;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  feedback: string;
  avatar?: SanityImage;
}

export interface SanityContact {
  _id: string;
  email?: string;
  phone?: string;
  address?: string;
}
