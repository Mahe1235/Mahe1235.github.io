---
title: "Onboarding on Docsumo"
date: "2024-05-01"
description: "Enhanced user onboarding for Docsumo by identifying target audience, creating user segments based on document types, and defining the JTBD for personas during the trial period."
emoji: "📄"
tags: ["Onboarding", "User Segments", "JTBD"]
category: "Case Study"
categoryColor: "bg-blue-100 text-blue-700"
---

## Background

Docsumo is a Document AI software that helps enterprises make fast & accurate decisions from unstructured documents. It helps enterprises automate key processes such as customer onboarding, income verification, and claims processing by digitizing PDF files, images & Excel docs such as bank statements, invoices, financial statements, etc.

Docsumo competes with 3-decade old companies such as Abbyy, Kofax and new-age players such as Google Document AI, Instabase, Hyperscience, Hypatos, Rossum, and Ocrolus.

Docsumo targets mid-market ($100mn-$1bn revenue, 100+ employees) lenders, insurers, and managed services in the USA to automate different processes.

## Problem Statement

Currently, Docsumo has a lot of screens & features which are fragmented. These screens & features were built with the success team in mind. Now that the app has been opened, the goal is to make a full self-service product for existing APIs and provide an option to train your own model on your document dataset.

Right now document types, API & service, and training your own model work like independent screens which are not easy for users to understand. The task is to redefine user onboarding so that these features are combined and interact smoothly so that people have wow moments as soon as possible.

## Objective

The main goal is to create a more integrated and user-friendly experience, specifically in terms of the onboarding process and the interaction between the different features and screens:

- **User-centric Design:** Improve the overall user experience by creating a more intuitive and seamless interface. The various features and screens that currently seem fragmented should be integrated into a logical and easy-to-navigate flow.
- **Simplified Onboarding Process:** Redesign the onboarding process to make it more engaging and educational, effectively reducing the learning curve.
- **Self-Service Capability Enhancement:** Enhance the existing APIs' self-service capabilities and provide an easy and intuitive way for users to train their own models on their document datasets.
- **Unified View:** Create a unified view for different document types, APIs, and services that presents all available features in a cohesive manner.
- **Accelerate User "Aha" Moment:** Make necessary adjustments to ensure that new users quickly grasp the value and potential of the product.
- **User Profiling and Personalization:** Develop a system to gather and analyze user data during onboarding to create profiles that allow for a more personalized experience.

## Ideal Customer Profile

### Firmographics

- **Industry:** Financial services (lenders), insurance, or managed service providers
- **Company Size:** Mid-market companies with annual revenues between $100 million and $1 billion, and with 100+ employees
- **Location:** Based in the United States

### Demographics

- **Role:** Decision-makers in the IT department, or those responsible for data management and processing (CTO, IT Manager, Data Manager, etc.)
- **Experience:** Good understanding of APIs, machine learning, and the benefits of automated data processing

### Behavioral

- **Needs:** Automate key processes such as customer onboarding, income verification, and claims processing
- **Technology Adoption:** Open to adopting new technologies and looking for innovative solutions

### Key User Profiles

| Profile | Interest |
|---------|----------|
| CTOs/IT Directors | Strategic benefits — streamline processes, improve efficiency, reduce costs |
| Tech Leads/IT Managers | Technical aspects — how it works, accuracy, APIs, custom model training |
| Business Process Managers | Process automation — data extraction, speed, error reduction |
| Compliance Officers | Regulatory compliance — automated document review and management |
| Data Analysts/Scientists | Data extraction — quickly and accurately extract data from documents |
| Procurement Managers | Purchase decisions — evaluating solutions like Docsumo |

### Prioritization Factors

The choice of primary user persona is guided by:
- **Role in Decision Making:** Authority to make or influence purchasing decisions
- **Frequency of Use:** How often they will use the system
- **Pain Point Intensity:** How critical the problem Docsumo solves is for them
- **Alignment with Business Goals:** How well the persona aligns with Docsumo's strategic goals

Based on these factors, **Tech Leads/IT Managers** were prioritized as the primary persona.

## User Persona: Tech Lead Tom

- **Age:** 35 years
- **Role:** Tech Lead at a mid-sized financial firm
- **Experience:** 10 years in the industry, 5 years in current role
- **Education:** Master's degree in Computer Science
- **Skills:** Project management, software development, machine learning basics, API integration

### Goals

- Ensure smooth, efficient operations within his team
- Bring in technology that can automate repetitive tasks and improve accuracy
- Keep his team on the cutting edge of technological advancements

### Challenges/Pain Points

- Time-consuming manual data extraction from various document types
- Errors and inconsistencies in data due to manual handling
- Difficulties in managing and scaling up data extraction processes
- Need to constantly train and retrain team members on new processes and tools

> "I'm looking for a solution that can reduce the manual work involved in data extraction, improve accuracy, and easily integrate with our existing systems."

## Jobs To Be Done (JTBD)

When Tech Lead Tom visits the Docsumo website, his key jobs are:

1. **Learn about Docsumo's capabilities:** Understand what Docsumo can do — APIs available, document types, accuracy, custom model training
2. **Evaluate fit for his needs:** Assess whether it can handle their specific document types and integrate with existing systems
3. **Understand implementation:** Learn the steps for setup, integration, custom model training, and team onboarding
4. **Assess cost and value:** Understand pricing structure and evaluate ROI in terms of time saved and reduced errors
5. **Gather decision-making information:** Collect technical specifications, case studies, testimonials, and competitor comparisons
6. **Find support and resources:** Know what support, training, documentation, and customer service is available

During the trial period, Tom is likely to (prioritized by potential impact, feasibility, urgency, and strategic alignment):
- **Implement and test Docsumo's APIs:** See how well APIs integrate, how reliable and accurate they are
- **Measure efficiency gains and error reduction:** Evaluate how much efficiency is gained
- **Understand setup process and ease of use:** Evaluate effort and time required
- **Evaluate support and resources:** Experience the quality of post-purchase service

## Onboarding Workflow

### Step 1 — Setup

**From:** When the user lands on the website
**Till:** When the product has gotten enough information to show the core value prop

#### Issues Identified

- **Work email requirement:** Users have questions like "Why is my work email required?" and "What are the implications?" A tooltip with a pop-up explanation addresses this.
- **Company name:** Can be pre-filled using the email domain — gives users a wow factor and builds trust in Docsumo's ML capabilities.
- **Phone number:** Should have a country code dropdown instead of expecting users to remember their code.
- **Region field:** Ambiguous — if company-specific, merge with first screen. If employee-specific, pre-fill from country code.
- **Document type/count:** Adds an additional screen. Could be collected further down the journey since users may not be sure about document counts before experiencing the product.
- **Slot booking pop-up:** Appears immediately upon entering the platform, which can be annoying since users signed up to try the product, not schedule a demo.

*[Screenshot: User psych graph showing the emotional journey through old onboarding flow — shows dramatic drop due to too many steps without clear explanations]*

### Step 2 — Know the Value and How to Take Action

**JTBD considered:** Learn about Docsumo's capabilities
**From:** When the user has access to the platform
**Till:** When the user has completed the first step to value (uploading a document)

#### Key Principles

- **Increase the ability to take action:**
  - Have the right CTAs that map to the user's JTBD
  - The guided tour should be more subtle and help users as they make progress at their own pace

- **Increase the motivation to take action:**
  - CTAs should be authoritative or suggestive based on criticality
  - The value derived from an action should be shown upfront
  - Gamification can increase motivation (progress bar, checklist, etc.)

#### Issues with Current Platform

- Multiple CTAs with no single CTA aimed at the main JTBD
- The guided tour feels out of place in the Help Center pop-up
- Page is structured module-wise instead of JTBD-wise — should map to users' mental models

*[Screenshot: Homescreen for a new user showing fragmented CTAs and module-based layout]*

### Step 3 — Get the Value for the First Time

**JTBD considered:** Learn about Docsumo's capabilities
**From:** When the user has uploaded a document
**Till:** When the user has downloaded/shared the extracted data

#### Proposed Flow

1. **User uploads any document** — remove the hurdle of selecting a document type on sign-up
2. **Docsumo identifies the document:**
   - **Match found:** Take the user to data extraction flow with a guided tour based on user actions
   - **No match:** Show the list of supported documents. If nothing fits, explain that Docsumo would love to understand their requirements and ask to schedule a demo call
3. **User reviews and validates fields** — hovering over each data field shows how it would be extracted (JSON/CSV/webhooks)
4. **Sample output shared on screen** with a guide explaining how to use it
5. **Recommend sharing with colleagues** — introduces enterprise-level value proposition for better retention and conversion
   - Builds network effects to convert single user to a Product Qualified Account

### Step 4 — Get the Value a Few More Times

**From:** When the user has extracted data from the first document
**Till:** When the user decides to upgrade

The main objective is to translate the value proposition from the User level to the Enterprise level by converting the user into a Product Qualified Account.

#### Factors to Identify a PQA

- **Usage volume:** Threshold number of documents processed
- **Breadth of feature usage:** Number of features used (training a custom model, creating a webhook)
- **Velocity of usage:** Big influx of new requests or documents processed
- **Behavioral components:** Visiting pricing pages, inviting team members

This data can be used to formulate a Freemium model along with a Trial period for better conversions.

## Success Metrics

| Metric | Description |
|--------|-------------|
| **Conversion Rate** | Percentage of trial users who convert to paid customers |
| **Time to First "Aha" Moment** | Average time for users to experience the value of Docsumo |
| **User Engagement & Activation** | Documents processed, API calls made, custom models trained |
| **Customer Satisfaction & Retention** | Survey feedback, NPS, retention rates |
| **Feature Adoption** | Adoption rate of different features and functionalities |
| **Referral & Recommendation** | Number of user referrals or recommendations |

## Assumptions

- **Data Collection:** Users are willing to provide information for profiling and personalization, given transparency and privacy respect
- **Readiness for Automation:** Companies are ready to automate their data processing and document handling tasks
- **Capability to Train Models:** Users have a dataset on which they want to train their models
- **Self-service Orientation:** Users prefer having control and autonomy over using the product
- **User Persona:** Tech Lead Tom is representative of the target users (needs validation through user research)
