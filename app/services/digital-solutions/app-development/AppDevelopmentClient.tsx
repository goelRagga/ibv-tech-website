'use client';

import type { ReactNode } from 'react';
import { ServicePageHero }        from '@/components/sections/services/ServicePageHero';
import { ServiceStatsSection }    from '@/components/sections/services/ServiceStatsSection';
import { ServiceFullWidthBand }   from '@/components/sections/services/ServiceFullWidthBand';
import { ServiceCardGrid }        from '@/components/sections/services/ServiceCardGrid';
import { ServiceApproachSection } from '@/components/sections/services/ServiceApproachSection';
import { ServiceWhyUsSection }    from '@/components/sections/services/ServiceWhyUsSection';
import { ServiceFAQSection }      from '@/components/sections/services/ServiceFAQSection';
import { ServiceContactSection }  from '@/components/sections/services/ServiceContactSection';
import type { ServiceCardItem }   from '@/components/sections/services/ServiceCardGrid';
import type { ApproachItem }      from '@/components/sections/services/ServiceApproachSection';
import type { FAQItem }           from '@/components/sections/services/ServiceFAQSection';
import type { ServiceStat }       from '@/components/sections/services/ServiceStatsSection';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {children}
    </svg>
  );
}

const stats: ServiceStat[] = [
  { value: '150+', label: 'Mobile applications delivered across iOS, Android, and cross-platform environments.' },
  { value: '4.8★', label: 'Average app store rating across published apps — a direct measure of user satisfaction.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'iOS Development',
    description: 'Native iPhone and iPad applications built with Swift — fast, polished, and optimised for Apple\'s design and performance standards.',
    icon: <Icon><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></Icon>,
  },
  {
    title: 'Android Development',
    description: 'Native Android applications built with Kotlin — reliable, responsive, and designed for the diversity of Android device landscape.',
    icon: <Icon><path d="M5 16a7 7 0 0114 0"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/><rect x="3" y="10" width="18" height="8" rx="2"/></Icon>,
  },
  {
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere — high-quality cross-platform apps using React Native that deliver near-native experience on both iOS and Android.',
    icon: <Icon><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></Icon>,
  },
  {
    title: 'UI/UX Design',
    description: 'App interfaces designed for real users — intuitive navigation, clear visual hierarchy, and interactions that feel natural on mobile.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></Icon>,
  },
  {
    title: 'API & Backend Integration',
    description: 'Connect your app to the data and services it needs — from REST APIs and third-party integrations to custom backend infrastructure.',
    icon: <Icon><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></Icon>,
  },
  {
    title: 'App Maintenance & Updates',
    description: 'Ongoing support, bug fixes, OS compatibility updates, and feature releases to keep your app performing as the ecosystem evolves.',
    icon: <Icon><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'User-Centred Design',
    description: 'Mobile users are unforgiving. We invest heavily in understanding how users will actually interact with the app before designing a single screen — using flow mapping, user stories, and prototype testing to validate decisions early.',
  },
  {
    title: 'Platform-Native Engineering',
    description: 'We respect the conventions and patterns of each platform. iOS apps feel like iOS apps. Android apps feel like Android apps. This is not just aesthetics — it is about making users feel at home from the first tap.',
  },
  {
    title: 'Quality Assurance Throughout',
    description: 'Testing is not a final stage — it runs throughout the entire development process. We catch issues early, test on real devices, and ensure the app meets quality standards before it reaches the app store.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'Should I build a native or cross-platform app?',
    a: 'It depends on your requirements, budget, and timeline. Native apps offer the best performance and platform integration but require separate codebases. Cross-platform apps like React Native deliver strong performance with a shared codebase at lower cost. We help you make the right choice for your specific product.',
  },
  {
    q: 'Do you handle app store submission?',
    a: 'Yes. We manage the entire app store submission process for both Apple App Store and Google Play Store, including all required assets, compliance checks, and technical requirements.',
  },
  {
    q: 'Can you build on top of an existing app?',
    a: 'Yes. We work with existing codebases — whether it is adding new features, fixing performance issues, redesigning the UI, or updating for new OS versions.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'A straightforward app with defined features typically takes 3–5 months from kick-off to app store launch. More complex apps with custom backends, integrations, or advanced features can take 6–9 months.',
  },
  {
    q: 'Do you provide post-launch maintenance?',
    a: 'Yes. We offer ongoing maintenance, OS compatibility updates, performance monitoring, and feature development to ensure your app remains functional and competitive after launch.',
  },
];

export function AppDevelopmentClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Digital Solutions"
        title="App Development"
        description="We build native and cross-platform mobile applications that are fast, reliable, and crafted around real user behaviour."
      />

      <ServiceStatsSection
        stats={stats}
        description="A great mobile app is more than features — it is a seamless experience that users return to. We build applications that balance technical quality, intuitive design, and reliable performance across every device."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Build"
        overview="Mobile development requires a different discipline than web — tighter interaction patterns, stricter performance constraints, and platform-specific conventions that users expect. We bring that depth of understanding to every app we build."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build apps users actually use"
        paragraphs={[
          'The mobile app market is saturated — users have high expectations and low patience. Apps that survive and grow are the ones built around real behaviour, tested with real users, and maintained with genuine care after launch.',
          'We treat every app as a living product, not a one-time deliverable. Our involvement continues through updates, improvements, and optimisations that keep your app competitive and your users engaged.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's build your\nmobile app together."}
        services={['App Development', 'Web Development', 'Business Consultation', 'Research & Analysis', 'Content & Growth']}
      />
    </div>
  );
}
