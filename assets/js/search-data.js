// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/tony.github.io/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Author names in bold indicate Tony Tran.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of academic, research, and embedded engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught and tutored as a graduate teaching assistant and Knack tutor.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/teaching/";
          },
        },{id: "nav-skills",
          title: "Skills",
          description: "Tools, frameworks, languages and platforms I work with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/skills/";
          },
        },{id: "nav-coursework",
          title: "Coursework",
          description: "Selected graduate and undergraduate courses at the University of Houston.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tony.github.io/coursework/";
          },
        },{id: "news-i-graduate-cypress-falls-high-school-with-foundation-distinguished-high-school-diploma-summa-cum-laude",
          title: '🎓 I graduate Cypress Falls High School with Foundation Distinguished High School Diploma...',
          description: "",
          section: "News",},{id: "news-i-join-the-university-of-houston-uh-and-the-honors-college",
          title: '🎓 I join the University of Houston (UH) and The Honors College.',
          description: "",
          section: "News",},{id: "news-we-receive-2nd-place-in-digital-systems-lab-elet-2103-with-our-project-car-door-alarm-system",
          title: '🏆 We receive 2nd Place in Digital Systems Lab (ELET 2103) with our...',
          description: "",
          section: "News",},{id: "news-we-receive-1st-place-in-digital-systems-elet-2303-with-our-project-digital-connect-4",
          title: '🏆 We receive 1st Place in Digital Systems (ELET 2303) with our project,...',
          description: "",
          section: "News",},{id: "news-we-receive-1st-place-in-sensor-applications-elet-3403-with-our-project-devastating-driving-prevention-device-ddpd-video",
          title: '🏆 We receive 1st Place in Sensor Applications (ELET 3403) with our project,...',
          description: "",
          section: "News",},{id: "news-we-receive-1st-place-in-communication-circuits-elet-3402-with-our-project-wireless-elevator-control-video",
          title: '🏆 We receive 1st Place in Communication Circuits (ELET 3402) with our project,...',
          description: "",
          section: "News",},{id: "news-we-receive-1st-place-in-embedded-systems-elet-3425-with-our-project-hand-gestured-stroller-video",
          title: '🏆 We receive 1st Place in Embedded Systems (ELET 3425) with our project,...',
          description: "",
          section: "News",},{id: "news-i-pass-the-fe-electrical-and-computer-examination-from-the-national-council-of-examiners-for-engineering-and-surveying-ncees-pass-rate-53",
          title: '📜 I pass the FE Electrical and Computer Examination from the National Council...',
          description: "",
          section: "News",},{id: "news-we-receive-2nd-place-in-senior-project-elet-4308-with-our-project-otto-sorting-bin-video",
          title: '🏆 We receive 2nd Place in Senior Project (ELET 4308) with our project,...',
          description: "",
          section: "News",},{id: "news-i-join-networked-autonomous-intelligent-learning-nail-lab-at-uh-focusing-on-research-in-efficient-tinyml-amp-amp-embedded-ai",
          title: '💼 I join Networked Autonomous Intelligent Learning (NAIL) Lab at UH focusing on...',
          description: "",
          section: "News",},{id: "news-i-present-otto-sorting-bin-at-undergraduate-research-day-urd-2024-poster-video",
          title: '📄 I present Otto Sorting Bin at Undergraduate Research Day (URD) 2024. [Poster]...',
          description: "",
          section: "News",},{id: "news-we-receive-1st-place-in-senior-project-lab-elet-4208-with-our-project-otto-sorting-bin-video",
          title: '🏆 We receive 1st Place in Senior Project Lab (ELET 4208) with our...',
          description: "",
          section: "News",},{id: "news-i-graduate-the-university-of-houston-with-a-bs-in-computer-engineering-technology-summa-cum-laude-from-cullen-college-of-engineering-and-receive-university-honors-awarded-by-the-honors-college-at-uh",
          title: '🎓 I graduate the University of Houston with a BS in Computer Engineering...',
          description: "",
          section: "News",},{id: "news-i-receive-my-engineering-in-training-fe-eit-license-in-electrical-and-computer-engineering-81224-from-the-texas-board-of-professional-engineers-and-land-surveyors-tbpels",
          title: '📜 I receive my Engineering in Training (FE/EIT) License in Electrical and Computer...',
          description: "",
          section: "News",},{id: "news-i-join-the-department-of-engineering-technology-at-uh-as-a-teaching-assistant",
          title: '💼 I join the Department of Engineering Technology at UH as a Teaching...',
          description: "",
          section: "News",},{id: "news-our-paper-distributed-perception-aware-safe-leader-follower-system-via-control-barrier-methods-has-been-accepted-for-presentation-at-the-2025-ieee-international-conference-on-robotics-and-automation-icra-may-19-23-2025-atlanta-usa-acceptance-rate-38-67-paper",
          title: '🎉 Our paper Distributed Perception Aware Safe Leader Follower System via Control Barrier...',
          description: "",
          section: "News",},{id: "news-our-paper-facets-efficient-once-for-all-object-detection-via-constrained-iterative-search-has-been-accepted-for-presentation-at-the-2025-ieee-international-conference-on-robotics-and-automation-icra-late-breaking-session-atlanta-usa-poster-video",
          title: '🎉 Our paper FACETS: Efficient Once-for-all Object Detection via Constrained Iterative Search has...',
          description: "",
          section: "News",},{id: "news-we-present-facets-efficient-once-for-all-object-detection-via-constrained-iterative-search-in-the-2025-ieee-international-conference-on-robotics-and-automation-icra-late-breaking-session-atlanta-usa-poster-video",
          title: '📄 We present FACETS: Efficient Once-for-all Object Detection via Constrained Iterative Search in...',
          description: "",
          section: "News",},{id: "news-our-paper-trashdet-iterative-neural-architecture-search-for-efficient-waste-detection-has-been-accepted-for-presentation-at-the-wastevision-international-workshop-on-smart-waste-monitoring-at-the-ieee-cvf-winter-conference-on-applications-of-computer-vision-wacv-2026-paper",
          title: '🎉 Our paper TrashDet: Iterative Neural Architecture Search for Efficient Waste Detection has...',
          description: "",
          section: "News",},{id: "news-i-present-trashdet-iterative-neural-architecture-search-for-efficient-waste-detection-at-the-wastevision-international-workshop-on-smart-waste-monitoring-at-the-ieee-cvf-winter-conference-on-applications-of-computer-vision-wacv-2026-tucson-usa-paper-slides-video",
          title: '📄 I present TrashDet: Iterative Neural Architecture Search for Efficient Waste Detection at...',
          description: "",
          section: "News",},{id: "news-our-project-heterogeneous-multi-robot-waste-detection-with-conformal-runtime-monitoring-has-been-selected-for-the-nvidia-academic-grant-program-in-support-of-our-project-nvidia-is-donating-4-rtx-pro-6000-blackwell-max-q-workstation-edition-and-2-jetson-agx-orin-dev-kit-to-the-university-of-houston-we-are-grateful-to-nvidia-for-their-generous-support-of-academic-research-and-innovation",
          title: '🎉 Our project Heterogeneous Multi-Robot Waste Detection with Conformal Runtime Monitoring has been...',
          description: "",
          section: "News",},{id: "news-our-paper-elastic-efficient-once-for-all-iterative-search-for-object-detection-on-microcontrollers-has-been-accepted-by-ieee-transactions-on-computers-paper-arxiv-code",
          title: '🎉 Our paper ELASTIC: Efficient Once For All Iterative Search for Object Detection...',
          description: "",
          section: "News",},{id: "projects-modeling-traffic-accident-severity-in-texas",
          title: 'Modeling Traffic Accident Severity in Texas',
          description: "Predicting traffic accident severity (2016–2023) using LightGBM, LDA, Random Forest and K-Means clustering.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/10_traffic_severity/";
            },},{id: "projects-admm-pruning-for-efficient-deep-learning",
          title: 'ADMM Pruning for Efficient Deep Learning',
          description: "Comparing ADMM-based optimization pruning against magnitude-based heuristics on lightweight CIFAR-10 models.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/11_admm_pruning/";
            },},{id: "projects-elastic-efficient-once-for-all-iterative-search-for-object-detection-on-microcontrollers",
          title: 'ELASTIC — Efficient Once-For-All Iterative Search for Object Detection on Microcontrollers',
          description: "A unified, hardware-aware NAS framework for TinyML object detection, accepted at IEEE Transactions on Computers (2026).",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/1_elastic/";
            },},{id: "projects-trashdet-iterative-nas-for-efficient-waste-detection",
          title: 'TrashDet — Iterative NAS for Efficient Waste Detection',
          description: "A hardware-aware iterative NAS framework that brings trash detection to TinyML and microcontrollers (WACVW 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/2_trashdet/";
            },},{id: "projects-1-lipschitz-layers-beyond-classification",
          title: '1-Lipschitz Layers Beyond Classification',
          description: "Exploring 1-Lipschitz layers for robust object detection on SVHN with a Tinier SSD architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/3_robust_detection/";
            },},{id: "projects-d-a-d-driver-39-s-assistant-with-detection",
          title: 'D.A.D. — Driver&amp;#39;s Assistant with Detection',
          description: "Implementing YOLOv1 from scratch in PyTorch as a lightweight blind-spot monitor for visually impaired drivers.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/4_dad/";
            },},{id: "projects-devastating-driving-prevention-device-ddpd",
          title: 'Devastating Driving Prevention Device (DDPD)',
          description: "A low-cost driving simulator built with NI LabVIEW, an Arduino Uno, FSRs and an ADXL335 accelerometer.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/5_ddpd/";
            },},{id: "projects-wireless-elevator-control",
          title: 'Wireless Elevator Control',
          description: "Replacing elevator cabling with Frequency Shift Keying (FSK) modulation, custom analog circuits and stepper motors.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/6_wireless_elevator_control/";
            },},{id: "projects-hand-gestured-stroller",
          title: 'Hand-Gestured Stroller',
          description: "Embedded control with TM4C123 and an MPU6050 accelerometer for hands-free stroller navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/7_hand_gestured_stroller/";
            },},{id: "projects-disease-diagnosis-with-deep-learning",
          title: 'Disease Diagnosis with Deep Learning',
          description: "A symptom-checker built around a Dense Neural Network implemented from scratch in MATLAB.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/8_disease_diagnosis/";
            },},{id: "projects-otto-sorting-bin",
          title: 'Otto Sorting Bin',
          description: "Automating waste management with YOLOv8 object detection and a custom T-Bot gantry mechanism on a Jetson Nano.",
          section: "Projects",handler: () => {
              window.location.href = "/tony.github.io/projects/9_otto_sorting_bin/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
