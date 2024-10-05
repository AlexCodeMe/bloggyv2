import { BookOpen, Home, PenTool, Tag, User } from "lucide-react";

export const templates = [
  {
    id: "basic",
    title: "Basic Blog Post",
    description: "A simple, straightforward blog post structure.",
    preview: `
# [Your Title Here]

## Introduction
Briefly introduce your topic and why it's important.

## Main Point 1
Expand on your first main point.

## Main Point 2
Discuss your second main point.

## Main Point 3
Elaborate on your third main point.

## Conclusion
Summarize your key points and provide a call to action or final thoughts.
    `,
  },
  {
    id: "technical",
    title: "Technical Article",
    description: "Perfect for in-depth technical explanations and tutorials.",
    preview: `
# [Your Technical Topic]

## Introduction
- Brief overview of the technical concept
- Why it's important or relevant

## Prerequisites
- List any necessary background knowledge or tools

## Concept Explanation
- Detailed explanation of the core concept
- Include code snippets or diagrams if applicable

## Step-by-Step Guide
1. First step
2. Second step
3. Third step
   - Sub-step if necessary
4. Final step

## Best Practices
- List important best practices related to the topic

## Common Pitfalls
- Discuss common mistakes or misconceptions

## Conclusion
- Recap the main points
- Suggest next steps or further reading
    `,
  },
  {
    id: "listicle",
    title: "Listicle",
    description:
      "Great for creating engaging, easy-to-read list-based content.",
    preview: `
# [Number] [Adjective] [Topic] You Need to Know About

## Introduction
Hook your readers with a brief explanation of why this list is important or interesting.

## 1. [First Item]
- Key point about the first item
- Why it's important or interesting

## 2. [Second Item]
- Key point about the second item
- Why it's important or interesting

## 3. [Third Item]
- Key point about the third item
- Why it's important or interesting

[Continue with more items as needed]

## Conclusion
Wrap up your list with a summary and possibly a call to action.
    `,
  },
];

export const navItems = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/write",
    icon: PenTool,
    label: "Write",
  },
  {
    href: "/read",
    icon: BookOpen,
    label: "Read",
  },
  {
    href: "/topics",
    icon: Tag,
    label: "Topics",
  },
  {
    href: "/profile",
    icon: User,
    label: "Profile",
  },
];
