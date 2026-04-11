---
layout: page
title: TrashDet — Iterative NAS for Efficient Waste Detection
description: A hardware-aware iterative NAS framework that brings trash detection to TinyML and microcontrollers (WACVW 2026).
img: assets/img/trashdet/Figure1.png
importance: 1
giscus_comments: false
---

> **Abstract.** This paper addresses trash detection on the TACO dataset under strict TinyML constraints using an iterative hardware-aware neural architecture search framework targeting edge and IoT devices. The proposed method constructs a Once-for-All-style ResDets supernet and performs iterative evolutionary search that alternates between backbone and neck/head optimization, supported by a population passthrough mechanism and an accuracy predictor to reduce search cost and improve stability. This framework yields a family of deployment-ready detectors, termed **TrashDets**.
>
> On a five-class TACO subset (paper, plastic, bottle, can, cigarette), the strongest variant **TrashDet-l** achieves **19.5 mAP50** with 30.5M parameters, improving accuracy by up to **3.6 mAP50** over prior detectors while using substantially fewer parameters. On the **MAX78002** microcontroller with the TrashNet dataset, two specialized variants — TrashDet-ResNet and TrashDet-MBNet — jointly dominate the ai87-fpndetector baseline. TrashDet-ResNet reaches **7,525 μJ** energy per inference at **26.7 ms** latency and **37.45 FPS**, while TrashDet-MBNet improves mAP50 by **10.2 points**. Together they reduce energy by up to **88%**, latency by up to **78%**, and average power by up to **53%** compared to prior TinyML detectors.

---

📄 **Paper:** [WACVW 2026 (open access)](https://openaccess.thecvf.com/content/WACV2026W/WasteVision/papers/Tran_TrashDet_Iterative_Neural_Architecture_Search_for_Efficient_Waste_Detection_WACVW_2026_paper.pdf)
🎞️ **Slides:** [wacv2026.pdf]({{ '/assets/pdf/wacv2026.pdf' | relative_url }})
▶️ **Video:** [YouTube](https://www.youtube.com/watch?v=lOk6MGVY1E4)
🌐 **Project page:** [nail-uh.github.io/trashdet.github.io](https://nail-uh.github.io/trashdet.github.io/)

*Presented at WASTEVISION Workshop, IEEE/CVF WACV 2026, Tucson, AZ.*
