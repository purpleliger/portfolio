import type { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  name: "Mustafa Muhammad",
  email: "m.muhammad.cyber@gmail.com",
  summary: "A strategic and hands-on cybersecurity leader with 14+ years of experience bridging technical operations, business strategy (MBA), and security governance (CISSP). Proven ability to own the entire incident response lifecycle, from monitoring SIEM/EDR platforms to leading tabletop exercises and hardening defenses based on emerging threats. Currently serving as the OT Cybersecurity SME for critical infrastructure (Metrolinx Ontario Line), Mustafa excels at translating technical risk into actionable business processes and have managed enterprise security controls (MFA, MDM) with formal training in CASB technologies.",
  
  experience: [
    {
      company: "HDR Inc.",
      role: "OT Cybersecurity SME — Technical Advisor to Metrolinx - Ontario Line",
      period: "Aug 2024 - present",
      responsibilities: [
        "Security Monitoring & Incident Preparedness: Lead cybersecurity design reviews for critical rail systems (SCADA, Signaling), proactively identifying vulnerabilities and mandating controls to prevent future security incidents before system deployment.",
        "Policy & Framework Compliance: Ensure contractor designs adhere to NIST CSF, IEC 62443, and APTA guidelines, effectively updating security requirements in response to the evolving OT threat landscape.",
        "Vendor & Stakeholder Coordination: Act as the technical authority, coordinating security requirements between engineering contractors, project management, and Metrolinx to align complex systems with organizational risk tolerance."
      ]
    },
    {
      company: "HDR Inc.",
      role: "Control Systems & Cybersecurity Practice Group - Member",
      period: "Ongoing",
      responsibilities: [
        "Engage in advanced workshops on cyber-resilient network design, cloud-based SCADA security, and threat modeling, applying cutting-edge learnings directly to client projects."
      ]
    },
    {
      company: "HDR Inc.",
      role: "Sr. IT Support Specialist",
      period: "Jul 2020 – Present",
      responsibilities: [
        "First Line of Defense & EDR Monitoring: Serve as a key resource for endpoint security, utilizing Microsoft Defender and Lookout MTD to monitor 30,000+ endpoints for threats; act upon threat intelligence reports to identify and remediate high-risk devices, preventing potential incidents.",
        "Incident Response & Investigation: Investigate and remediate security incidents involving phishing compromises; execute containment procedures including malware scans (Stinger, Emsisoft), registry fixes, and evidence cleanup to effectively close security alerts.",
        "Threat Hunting & Detection Tuning: Utilize Microsoft Defender's Advanced Hunting with KQL to proactively search for threats across the endpoint landscape. Apply custom regex filtering techniques to reduce false positives in security telemetry.",
        "Security Control Management: Administer critical security controls including Privileged Identity Management (PIM/LAPS), Mobile Device Management (Intune) for compliance enforcement, and Data Loss Prevention (DLP) via Endpoint Protector to manage data transfer requests and prevent exfiltration.",
        "Vulnerability & Access Management: Manage endpoint vulnerability posture by ensuring encryption, Defender compliance; control access lifecycle via Active Directory/Entra ID for onboarding/offboarding and group memberships.",
        "Vendor & Partner Collaboration: Collaborate closely with the dedicated security team to investigate alerts and implement remediation steps, demonstrating effective partnership in a layered defense model."
      ]
    }
  ],

  education: [
    {
      institution: "Australian Institute of Business",
      degree: "MBA",
      field: "Strategic Supply Chain Management"
    },
    {
      institution: "University of Toronto",
      degree: "BSc(Hons)",
      field: "Computer Science & Psychology"
    },
    {
      institution: "Stanford International College",
      degree: "Dip",
      field: "Industrial Automation"
    }
  ],

  certifications: [
    {
      issuer: "ISC2",
      name: "CISSP",
      credential: "Certified Information Systems Security Professional"
    },
    {
      issuer: "Government of Canada",
      name: "Level II (Secret)",
      credential: "Security Screening"
    }
  ],

  volunteer: [
    {
      organization: "Canadian Urban Transit Research & Innovation Consortium (CUTRIC)",
      role: "Member, Cybersecurity Working Group",
      period: "Sep 2024 - Present",
      description: [
        "Collaborate with government, national transit agencies, and industry partners on monthly threat intelligence briefings and best practices for securing public transportation infrastructure against emerging cyber threats."
      ]
    },
    {
      organization: "ISC2",
      role: "Professional Development Committee",
      period: "Oct 2024 - June 2025",
      description: [
        "Assisted in testing and launching the MentorGain platform, enabling the growth of 100+ cybersecurity professionals, demonstrating a commitment to advancing the security community."
      ]
    },
    {
      organization: "OTM Cyber",
      role: "SOC Analyst",
      period: "May 2024 - May 2025",
      description: [
        "First Line of Defense: Monitored and investigated security alerts in a live SOC environment using proprietary and enterprise-grade tools, analyzing IoCs for malware, C2 activity, and unauthorized access.",
        "Detection Rule Tuning & KPI Improvement: Developed and tuned custom detection rules to reduce false positives and enhance threat identification, directly improving SOC operational efficiency and alert accuracy.",
        "Incident Response & Communication: Reported validated threats to government clients with clear, severity-based remediation guidance, demonstrating the ability to communicate effectively under pressure and drive incident containment."
      ]
    }
  ],

  projects: [
    {
      title: "Project 1",
      description: "Coming Soon",
      status: "coming-soon"
    },
    {
      title: "Project 2",
      description: "Coming Soon",
      status: "coming-soon"
    },
    {
      title: "Project 3",
      description: "Coming Soon",
      status: "coming-soon"
    }
  ]
};