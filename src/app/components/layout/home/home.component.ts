import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  infoList: any = [
    {
      icon: "bi bi-globe2",
      title: "C11Y - Monitor Full Website Scan",
      description: "Scans the entire website to generate an overall accessibility audit score. Use the platform to schedule automated reports at custom intervals for regular"
    },
    {
      icon: "bi bi-display",
      title: "C11Y - Checker Scan Specific Pages",
      description: "Scans the specific page and provides a detailed, on-screen report to help you identify and understand accessibility issues in real time"
    },
    {
      icon: "bi bi-code-slash",
      title: "C11Y - Debugger Scan Specific Modules",
      description: "Scans specific elements, functions, or checkpoints across the websites to provide a detailed analysis and insights"
    },
    {
      icon: "bi bi-bookmark",
      title: "HTML Elements",
      description: "In dept scanning of all the HTML elements present, Performs both Semantic and Syntactic checks"

    },
    {
      icon: "bi bi-folder2",
      title: "Documents",
      description: "Identifies the presence of documents on the website, whether as files or links, and conducts an in-depth acessibility"
    },
    {
      icon: "bi bi-film",
      title: "Multimedia",
      description: "Detects all media content and performs comprehensive accessibility audits tailored for each type"
    },
    {
      icon: "bi bi-pc-display",
      title: "Desktop & Mobile",
      description: "Support both desktop and mobile views, with dedicated checks for mobile to provide a comprehensive report on accessibility and user experience"
    },
    {
      icon: "bi bi-globe2",
      title: "Accessibility Guideliness",
      description: "Our core systems incorporate in-depth accessibility guideliness, including WCAG 2x, AA, and others, to perform a comprehensive audit"
    },
    {
      icon: "bi bi-globe2",
      title: "Expert Testing",
      description: "Our in-house team of subject matter experts performs, checks and analysis checkpoints and guideliness that are highly contextual, requiring manual expertise for accurate auditline manual"
    }
  ];
}
