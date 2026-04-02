import type { ConceptNode } from '../types/concept'

export const conceptTree: ConceptNode = {
  id: 'root-dharma-map',
  title: 'Learning Tree Root',
  subtitle: 'Prototype Knowledge Map',
  description:
    'A structured entry point into placeholder Buddhism-learning concepts, designed to test hierarchy, navigation, and discovery.',
  difficulty: 'intro',
  tags: ['root', 'overview'],
  children: [
    {
      id: 'foundations',
      title: 'Foundations',
      subtitle: 'Core framing ideas',
      description: 'Starter concepts that give learners orientation before deeper study.',
      difficulty: 'intro',
      children: [
        {
          id: 'intro-concepts',
          title: 'Intro Concepts',
          subtitle: 'Shared language and terms',
          description: 'Foundational vocabulary and framing for beginning learners.',
          difficulty: 'intro',
          children: [
            {
              id: 'theme-cluster-a',
              title: 'Theme Cluster A',
              subtitle: 'Entry-level concept bundle',
              description: 'A compact cluster of concepts used to test beginner progression.',
              children: [],
            },
            {
              id: 'theme-cluster-b',
              title: 'Theme Cluster B',
              subtitle: 'Complementary beginner themes',
              description:
                'A second introductory concept grouping that mirrors alternate examples.',
              children: [],
            },
            {
              id: 'study-language',
              title: 'Study Language',
              subtitle: 'How concepts are labelled',
              description: 'Naming conventions, category style, and placeholder glossary norms.',
              children: [],
            },
          ],
        },
        {
          id: 'core-ideas',
          title: 'Core Ideas',
          subtitle: 'Placeholder doctrinal scaffolding',
          description:
            'Dummy conceptual axes that later can be replaced by authentic source-grounded themes.',
          children: [
            {
              id: 'concept-set-1',
              title: 'Concepts Set 1',
              subtitle: 'First conceptual package',
              description: 'Structured placeholder entries for first-pass understanding.',
              children: [],
            },
            {
              id: 'concept-set-2',
              title: 'Concepts Set 2',
              subtitle: 'Second conceptual package',
              description: 'Parallel concept placeholders for comparative exploration.',
              children: [],
            },
          ],
        },
        {
          id: 'study-path',
          title: 'Study Path',
          subtitle: 'Learning sequence model',
          description:
            'A staged progression that hints how content could evolve from intro to advanced.',
          children: [
            {
              id: 'path-intro',
              title: 'Path: Intro',
              subtitle: 'Beginner milestone',
              description: 'Simple checkpoints that help learners orient to the platform.',
              children: [],
            },
            {
              id: 'path-intermediate',
              title: 'Path: Intermediate',
              subtitle: 'Building conceptual depth',
              description: 'Transitional milestones designed for deeper conceptual linkage.',
              children: [],
            },
            {
              id: 'path-advanced',
              title: 'Path: Advanced',
              subtitle: 'Complex synthesis track',
              description: 'Higher-level placeholders for integrated thematic understanding.',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: 'Practice',
      subtitle: 'Applied learning modes',
      description: 'How learners might engage ideas in lived and reflective activity.',
      children: [
        {
          id: 'daily-practice',
          title: 'Daily Practice',
          subtitle: 'Consistent habit loops',
          description: 'Short repeatable routines that reinforce conceptual memory.',
          children: [
            {
              id: 'micro-routine',
              title: 'Micro Routine',
              subtitle: '5-minute placeholder habit',
              description: 'A minimal daily protocol for continuity and momentum.',
              children: [],
            },
            {
              id: 'reflection-checkin',
              title: 'Reflection Check-in',
              subtitle: 'End-of-day review prompt',
              description: 'A short review template for tracking attention and themes.',
              children: [],
            },
          ],
        },
        {
          id: 'meditation',
          title: 'Meditation',
          subtitle: 'Attention and composure labs',
          description: 'Prototype branches for styles of guided contemplative practice.',
          children: [
            {
              id: 'focus-training',
              title: 'Focus Training',
              subtitle: 'Stability-oriented session',
              description: 'A concentration-style practice module for single-point focus.',
              children: [],
            },
            {
              id: 'open-awareness',
              title: 'Open Awareness',
              subtitle: 'Broad attention session',
              description: 'A receptive practice format for wide-field noticing.',
              children: [],
            },
            {
              id: 'guided-sequence',
              title: 'Guided Sequence',
              subtitle: 'Stepwise prototype script',
              description: 'A scripted progression for testing paced session design.',
              children: [],
            },
          ],
        },
        {
          id: 'reflective-practice',
          title: 'Reflective Practice',
          subtitle: 'Journaling and integration',
          description: 'Methods for integrating ideas through writing and review.',
          children: [
            {
              id: 'prompt-bank',
              title: 'Prompt Bank',
              subtitle: 'Reflection prompt library',
              description: 'A set of reusable prompts aligned with learning themes.',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'traditions',
      title: 'Traditions',
      subtitle: 'Comparative school placeholders',
      description: 'A neutral structure for comparing lineages and thematic emphases.',
      children: [
        {
          id: 'school-a',
          title: 'School A',
          subtitle: 'Template lineage profile',
          description: 'A prototype profile for one tradition-style learning branch.',
          children: [
            {
              id: 'school-a-texts',
              title: 'School A Text Track',
              subtitle: 'Canonical reading lane',
              description: 'Placeholder text progression for this school branch.',
              children: [],
            },
            {
              id: 'school-a-practice',
              title: 'School A Practice Track',
              subtitle: 'Practice orientation lane',
              description: 'Placeholder exercises associated with this school profile.',
              children: [],
            },
          ],
        },
        {
          id: 'school-b',
          title: 'School B',
          subtitle: 'Alternative lineage profile',
          description: 'A second tradition template for side-by-side conceptual comparisons.',
          children: [
            {
              id: 'school-b-commentary',
              title: 'School B Commentary Track',
              subtitle: 'Interpretive literature lane',
              description: 'Placeholder commentary themes and interpretive examples.',
              children: [],
            },
          ],
        },
        {
          id: 'comparative-themes',
          title: 'Comparative Themes',
          subtitle: 'Cross-tradition intersections',
          description: 'Shared and contrasting motifs presented across learning branches.',
          children: [
            {
              id: 'shared-vocabulary',
              title: 'Shared Vocabulary',
              subtitle: 'Common language markers',
              description: 'Terms that appear across traditions with nuanced meaning shifts.',
              children: [],
            },
            {
              id: 'distinct-emphases',
              title: 'Distinct Emphases',
              subtitle: 'Priority differences by branch',
              description: 'How each placeholder tradition highlights different focal points.',
              children: [],
            },
            {
              id: 'study-bridges',
              title: 'Study Bridges',
              subtitle: 'Interoperable learning paths',
              description: 'Connections that support moving between branches intentionally.',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'ethics-insight',
      title: 'Ethics & Insight',
      subtitle: 'Conduct and understanding',
      description: 'Placeholder tracks for values-oriented and insight-oriented growth.',
      children: [
        {
          id: 'ethics',
          title: 'Ethics',
          subtitle: 'Conduct-oriented themes',
          description: 'Practical moral frameworks and scenario-based learning examples.',
          children: [
            {
              id: 'applied-ethics',
              title: 'Applied Ethics',
              subtitle: 'Case-based practice',
              description: 'Simple case studies that demonstrate ethical decision pathways.',
              children: [],
            },
            {
              id: 'community-guidelines',
              title: 'Community Guidelines',
              subtitle: 'Group-practice foundations',
              description: 'Shared conduct patterns for respectful group learning spaces.',
              children: [],
            },
          ],
        },
        {
          id: 'insight',
          title: 'Insight',
          subtitle: 'Understanding through observation',
          description: 'Observational frameworks that deepen thematic comprehension.',
          children: [
            {
              id: 'pattern-recognition',
              title: 'Pattern Recognition',
              subtitle: 'Seeing recurring structures',
              description: 'Exercises for identifying repeated experiential patterns.',
              children: [],
            },
            {
              id: 'advanced-concepts',
              title: 'Advanced Concepts',
              subtitle: 'Higher-complexity placeholders',
              description: 'A mock advanced tier for future specialist content.',
              children: [],
            },
          ],
        },
        {
          id: 'applied-study',
          title: 'Applied Study',
          subtitle: 'Putting ideas into context',
          description: 'Cross-cutting exercises that combine ethics, practice, and insight.',
          children: [],
        },
      ],
    },
  ],
}
