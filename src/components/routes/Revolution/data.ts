import vision from '../../../assets/vision.svg'
import consultation from '../../../assets/consultationIcon.svg'
import mockup from '../../../assets/mockupIcon.svg'
import review from '../../../assets/reviewIcon.svg'
import design from '../../../assets/designIcon.svg'
import build from '../../../assets/buildIcon.svg'
import launch from '../../../assets/launchIcon.svg'
import maintain from '../../../assets/maintainIcon.svg'
import iterate from '../../../assets/iterateIcon.svg'

import technologyAnimation from '../../../animations/technologyAnimation/data.json'

const VisionsParagraph = {
  title: 'Vision',
  paragraph: [
    '  The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.',
    'What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.',
    'We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.',
    ' By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.',
    'We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.',
  ],
  image: vision,
}

const TechnologyParagraph = {
  title: 'Technology',
  paragraph: [
    'In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.',
    'Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.',
    'Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.',
    'This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.',
    'Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.',
    'These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.',
    ' This puts personalization in your pocket — faster, better, and more affordable than ever before.',
  ],
  animation: technologyAnimation,
}

const Process = [
  {
    title: 'Consultation',
    paragraph: [
      ' Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.',
      'Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.',
      ' Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.',
      'We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.',
    ],
    image: consultation,
    style: { backgroundColor: '#B3B3B3', color: '#fff' },
  },
  {
    title: 'Mockup',
    paragraph: [
      'After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.',
      'Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.',
      ' This helps us understand and refine the solution itself before getting distracted by specifics and looks.',
    ],
    image: mockup,
    style: { backgroundColor: '#FF7373', color: '#fff' },
  },
  {
    title: 'Review',
    paragraph: [
      'Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.',
      'We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.',
      '  Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.',
    ],
    image: review,
    style: { backgroundColor: '#39B54A', color: '#fff' },
  },
  {
    title: 'Design',
    paragraph: [
      'Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.',
      'No aspect is superfluous, and care will be taken with every decision.',
    ],
    image: design,
    style: { backgroundColor: '#A67C52', color: '#fff' },
  },
  {
    title: 'Second Review ',
    paragraph: [
      ' A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.',
      ' This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.',
    ],
    image: review,
    style: { backgroundColor: '#39B54A', color: '#fff' },
  },
  {
    title: 'Build',
    paragraph: [
      ' Here’s where we get down to business.',
      ' Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.',
      'Each area is then developed in order of importance until ready to be connected to the next piece.',
      'Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.',
      'Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.',
      'Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.',
    ],
    image: build,
    style: { backgroundColor: '#FBB03B', color: '#fff' },
  },
  {
    title: 'Launch',
    paragraph: [
      '   The moment we’ve all been waiting for.',
      'When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.',
      ' When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.',
    ],
    image: launch,
    style: { backgroundColor: '#C1272D', color: '#fff' },
  },
  {
    title: 'Maintain',
    paragraph: [
      '   Our work doesn’t end there.',
      'After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.',
      'From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.',
    ],
    image: maintain,
    style: { backgroundColor: '#8E45CE', color: '#fff' },
  },
  {
    title: 'Iterate',
    paragraph: [
      'The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.',
      'By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.',
      'Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.',
    ],
    image: iterate,
    style: { backgroundColor: '#29ABE2', color: '#fff' },
  },
]

export { VisionsParagraph, TechnologyParagraph, Process }
