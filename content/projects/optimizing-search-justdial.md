---
title: "Optimizing Search Results for Justdial"
date: "2024-03-01"
description: "Created a robust ranking algorithm for Justdial's platform exploring factors such as proximity, user ratings, responsiveness, and business verification."
emoji: "🔎"
tags: ["Search Algorithm", "Ranking", "UX"]
category: "Case Study"
categoryColor: "bg-blue-100 text-blue-700"
---

## Overview

Justdial connects users with local businesses and services, offering search results, user reviews, and contact information through its platform. The challenge: identify and design the logic for the ranking order of businesses that appear when a user searches for a particular category (plumbers, restaurants, hotels, etc.).

The goal of the ranking system is to provide users with the most relevant and high-quality results based on their search query, considering a holistic view of businesses' offerings and user experiences.

## Quantitative Factors

### Proximity

Users typically search for services near their location. Businesses situated closer to the user are prioritized by measuring the distance between the user's location and each business, with higher weight assigned to nearer businesses.

### User Ratings & Reviews

User ratings serve as a reliable indicator of service quality. Higher average ratings receive greater weight. The number of reviews is also considered — businesses with a larger volume of reviews are deemed more dependable since their rating is derived from a more substantial sample size.

### Responsiveness

Users value prompt responses. Businesses that demonstrate quick response times to user inquiries receive greater weight in the ranking.

### Business Verification

Trust and reliability are crucial. Verified businesses — confirmed as authentic by Justdial — receive additional weight, giving users more confidence in their choices.

### Pricing

When pricing information is accessible, businesses presenting competitive pricing while maintaining high-quality service receive greater weight in the algorithm.

### Popularity

More popular businesses can be presumed to be of greater relevance. Businesses with a larger number of views or contacts via Justdial receive higher weight, taking into account the frequency of views and contact actions.

## Qualitative Factors

### Sentiment Analysis of Reviews

Reviews are a goldmine for unfiltered customer feedback. Using natural language processing (NLP) techniques, a sentiment score is allocated to each review. Businesses with predominantly positive sentiment scores receive greater weight.

### User-Generated Tags

Users can apply relevant labels to businesses, such as "eco-friendly," "family-friendly," or "24/7 service." If a business accumulates tags that align with the user's preferences or search query, it receives a higher weight.

### Business Description Keywords

Business descriptions contain highly specific information. If the description contains relevant keywords matching the user's search query, it indicates a better match, and the business is assigned a higher weight.

## Monetization: Sponsored & Paid Listings

Taking into account that Justdial generates revenue from company listings:

- **Sponsored or Paid Listings:** Businesses that opt for premium placement receive a flat increase to their ranking score, or appear in a separate ranking category displayed above organic results (similar to search engine sponsored results).
- **Featured Businesses:** Businesses can supply supplementary qualitative data including case studies, success stories, or customer testimonials. High-quality featured content matching user preferences receives additional weight.

## Ranking Score Calculation

To create a comprehensive ranking score:

1. Assign a score for each factor based on performance in each category
2. Normalize the scores for both quantitative and qualitative factors to ensure fair contribution
3. Assign weights to each factor according to importance (e.g., proximity and user ratings might be more important than recency or keyword matching)
4. Weights can be adjusted based on business priorities, user feedback, or data analysis

## Category-Specific Ranking Adjustments

The ranking algorithm adapts for different categories to account for unique characteristics and user expectations:

### Plumber
Users prioritize a prompt response and proximity.
- **Increase weight:** Proximity, Responsiveness
- **Maintain/Increase:** User ratings

### Bank ATM
Proximity and business verification are essential.
- **Increase weight:** Proximity, Business verification
- **Decrease weight:** User ratings

### Beauty Salon
User ratings, reviews, and expert recommendations carry more significance.
- **Maintain/Increase:** Proximity, User ratings, Sentiment analysis

### 2-Star Hotels
Pricing and user ratings are the most crucial considerations.
- **Increase weight:** Pricing, User ratings
- **Include:** User-generated tags like "budget-friendly" or "near public transport"

## Ensuring User Requirements Are Fulfilled

### Proactive Measures

- **Continuously improve** the ranking algorithm using user feedback and data analysis
- **Offer filters and sorting** that enable users to refine results by proximity, cost, ratings, and other factors
- **Maintain the business database** to ensure information is precise and current, including monitoring businesses that cease operations

### When Requirements Are Not Met

- **User feedback:** Encourage users to share thoughts on search relevance to inform algorithm adjustments
- **Assess search data:** Investigate search data and user behavior to identify patterns — if users often abandon search or don't click results, the results aren't meeting needs
- **A/B testing:** Evaluate the impact of changes to the ranking algorithm and UI to identify the most effective solutions
- **Personalization:** Implement features considering individual user preferences and search history to tailor results
- **Educate users:** Offer tips, tutorials, and guides on using Justdial effectively — refining queries, using filters, providing feedback

## Assumptions

- Justdial has access to the necessary data for each of the quantitative and qualitative factors
- Users have provided enough ratings and reviews for meaningful sentiment analysis
- User ratings are meaningful and representative of business quality
- Businesses have provided accurate and up-to-date information including descriptions, pricing, and other qualitative data
