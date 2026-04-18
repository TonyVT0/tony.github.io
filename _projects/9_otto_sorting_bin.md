---
layout: page
title: Otto Sorting Bin
description: Automating waste management with YOLOv8 object detection and a custom T-Bot gantry mechanism on a Jetson Nano.
img: assets/img/otto-sorting-bin/Figure4.png
importance: 6
giscus_comments: false
---

> **Project overview.** The Otto Sorting Bin is an autonomous waste-management system designed to solve the problem of recycling contamination. By integrating **YOLOv8 object detection** with a custom **T-Bot gantry mechanism**, this project demonstrates how edge computing (Jetson Nano) can be used to identify, grasp and sort waste materials in real time.

## Introduction

Waste management faces a critical bottleneck: the end user. Most of society struggles to differentiate between trash and recyclables, leading to high contamination rates. When non-recyclables enter the recycling stream, entire batches often get sent to landfills.

To address this, we developed the **Otto Sorting Bin**. Instead of relying on human decision-making, Otto uses AI to detect objects placed within the bin and a mechanical claw to sort them into their respective compartments.

## System architecture

### 1. Hardware design — the T-Bot mechanism

We initially considered an H-Bot design (X, Y and Z planes) but opted for a **T-Bot**: it restricts movement to the X–Y plane but significantly reduces hardware complexity and cost.

The system is powered by an **NVIDIA Jetson Nano**, which handles image processing and decision logic. It communicates via GPIO with motor drivers controlling NEMA 17 stepper motors for the gantry, and an Arduino controlling servo motors for the claw mechanism.

![Hardware block diagram]({{ '/assets/img/otto-sorting-bin/Figure1.png' | relative_url }})

_Figure 1: Hardware communication flow between the Jetson Nano, stepper drivers and Arduino._

### 2. The vision model: YOLOv8n

For the "eyes" of the system, we used **YOLOv8n (Nano)** — chosen specifically for its efficiency on edge devices like the Jetson Nano. The model was fine-tuned on a custom dataset to detect specific trash and recyclable items within the bin's environment.

![YOLOv8 detection results]({{ '/assets/img/otto-sorting-bin/Figure2.png' | relative_url }})

_Figure 2: Custom YOLOv8 detection identifying recyclables in the bin environment._

## Algorithm and logic

### 1. Coordinate mapping

A major challenge in robotics is translating camera pixels into physical motor steps. We implemented a linear mapping equation to convert target pixel coordinates $$(t)$$ into the stepper motor's step coordinates $$(x, y)$$.

For the X-axis mapping:

$$MaxSteps_x = m \cdot t + b \implies m = \frac{MaxSteps_x - b}{t}$$

Here, $$m$$ is the conversion factor and $$b$$ represents the bias (offset) required to align the claw's pressure point with the object.

### 2. The X-Min search algorithm

Because the T-Bot operates on a restricted plane, the claw cannot "jump" over objects; it must navigate around them or prioritize accessible items. The **X-Min algorithm**:

1. **Sense** — capture a frame and detect all objects.
2. **Filter** — remove "blacklisted" objects previously deemed unreachable.
3. **Search** — identify the target object closest to the claw's resting position that has no obstructions in its path.
4. **Execute** — if the path is clear, attempt a grab. If the grab fails, blacklist the object and retry.

![Main sorting flowchart]({{ '/assets/img/otto-sorting-bin/Figure3.png' | relative_url }})

_Figure 3: Logic flow from initialization to object sensing and sorting._

## Implementation results

### Cost

By using wood for the chassis, 3D-printed parts for the claw and mounts, and a T-Bot configuration, total build cost was approximately **$246**:

| Component          |  Cost ($)  |
| :----------------- | :--------: |
| Jetson Nano        |   50.00    |
| Wood & chassis     |   65.00    |
| Motors & drivers   |   34.00    |
| Aluminum C-channel |   34.04    |
| **Total**          | **246.04** |

### Prototype performance

The final prototype:

1. Initializes and calibrates the gantry system.
2. Detects waste items using the webcam.
3. Physically moves the claw to the mapped coordinates.
4. Sorts items into "Trash" or "Recycle" bins.

![Final prototype build]({{ '/assets/img/otto-sorting-bin/Figure4.png' | relative_url }})

_Figure 4: The fully constructed Otto Sorting Bin prototype._

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/jShU_pcXrUc" title="Otto Sorting Bin demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Key findings

1. **Hardware–software trade-off.** Choosing the T-Bot over the H-Bot saved cost but increased algorithmic complexity, effectively trading hardware dollars for software development time.
2. **The "blacklist" necessity.** Implementing an Intersection-over-Union (IoU) check let the system remember which objects were unreachable, preventing infinite loops on difficult items.
3. **Edge constraints.** Running YOLOv8n simultaneously with motor control on a Jetson Nano requires careful resource management.

## Conclusion

The Otto Sorting Bin proves that automated waste segregation is feasible using accessible hardware and modern computer vision. Future improvements include adding a "dump" mechanism for clearing the entire tray, upgrading to wireless battery power, and expanding the dataset.

🏆 _1st Place — Senior Project Lab (ELET 4208), Cullen College of Engineering, University of Houston._
