---
layout: page
title: 🔎 ELASTIC — Efficient Once-For-All Iterative Search for Object Detection on Microcontrollers
description: A unified, hardware-aware NAS framework for TinyML object detection, accepted at IEEE Transactions on Computers (2026).
img: assets/img/elastic/maxsvhn.jpg
importance: 1
category: research
giscus_comments: false
---

> **Abstract.** Deploying high-performance object detectors on TinyML platforms poses significant challenges due to tight hardware constraints and the modular complexity of modern detection pipelines. Neural Architecture Search (NAS) offers a path toward automation, but existing methods either restrict optimization to individual modules — sacrificing cross-module synergy — or require global searches that are computationally intractable. We propose **ELASTIC** (Efficient Once-for-All Iterative Search for Object Detection on Microcontrollers), a unified, hardware-aware NAS framework that alternates optimization across modules (e.g., backbone, neck, and head) in a cyclic fashion. ELASTIC introduces a novel **Population Passthrough** mechanism in evolutionary search that retains high-quality candidates between search stages, yielding faster convergence, up to an **8% final mAP gain**, and eliminates search instability observed without population passthrough.

---

📄 **Paper:** [arXiv:2503.21999](https://arxiv.org/abs/2503.21999)
💻 **Code:** [github.com/NAIL-UH/ELASTIC](https://github.com/NAIL-UH/ELASTIC)
🌐 **Project page:** [nail-uh.github.io/elastic.github.io](https://nail-uh.github.io/elastic.github.io/)

*Accepted at IEEE Transactions on Computers, 2026.*
