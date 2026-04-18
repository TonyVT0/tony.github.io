---
layout: page
title: Hand-Gestured Stroller
description: Embedded control with TM4C123 and an MPU6050 accelerometer for hands-free stroller navigation.
img: assets/img/hand-gestured-stroller/Figure3.png
importance: 9
giscus_comments: false
---

> **Project overview.** The Hand-Gestured Stroller is an embedded systems project designed to alleviate the physical strain of manually pushing baby strollers. Using a **Tiva C Series TM4C123 microcontroller** and an **MPU6050 accelerometer**, this project creates a vehicle that autonomously moves, turns and stops based on the user's hand orientation in real time.

## Introduction

Parenting often involves significant physical exertion, particularly when transporting toddlers. While the baby stroller (invented in 1733) solved the issue of carrying a child, it still requires manual pushing. This becomes increasingly difficult for parents with multiple children or physical limitations.

Our team developed the Hand-Gestured Stroller. Instead of a physical handle, the user controls the stroller via a handheld module containing an accelerometer. The system interprets hand tilt to drive the motors, offering a hands-free experience.

## System architecture

### 1. Hardware configuration

- **Master controller:** TM4C123GXL (ARM Cortex-M4)
- **Sensor:** MPU6050 (3-axis accelerometer + gyroscope)
- **Actuation:** 2× Noyito 170 W high-power H-bridge motor drivers
- **Power:** 2× 12 V 6 A batteries (series for 24 V)
- **Debugging:** Arduino Uno (bridged via UART for serial monitoring)

![Hardware schematic diagram]({{ '/assets/img/hand-gestured-stroller/Figure1.png' | relative_url }})

_Figure 1: Schematic showing connections between the TM4C123, MPU6050 and H-bridge drivers._

### 2. Communication protocols

1. **I2C** — between the TM4C123 and MPU6050. The microcontroller reads the X/Y/Z acceleration registers at 1 kHz.
2. **PWM** — controls the speed and direction of the DC motors via the H-bridges.

## Methodology

### 1. Finite state machine

The control logic is implemented as an FSM. The accelerometer outputs raw data ranging 0g–4g. We map specific threshold ranges to five distinct states: **STOP, DRIVE, REVERSE, LEFT, RIGHT**.

$$
\text{State} =
\begin{cases}
\text{DRIVE} & \text{if } X \ge 3.5,\ Y \le 0.5,\ 0.5 \le Z \le 1.5 \\
\text{LEFT} & \text{if } X \ge 3.5,\ 2.5 \le Y \le 3.5,\ Z \le 0.5 \\
\text{RIGHT} & \text{if } X \ge 3.5,\ 0.5 \le Y \le 1.5,\ Z \ge 3.5 \\
\text{REVERSE} & \text{if } 2.5 \le X \le 3.5,\ Y \le 0.5,\ Z \ge 3.5 \\
\text{STOP} & \text{Default / Out of range}
\end{cases}
$$

Any reading outside these "safe zones" defaults the system to STOP for safety.

![Finite state machine diagram]({{ '/assets/img/hand-gestured-stroller/Figure2.png' | relative_url }})

_Figure 2: FSM determining motor output based on sensor input._

### 2. PWM calculation

We configured a 50 Hz PWM frequency. The load value for the countdown timer is

$$
\text{PWM}_{\text{LOAD}} = \frac{\text{ClockRate}}{\text{Divisor} \times \text{Frequency}} - 1
$$

With a 16 MHz clock and the default divisor, this lets us set precise duty cycles for differential steering and straight-line driving.

### 3. Debugging with UART

The TM4C123 has no native serial monitor for runtime debugging, so we bridged TX→RX to an Arduino Uno and used the Arduino IDE Serial Monitor to troubleshoot sensor noise and logic errors.

## Results

### Prototype performance

The final prototype successfully:

1. Initializes I2C and calibrates the MPU6050.
2. Reads hand tilt data in real time.
3. Drives the 12 V motors forward, backward and turns based on gestures.

![Final prototype build]({{ '/assets/img/hand-gestured-stroller/Figure3.png' | relative_url }})

_Figure 3: The assembled Hand-Gestured Stroller prototype._

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/6kuJ8ttrmO0" title="Hand-Gestured Stroller demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Power analysis

Under load, the motors drew approximately **12 A**, which caused thermal inefficiency and fast battery drain — largely due to the direct-drive configuration lacking gear reduction.

## Key findings

1. **Mechanical efficiency vs. electronic control.** No amount of software optimization can fix a mechanical mismatch — direct-drive motors without gearing required excessive torque, resulting in 12 A current draw and heat. A gearbox would have allowed efficient RPM with the necessary torque.
2. **Sampling-rate management.** A 1 ms blind cycle delay was added after every read/write; processing data faster than the sensor could provide it caused bus errors.
3. **Cross-platform debugging.** Using an Arduino as a display interface for a more powerful ARM Cortex controller is a cost-effective way to visualize data without expensive JTAG debuggers.

## Conclusion

The Hand-Gestured Stroller successfully proves the concept of controlling a heavy-load vehicle using MEMS accelerometers and embedded logic. Future iterations would integrate gear reduction to lower current draw and add a PID controller to smooth jerky transitions between FSM states.
